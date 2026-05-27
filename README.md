# Al-Ma'tsurat Hasan Al-Banna - Wazifah Sugro

Aplikasi web statis untuk membaca **Wazifah Sugro** dari Al-Ma'tsurat Hasan Al-Banna. Aplikasi ini dapat dipasang langsung di GitHub Pages tanpa backend dan tanpa database.

## Perubahan versi optimasi

- File JSON terpisah sudah dihapus.
- Data 32 bacaan Wazifah Sugro sekarang tertanam langsung di `js/app.js` sebagai konstanta `WAZIFAH_DATA`.
- Aplikasi tidak lagi menggunakan `fetch()` untuk membaca `data/wazifah-sugro.json`.
- Risiko error path JSON pada GitHub Pages berkurang.
- Bacaan yang terdiri dari beberapa ayat tetap ditampilkan per ayat: teks Arab ayat diikuti langsung oleh artinya.
- Opsi tampilan bacaan tetap tersedia: **Arab saja** atau **Arab + arti**.
- Counter, progress, ukuran font, dan mode gelap tetap tersimpan lokal di browser.
- Import Google Fonts dipindahkan ke `<head>` agar lebih rapi daripada `@import` di CSS.

## Struktur File

```text
almatsurat-gh-pages/
├── index.html
├── README.md
├── .nojekyll
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Cara Menjalankan di Lokal

Karena data sudah tertanam di JavaScript, aplikasi bisa dibuka langsung melalui `index.html`. Namun untuk hasil yang paling mendekati GitHub Pages, jalankan melalui server lokal:

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

## Deploy ke GitHub Pages

1. Upload semua file ke repository GitHub.
2. Masuk ke **Settings** → **Pages**.
3. Pada bagian **Build and deployment**, pilih branch yang digunakan, misalnya `main`.
4. Pilih folder `/root`.
5. Simpan pengaturan.

## Mengubah Data Bacaan

Data bacaan berada di file:

```text
js/app.js
```

Cari bagian berikut:

```js
const WAZIFAH_DATA = [...];
```

Ubah data pada konstanta tersebut jika ada koreksi teks Arab, arti, urutan, atau jumlah pengulangan.

## Catatan Font Arab

Aplikasi memakai urutan font Arab berikut:

```css
"ArabicFont", "Amiri Quran", "Noto Naskh Arabic", "Traditional Arabic", "Scheherazade New", serif
```

Jika ingin memakai font Arab lokal, tambahkan file font secara legal dan definisikan `@font-face` sendiri di `css/style.css`.

## Catatan Konten

Teks Arab, terjemahan, urutan bacaan, dan jumlah pengulangan tetap perlu diverifikasi ulang terhadap rujukan Al-Ma'tsurat Hasan Al-Banna atau sumber resmi yang digunakan sebelum dipublikasikan luas.
