const STORAGE_KEYS = {
  theme: 'almatsurat.theme',
  fontSize: 'almatsurat.fontSize',
  counters: 'almatsurat.counters',
  lastRoute: 'almatsurat.lastRoute'
};

const READER_ROUTES = {
  pagi: {
    title: 'Doa Pagi',
    eyebrow: "Al-Ma'tsurat",
    file: 'data/pagi.json',
    description: "Bacaan pagi Al-Ma'tsurat Hasan Al-Banna. Counter akan tersimpan di browser perangkat ini."
  },
  petang: {
    title: 'Doa Petang',
    eyebrow: "Al-Ma'tsurat",
    file: 'data/petang.json',
    description: "Bacaan petang Al-Ma'tsurat Hasan Al-Banna. Counter akan tersimpan di browser perangkat ini."
  },
  wazifah: {
    title: 'Wazifah Sugro',
    eyebrow: "Al-Ma'tsurat Hasan Al-Banna",
    file: 'data/wazifah-sugro.json',
    description: 'Bacaan Wazifah Sugro dalam format JSON yang sudah dirapikan.'
  }
};

const state = {
  currentView: 'home',
  currentRoute: 'home',
  currentData: [],
  currentType: null,
  dataCache: {},
  counters: loadJson(STORAGE_KEYS.counters, {})
};

const views = {
  home: document.getElementById('homeView'),
  reader: document.getElementById('readerView'),
  tentang: document.getElementById('aboutView')
};

const prayerList = document.getElementById('prayerList');
const statusMessage = document.getElementById('statusMessage');
const readerTitle = document.getElementById('readerTitle');
const readerDescription = document.getElementById('readerDescription');
const readerEyebrow = document.getElementById('readerEyebrow');
const searchInput = document.getElementById('searchInput');
const fontSizeSelect = document.getElementById('fontSizeSelect');
const themeToggle = document.getElementById('themeToggle');
const resetCountersBtn = document.getElementById('resetCountersBtn');
const printBtn = document.getElementById('printBtn');
const progressText = document.getElementById('progressText');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

initPreferences();
window.addEventListener('hashchange', handleRoute);
document.addEventListener('click', handleCounterClick);
searchInput.addEventListener('input', () => renderPrayerList(filterData(searchInput.value)));
fontSizeSelect.addEventListener('change', () => setFontSize(fontSizeSelect.value));
themeToggle.addEventListener('click', toggleTheme);
resetCountersBtn.addEventListener('click', resetCountersForCurrentType);
printBtn.addEventListener('click', () => window.print());

handleRoute();

function initPreferences() {
  const theme = safeStorageGet(STORAGE_KEYS.theme) || 'light';
  const fontSize = safeStorageGet(STORAGE_KEYS.fontSize) || 'medium';
  document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.fontSize = ['small', 'medium', 'large'].includes(fontSize) ? fontSize : 'medium';
  themeToggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  fontSizeSelect.value = document.documentElement.dataset.fontSize;
}

async function handleRoute() {
  const route = normalizeRoute(location.hash || '#home');
  updateActiveNav(route);

  if (READER_ROUTES[route]) {
    await showReader(route);
    return;
  }

  if (route === 'tentang') {
    showView('tentang', route);
    return;
  }

  showView('home', 'home');
}

function normalizeRoute(hashValue) {
  return String(hashValue || '#home').replace(/^#/, '').trim().toLowerCase() || 'home';
}

function updateActiveNav(route) {
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.classList.toggle('active', link.dataset.navLink === route);
  });
}

function showView(viewName, routeName = viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.hidden = name !== viewName;
  });

  state.currentView = viewName;
  state.currentRoute = routeName;
  safeStorageSet(STORAGE_KEYS.lastRoute, routeName);
}

async function showReader(type) {
  const routeConfig = READER_ROUTES[type];
  showView('reader', type);
  state.currentType = type;
  searchInput.value = '';
  prayerList.innerHTML = '';
  updateProgress();
  setStatus('Memuat data bacaan...');

  readerTitle.textContent = routeConfig.title;
  readerEyebrow.textContent = routeConfig.eyebrow;
  readerDescription.textContent = routeConfig.description;

  try {
    const data = await loadPrayerData(routeConfig.file);
    state.currentData = data;
    renderPrayerList(state.currentData);
  } catch (error) {
    state.currentData = [];
    prayerList.innerHTML = renderErrorCard(routeConfig.file);
    setStatus('Data bacaan tidak dapat dimuat.');
    updateProgress();
    console.error(error);
  }
}

async function loadPrayerData(filePath) {
  if (state.dataCache[filePath]) return state.dataCache[filePath];

  const response = await fetch(filePath, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Gagal memuat ${filePath}: ${response.status}`);

  const payload = await response.json();
  const data = normalizePrayerPayload(payload);
  if (!data.length) throw new Error(`File ${filePath} tidak berisi array bacaan yang valid.`);

  state.dataCache[filePath] = data;
  return data;
}

function normalizePrayerPayload(payload) {
  const rawItems = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : [];

  return rawItems
    .map((item, index) => {
      const urutan = Number(item.urutan || index + 1);
      const jumlah = normalizeRepeat(item.jumlah);
      return {
        urutan,
        id: String(item.id || `bacaan-${urutan || index + 1}`),
        judul: String(item.judul || `Bacaan ${urutan || index + 1}`),
        arab: item.arab || '',
        latin: item.latin || '',
        arti: item.arti || '',
        jumlah,
        kategori: item.kategori || '',
        sumber: item.sumber || '',
        catatan: item.catatan || ''
      };
    })
    .sort((a, b) => a.urutan - b.urutan);
}

function normalizeRepeat(value) {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue) || numberValue < 1) return 1;
  return Math.max(1, Math.floor(numberValue));
}

function renderPrayerList(items) {
  const filteredItems = Array.isArray(items) ? items : [];

  if (!filteredItems.length) {
    prayerList.innerHTML = '<div class="empty-card">Tidak ada bacaan yang cocok dengan kata kunci tersebut.</div>';
    setStatus('Tidak ada bacaan yang cocok.');
    updateProgress();
    return;
  }

  const totalText = filteredItems.length === state.currentData.length
    ? `${filteredItems.length} bacaan ditampilkan.`
    : `${filteredItems.length} dari ${state.currentData.length} bacaan ditampilkan.`;
  setStatus(totalText);
  prayerList.innerHTML = filteredItems.map((item) => renderPrayerCard(item)).join('');
  updateProgress();
}

function renderPrayerCard(item) {
  const counterKey = getCounterKey(item.id);
  const count = Number(state.counters[counterKey] || 0);
  const target = normalizeRepeat(item.jumlah);
  const isDone = count >= target;
  const displayNumber = Number.isFinite(item.urutan) ? item.urutan : '';

  return `
    <article class="prayer-card ${isDone ? 'prayer-card-done' : ''}" id="${domId(item.id)}">
      <div class="prayer-meta">
        <div>
          <h2 class="prayer-title">${displayNumber ? `${displayNumber}. ` : ''}${escapeHtml(item.judul)}</h2>
          ${item.sumber ? `<p class="prayer-source">Sumber: ${escapeHtml(item.sumber)}</p>` : ''}
        </div>
        <span class="repeat-badge" aria-label="Dibaca ${target} kali">${target}x</span>
      </div>

      ${item.arab ? renderArabicText(item.arab) : ''}
      ${item.latin ? `<p class="latin-text">${formatMultilineText(item.latin)}</p>` : ''}
      ${item.arti ? `<p class="translation-text">${formatMultilineText(item.arti)}</p>` : ''}
      ${item.catatan ? `<p class="note-text">${formatMultilineText(item.catatan)}</p>` : ''}

      <div class="counter-row">
        <span class="counter-status ${isDone ? 'done' : ''}" aria-live="polite">
          ${Math.min(count, target)} / ${target}${isDone ? ' • selesai' : ''}
        </span>
        <div class="counter-actions">
          <button class="btn btn-accent" type="button" data-counter-add="${escapeAttr(item.id)}" ${isDone ? 'aria-label="Bacaan ini sudah selesai, tambah hitungan tetap dibatasi"' : ''}>Hitung</button>
          <button class="btn btn-ghost" type="button" data-counter-reset="${escapeAttr(item.id)}">Reset</button>
        </div>
      </div>
    </article>
  `;
}

function renderArabicText(value) {
  const lines = String(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return '';

  const html = lines.map((line) => {
    if (/^(ayat|surat|doa|hadits|dzikir)\s+/i.test(line)) {
      return `<span class="arabic-label" dir="ltr">${escapeHtml(line)}</span>`;
    }
    return `<span class="arabic-line" dir="rtl" lang="ar">${escapeHtml(line)}</span>`;
  }).join('');

  return `<div class="arabic-text">${html}</div>`;
}

function formatMultilineText(value) {
  return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function renderErrorCard(filePath) {
  return `
    <div class="empty-card error-card">
      <strong>Data belum dapat dibuka.</strong>
      <p>Pastikan file <code>${escapeHtml(filePath)}</code> tersedia dan aplikasi dijalankan melalui server lokal atau GitHub Pages, bukan langsung dari file <code>index.html</code>.</p>
      <p>Untuk menjalankan lokal: <code>python -m http.server 8000</code>, lalu buka <code>http://localhost:8000</code>.</p>
    </div>
  `;
}

function handleCounterClick(event) {
  const addButton = event.target.closest('[data-counter-add]');
  const resetButton = event.target.closest('[data-counter-reset]');

  if (addButton) {
    const itemId = addButton.dataset.counterAdd;
    const item = state.currentData.find((entry) => entry.id === itemId);
    if (!item) return;

    const target = normalizeRepeat(item.jumlah);
    const key = getCounterKey(itemId);
    state.counters[key] = Math.min(Number(state.counters[key] || 0) + 1, target);
    saveCounters();
    renderPrayerList(filterData(searchInput.value));
    return;
  }

  if (resetButton) {
    const itemId = resetButton.dataset.counterReset;
    const key = getCounterKey(itemId);
    delete state.counters[key];
    saveCounters();
    renderPrayerList(filterData(searchInput.value));
  }
}

function resetCountersForCurrentType() {
  if (!state.currentType) return;
  const prefix = `${state.currentType}:`;
  Object.keys(state.counters).forEach((key) => {
    if (key.startsWith(prefix)) delete state.counters[key];
  });
  saveCounters();
  renderPrayerList(filterData(searchInput.value));
}

function filterData(query) {
  const keyword = normalizeSearchText(query);
  if (!keyword) return state.currentData;

  return state.currentData.filter((item) => {
    return [item.judul, item.arab, item.latin, item.arti, item.sumber, item.catatan, item.kategori]
      .filter(Boolean)
      .some((value) => normalizeSearchText(value).includes(keyword));
  });
}

function updateProgress() {
  if (!progressText) return;
  const total = state.currentData.length;
  if (!total) {
    progressText.textContent = '0 / 0 selesai';
    return;
  }

  const done = state.currentData.filter((item) => {
    const count = Number(state.counters[getCounterKey(item.id)] || 0);
    return count >= normalizeRepeat(item.jumlah);
  }).length;

  progressText.textContent = `${done} / ${total} selesai`;
}

function setStatus(message) {
  statusMessage.textContent = message;
}

function getCounterKey(id) {
  return `${state.currentType}:${id}`;
}

function saveCounters() {
  safeStorageSet(STORAGE_KEYS.counters, JSON.stringify(state.counters));
}

function setFontSize(value) {
  const nextValue = ['small', 'medium', 'large'].includes(value) ? value : 'medium';
  document.documentElement.dataset.fontSize = nextValue;
  safeStorageSet(STORAGE_KEYS.fontSize, nextValue);
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  themeToggle.setAttribute('aria-pressed', String(nextTheme === 'dark'));
  safeStorageSet(STORAGE_KEYS.theme, nextTheme);
}

function normalizeSearchText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function loadJson(key, fallback) {
  try {
    const raw = safeStorageGet(key);
    if (!raw) return fallback;
    return JSON.parse(raw) || fallback;
  } catch {
    return fallback;
  }
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage dapat gagal pada mode privat atau browser tertentu; aplikasi tetap berjalan tanpa penyimpanan lokal.
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function domId(value) {
  return String(value || 'bacaan')
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'bacaan';
}
