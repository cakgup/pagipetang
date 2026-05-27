# Al-Ma'tsurat Hasan Al-Banna — GitHub Pages

Aplikasi web statis untuk membaca Al-Ma'tsurat Hasan Al-Banna. Aplikasi ini dibuat tanpa login, tanpa database, dan dapat langsung dipublikasikan melalui GitHub Pages.

## Isi Perbaikan Versi Ini

- Menjadikan paket `json-rapi` sebagai basis karena data bacaan lebih lengkap.
- Menambahkan menu **Wazifah Sugro**.
- Memperbaiki pembacaan data JSON agar mendukung format array langsung maupun format terstruktur dengan properti `data`.
- Menambahkan normalisasi data: `id`, `judul`, `urutan`, dan `jumlah`.
- Menambahkan progress bacaan: `x / total selesai`.
- Memperbaiki counter agar tersimpan per jenis bacaan: pagi, petang, dan wazifah.
- Memperbaiki tampilan teks Arab multiline agar label seperti `Ayat 1` tidak tercampur sebagai teks Arab RTL.
- Menambahkan pencarian pada judul, teks Arab, arti, sumber, catatan, dan kategori.
- Menambahkan penanganan error bila JSON tidak dapat dimuat.
- Menambahkan proteksi `localStorage` agar aplikasi tetap berjalan pada browser yang membatasi penyimpanan lokal.
- Memperbaiki tampilan mobile untuk tombol dan kartu bacaan.

## Struktur Folder

```text
almatsurat-gh-pages/
├── index.html
├── README.md
├── .nojekyll
├── css/
│   └── style.css
├── js/
│   └── app.js
└── data/
    ├── pagi.json
    ├── petang.json
    ├── wazifah-sugro.json
    └── wazifah-sugro-structured.json
```

## Cara Menjalankan Lokal

Karena aplikasi menggunakan `fetch()` untuk membaca file JSON, jalankan aplikasi melalui local server, bukan langsung membuka file `index.html`.

```bash
cd almatsurat-gh-pages
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

## Cara Upload ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `almatsurat-online`.
2. Upload seluruh isi folder `almatsurat-gh-pages` ke repository tersebut.
3. Buka **Settings** → **Pages**.
4. Pada bagian **Build and deployment**, pilih:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Klik **Save**.
6. Tunggu hingga GitHub Pages aktif.

URL biasanya berbentuk:

```text
https://USERNAME.github.io/almatsurat-online/
```

## Mengubah Data Bacaan

Edit file berikut sesuai kebutuhan:

- `data/pagi.json`
- `data/petang.json`
- `data/wazifah-sugro.json`

Contoh struktur item:

```json
{
  "urutan": 1,
  "id": "001-taawudz",
  "judul": "Ta'awudz",
  "arab": "...",
  "latin": "...",
  "arti": "...",
  "jumlah": 1,
  "kategori": "pagi-petang",
  "sumber": "Al-Ma'tsurat Wazifah Sugro",
  "catatan": "Opsional"
}
```

## Catatan Penting Konten

Data bacaan sudah dirapikan secara teknis agar dapat ditampilkan oleh aplikasi. Sebelum digunakan untuk publikasi luas, verifikasi kembali:

- Urutan bacaan Al-Ma'tsurat Hasan Al-Banna
- Teks Arab
- Transliterasi
- Terjemahan
- Jumlah pengulangan
- Rujukan sumber

## Tidak Ada Login

Aplikasi ini tidak memiliki login, registrasi, database pengguna, atau penyimpanan data pribadi. Preferensi dan counter hanya disimpan pada browser masing-masing pengguna menggunakan `localStorage`.
