# PagiPetang - Al-Ma'tsurat Hasan Al-Banna

<p align="center">
  <strong>Aplikasi bacaan pagi dan petang berbasis frontend statis yang memuat Al-Ma'tsurat Sughro, Kubro, dan dzikir setelah shalat.</strong><br>
  Ringan, mobile-friendly, offline-ready, dan mudah dijadikan basis aplikasi dzikir serupa.
</p>

<p align="center">
  <a href="https://cakgup.github.io/pagipetang/">
    <img src="https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github" alt="GitHub Pages">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
  </a>
  <img src="https://img.shields.io/badge/Static-No%20Backend-475569" alt="No Backend">
  <img src="https://img.shields.io/badge/PWA-Offline--Ready-2E7D32" alt="PWA Offline Ready">
</p>

---

## Bismillahirrahmanirrahim

Repository ini dibuat untuk menghadirkan bacaan dzikir yang nyaman dibuka dari perangkat apa pun, tanpa setup rumit dan tanpa ketergantungan backend.

README ini diperbarui agar:

- fitur yang tertulis sesuai dengan isi aplikasi sekarang;
- orang lain lebih mudah melakukan fork, duplikasi, atau perubahan konten;
- struktur data bacaan lebih mudah dipahami;
- branding dan aset lebih mudah diganti.

---

## Tentang Aplikasi

**PagiPetang** adalah aplikasi web statis yang sekarang memuat tiga koleksi utama:

- **Wazifah Sughro**
- **Wazifah Kubro**
- **Dzikir Setelah Shalat**

Semua data utama ditanam langsung di `js/app.js`, sehingga aplikasi dapat berjalan tanpa database, tanpa package manager, dan tanpa backend produksi.

---

## Fitur Terkini

| Fitur | Keterangan |
|---|---|
| Tiga koleksi bacaan | Sughro, Kubro, dan dzikir setelah shalat dalam satu aplikasi |
| Data tertanam di JavaScript | Tidak bergantung pada fetch file JSON terpisah untuk bacaan utama |
| Routing hash sederhana | Navigasi antar halaman bacaan tanpa framework |
| Arab + arti | Mode Arab saja atau Arab + arti |
| Pencarian | Cari berdasarkan judul, ayat, arti, sumber, atau catatan |
| Counter progres | Tandai bacaan yang sudah dibaca dan reset sesuai kebutuhan |
| Preferensi tersimpan | Tema, ukuran font, mode tampilan, dan progres tersimpan di browser |
| Backsound lokal | Audio lokal dapat diputar dari aset repo |
| Jadwal shalat di beranda | Widget waktu shalat dengan pengaturan lokasi dan GPS |
| Print friendly | Halaman bacaan dapat dicetak |
| Service worker | Cache asset inti untuk pengalaman yang lebih ringan |

---

## Struktur Repository

```text
pagipetang/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- app.js
|-- assets/
|   |-- doa.mp3
|   |-- logo_doa.png
|   `-- icons/
|-- manifest.webmanifest
|-- sw.js
|-- .nojekyll
|-- LICENSE
`-- README.md
```

Keterangan singkat:

| File/Folder | Fungsi |
|---|---|
| `index.html` | Struktur utama aplikasi dan elemen antarmuka |
| `css/style.css` | Styling, layout, mode gelap, dan responsivitas |
| `js/app.js` | Data bacaan, routing, render konten, counter, pencarian, dan preferensi |
| `assets/doa.mp3` | Backsound lokal |
| `assets/logo_doa.png` | Ilustrasi/logo aplikasi |
| `assets/icons/` | Ikon PWA |
| `sw.js` | Cache asset inti |

---

## Koleksi Bacaan Saat Ini

Dari kode saat ini, aplikasi sudah menampung:

- rangkaian **Wazifah Sughro**;
- rangkaian **Wazifah Kubro**;
- rangkaian **dzikir setelah shalat**;
- detail bacaan yang dapat berupa teks tunggal, rincian ayat, atau struktur verse;
- dukungan transliterasi dan terjemahan bila tersedia pada item.

Karena data ditanam langsung dalam JavaScript, perubahan konten utama dilakukan melalui file `js/app.js`.

---

## Menjalankan Secara Lokal

Untuk hasil paling mendekati deploy, jalankan melalui local server.

### Opsi 1 - Python

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

### Opsi 2 - Node.js

```bash
npx -y serve .
```

Lalu buka:

```text
http://localhost:3000
```

### Opsi 3 - Buka Langsung

Karena data bacaan utama ditanam di JavaScript, `index.html` sering kali tetap bisa dibuka langsung. Namun untuk service worker, manifest, dan perilaku PWA, tetap lebih baik memakai server lokal.

---

## Panduan Duplikasi dan Kustomisasi

### 1. Clone repository

```bash
git clone <url-repository-anda>
cd pagipetang
```

### 2. Ganti branding

Periksa dan sesuaikan:

- judul dan meta di `index.html`;
- logo di `assets/logo_doa.png`;
- ikon PWA di `assets/icons/`;
- teks footer, kredit, dan label navigasi.

### 3. Ganti atau tambah bacaan

Data utama berada di:

```text
js/app.js
```

Cari struktur koleksi seperti:

```js
const WAZIFAH_SUGRO_DATA = [...]
const WAZIFAH_KUBRO_RAW = ...
```

Saat mengubah isi, jaga konsistensi field seperti:

- `id`
- `title` atau `judul`
- `arabic` atau `arab`
- `translation` atau `arti`
- `repeat` atau `jumlah`
- `verses`, `rincian`, atau struktur detail lain

### 4. Sesuaikan jadwal shalat

Repo ini sudah memiliki widget jadwal shalat pada beranda. Jika hasil fork tidak membutuhkan fitur ini, Anda bisa:

- menonaktifkan UI lokasi dan widget;
- menghapus logika jadwal shalat dari `js/app.js`;
- atau mengganti sumber jadwal dengan layanan Anda sendiri.

### 5. Ganti backsound

Jika ingin memakai audio lain:

- ganti file `assets/doa.mp3`;
- atau ubah referensinya di `index.html`.

---

## Deploy

Aplikasi ini cocok dipublikasikan ke:

- GitHub Pages
- Cloudflare Pages
- Vercel
- hosting statis lain

Untuk GitHub Pages:

1. Push semua file ke branch utama.
2. Buka `Settings` repository.
3. Masuk ke `Pages`.
4. Pilih `Deploy from a branch`.
5. Pilih branch dan folder root.
6. Simpan lalu tunggu URL aktif.

---

## Checklist Sebelum Dibagikan

- [ ] Semua rute bacaan dapat dibuka
- [ ] Pencarian bekerja di tiap koleksi
- [ ] Mode Arab saja dan Arab + arti tampil benar
- [ ] Counter bisa ditambah dan direset
- [ ] Backsound dapat diputar jika aset dipakai
- [ ] Widget jadwal shalat bekerja atau sengaja dinonaktifkan
- [ ] Ikon PWA dan manifest sesuai branding baru
- [ ] Tidak ada identitas lembaga lama yang tersisa di teks atau aset

---

## Troubleshooting

### Bacaan tidak tampil

- cek apakah `js/app.js` termuat normal;
- cek apakah struktur data masih valid setelah diedit;
- buka console browser untuk melihat error JavaScript.

### Tema atau progres tidak tersimpan

- cek apakah browser mengizinkan `localStorage`;
- mode privat tertentu bisa membatasi penyimpanan.

### Backsound tidak berbunyi

- pastikan file `assets/doa.mp3` ada;
- sebagian browser meminta interaksi pengguna sebelum audio dapat diputar.

### PWA tidak bisa di-install

- akses melalui `http://localhost` atau `https://`;
- pastikan `manifest.webmanifest` dan `sw.js` termuat tanpa error.

---

## Catatan Keamanan

- Karena frontend ini statis, jangan menambahkan secret atau token ke dalam JavaScript publik.
- Jika Anda menambah API eksternal, simpan kunci sensitif di backend, bukan di repo ini.
- Audit ulang teks bacaan dan sumber terjemahan sebelum publikasi luas.

---

## Teknologi

| Teknologi | Fungsi |
|---|---|
| HTML | Struktur aplikasi |
| CSS | Layout, tema, dan tampilan responsif |
| JavaScript | Data bacaan, routing, dan interaksi |
| localStorage | Penyimpanan preferensi dan progres lokal |
| Service Worker | Cache asset inti |
| Web App Manifest | Dukungan PWA |

---

## Lisensi

Repository ini menggunakan lisensi **MIT License**.  
Lihat detail pada file [LICENSE](LICENSE).

---

<p align="center">
  <strong>Dibuat sederhana agar mudah dipelajari, dipakai, dan dikembangkan kembali untuk kebaikan.</strong>
</p>

<p align="center">
  <sub>developed with &#10084;&#65039; by <a href="https://cakgup.codeberg.page">cakgup</a></sub>
</p>
