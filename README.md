# PagiPetang — Al-Ma'tsurat Hasan Al-Banna

### Aplikasi web statis untuk membaca Wazifah Sugro, dzikir pagi dan petang, secara ringan, rapi, dan mudah digunakan dari perangkat apa pun.

![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-24292F?style=for-the-badge&logo=github)
![Static Web](https://img.shields.io/badge/App-Static%20Web-0F766E?style=for-the-badge&logo=html5)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![No Backend](https://img.shields.io/badge/Backend-Not%20Required-64748B?style=for-the-badge)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[**Lihat Demo**](https://cakgup.github.io/pagipetang/) · [Cara Menjalankan](#-cara-menjalankan-di-lokal) · [Deploy](#-deploy-ke-github-pages) · [Catatan Konten](#-catatan-konten)

---

## السلام عليكم ورحمة الله وبركاته

**PagiPetang** adalah aplikasi web statis untuk membaca **Wazifah Sugro** dari susunan **Al-Ma'tsurat Hasan Al-Banna**. Aplikasi ini dibuat agar bacaan dzikir pagi dan petang dapat dibuka dengan tampilan yang nyaman, sederhana, dan mudah dibagikan melalui GitHub Pages.

Aplikasi ini tidak membutuhkan backend, database, framework, package manager, atau proses instalasi yang rumit. Seluruh data bacaan disimpan langsung di dalam file `js/app.js`, sehingga aplikasi dapat berjalan sebagai halaman statis.

> **Didedikasikan untuk ummat.**  
> Semoga aplikasi sederhana ini menjadi sarana kecil untuk membantu menjaga rutinitas dzikir pagi dan petang dengan lebih mudah, tertib, dan istiqamah.

---

## ✨ Tentang Aplikasi

PagiPetang membantu pengguna membaca Wazifah Sugro dengan pengalaman yang lebih nyaman dibandingkan teks biasa. Aplikasi ini dirancang dengan pendekatan **mobile-first**, sehingga tetap enak dibuka dari handphone, tablet, maupun desktop.

Secara umum, aplikasi ini dapat digunakan untuk:

- membaca dzikir pagi dan petang Wazifah Sugro;
- menampilkan teks Arab dengan tampilan yang lebih besar dan rapi;
- memilih mode tampilan **Arab saja** atau **Arab + arti**;
- melakukan pencarian bacaan berdasarkan judul, teks, arti, atau sumber;
- menghitung progres bacaan menggunakan counter;
- menyimpan progres, tema, ukuran font, dan mode tampilan di browser;
- mengaktifkan mode gelap;
- memperbesar atau memperkecil ukuran font;
- mencetak halaman bacaan bila diperlukan;
- memutar backsound doa dari aset lokal.

Aplikasi ini menggunakan pendekatan **static-first**, sehingga seluruh frontend dapat dipublikasikan langsung melalui GitHub Pages tanpa layanan server berbayar.

---

## Alur Singkat

```text
Pengguna membuka halaman PagiPetang
        ↓
Halaman utama menampilkan pengantar Wazifah Sugro
        ↓
Pengguna menekan tombol Mulai Wazifah Sugro
        ↓
Aplikasi membaca data dari konstanta WAZIFAH_DATA di js/app.js
        ↓
Daftar bacaan ditampilkan berurutan
        ↓
Pengguna dapat mencari bacaan, mengatur tampilan, dan memakai counter
        ↓
Preferensi pengguna tersimpan lokal di browser
```

---

## Fitur Utama

| Fitur | Keterangan |
|---|---|
| **Landing page dzikir pagi-petang** | Menampilkan pengantar, ayat pembuka, dan tombol masuk ke bacaan. |
| **Data bacaan tertanam** | Seluruh data Wazifah Sugro berada langsung di `js/app.js` sebagai konstanta `WAZIFAH_DATA`. |
| **32 bacaan Wazifah Sugro** | Bacaan ditampilkan berurutan mulai dari ta'awudz, ayat Al-Qur'an, doa, dzikir, hingga Do'a Robithoh. |
| **Arab saja / Arab + arti** | Pengguna dapat memilih mode tampilan sesuai kebutuhan. |
| **Counter bacaan** | Bacaan yang memiliki jumlah pengulangan dapat dihitung melalui tombol counter. |
| **Progress bacaan** | Aplikasi menampilkan jumlah bacaan yang telah diselesaikan. |
| **Pencarian bacaan** | Pengguna dapat mencari berdasarkan judul, teks Arab, arti, sumber, atau catatan. |
| **Ukuran font fleksibel** | Font dapat diperkecil atau diperbesar untuk kenyamanan membaca. |
| **Mode gelap** | Tersedia pilihan tampilan terang dan gelap. |
| **Backsound doa** | Aset audio lokal dapat diputar sebagai backsound. |
| **Print ready** | Halaman bacaan dapat dicetak langsung dari browser. |
| **Local storage** | Preferensi tema, ukuran font, mode tampilan, counter, dan rute terakhir tersimpan di browser. |
| **GitHub Pages ready** | Dapat di-hosting secara gratis sebagai website statis. |
| **Tanpa backend dan database** | Tidak membutuhkan Google Apps Script, Google Sheets, server, atau database. |

---

## Teknologi yang Digunakan

| Komponen | Teknologi | Fungsi |
|---|---|---|
| **Frontend** | HTML5 | Struktur halaman aplikasi. |
| **Styling** | CSS3 | Tampilan, layout, mode gelap, responsivitas, dan pengaturan font. |
| **Interaksi** | JavaScript Vanilla | Routing hash, render bacaan, counter, pencarian, preferensi, dan audio. |
| **Hosting** | GitHub Pages | Publikasi aplikasi sebagai website statis. |
| **Penyimpanan lokal** | Browser `localStorage` | Menyimpan tema, ukuran font, mode tampilan, counter, dan rute terakhir. |
| **Aset lokal** | PNG dan MP3 | Logo/ilustrasi dan backsound doa. |

---

## Struktur Repository

```text
pagipetang/
├── assets/
│   ├── doa.mp3
│   └── logo_doa.png
├── css/
│   └── style.css
├── js/
│   └── app.js
├── .nojekyll
├── index.html
├── LICENSE
└── README.md
```

### Penjelasan Singkat

| File/Folder | Fungsi |
|---|---|
| `index.html` | Halaman utama aplikasi, struktur landing page, tombol navigasi, reader, audio, dan elemen tampilan. |
| `css/style.css` | Pengaturan tampilan, warna, responsivitas, mode gelap, tipografi Arab, kartu bacaan, dan layout. |
| `js/app.js` | Logika utama aplikasi, data Wazifah Sugro, render bacaan, pencarian, counter, preferensi, dan backsound. |
| `assets/logo_doa.png` | Logo/ilustrasi yang ditampilkan pada halaman utama. |
| `assets/doa.mp3` | File audio lokal untuk backsound. |
| `.nojekyll` | Mencegah GitHub Pages memproses repository sebagai situs Jekyll. |
| `LICENSE` | Informasi lisensi repository. |
| `README.md` | Dokumentasi aplikasi. |

---

## ⚡ Cara Menjalankan di Lokal

Karena aplikasi ini berbasis web statis dan data bacaan sudah tertanam di JavaScript, aplikasi dapat dibuka langsung dari file `index.html`. Namun, untuk hasil yang paling mendekati GitHub Pages, disarankan menjalankannya melalui server lokal.

### Opsi 1 — Buka Langsung

Klik dua kali file berikut:

```text
index.html
```

Metode ini cukup untuk melihat tampilan dasar aplikasi. Jika browser membatasi fitur tertentu, gunakan opsi server lokal.

### Opsi 2 — Menggunakan Python Local Server

Buka terminal pada folder repository, lalu jalankan:

```bash
python -m http.server 8000
```

Kemudian buka browser:

```text
http://localhost:8000
```

### Opsi 3 — Menggunakan VS Code Live Server

1. Buka folder `pagipetang` di Visual Studio Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan file `index.html`.
4. Pilih **Open with Live Server**.
5. Aplikasi akan terbuka di browser.

---

## 🚀 Deploy ke GitHub Pages

### 1. Siapkan Repository

Pastikan seluruh file utama berada langsung di root repository:

```text
index.html
css/
js/
assets/
.nojekyll
LICENSE
README.md
```

Jangan meletakkan source code di folder ganda seperti:

```text
pagipetang/pagipetang/index.html
```

### 2. Upload Source Code

Upload seluruh file ke repository GitHub, misalnya:

```text
https://github.com/cakgup/pagipetang
```

### 3. Aktifkan GitHub Pages

Masuk ke menu:

```text
Settings → Pages
```

Gunakan pengaturan berikut:

```text
Source : Deploy from a branch
Branch : main
Folder : /root
```

Klik **Save**.

### 4. Akses Aplikasi

Setelah GitHub Pages aktif, aplikasi dapat diakses melalui:

```text
https://cakgup.github.io/pagipetang/
```

Jika menggunakan akun atau nama repository lain, format URL-nya adalah:

```text
https://username.github.io/nama-repository/
```

---

## 🧩 Mengubah Data Bacaan

Data bacaan berada di file:

```text
js/app.js
```

Cari bagian berikut:

```javascript
const WAZIFAH_DATA = [...];
```

Setiap item bacaan secara umum memiliki struktur seperti berikut:

```javascript
{
  urutan: 1,
  id: '001-taawudz',
  judul: "Ta'awudz",
  arab: '...',
  latin: '',
  arti: '...',
  jumlah: 1,
  kategori: 'wazifah-sugro',
  sumber: "Al-Ma'tsurat Wazifah Sugro",
  catatan: '...'
}
```

Untuk bacaan yang terdiri dari beberapa ayat, aplikasi juga mendukung properti `rincian`, misalnya:

```javascript
rincian: [
  {
    ayat: 1,
    arab: '...',
    arti: '...'
  },
  {
    ayat: 2,
    arab: '...',
    arti: '...'
  }
]
```

Hal yang dapat disesuaikan:

| Bagian | Fungsi |
|---|---|
| `urutan` | Nomor urut tampilan bacaan. |
| `id` | Identitas unik untuk counter dan penyimpanan progres. |
| `judul` | Judul bacaan. |
| `arab` | Teks Arab utama. |
| `latin` | Teks latin jika ingin ditambahkan. |
| `arti` | Terjemahan atau arti bacaan. |
| `jumlah` | Jumlah pengulangan bacaan. |
| `kategori` | Kategori bacaan. |
| `sumber` | Sumber bacaan yang ditampilkan di kartu. |
| `catatan` | Catatan internal atau catatan verifikasi. |
| `rincian` | Daftar ayat/bagian untuk bacaan panjang. |

> **Catatan:** Setelah mengubah data, pastikan tanda kutip, koma, dan struktur array JavaScript tetap valid agar aplikasi tidak gagal dimuat.

---

## 🎨 Mengubah Tampilan

### Mengubah Logo

Ganti file berikut dengan gambar baru:

```text
assets/logo_doa.png
```

Jika nama file berubah, sesuaikan juga path gambar di `index.html`.

### Mengubah Backsound

Ganti file berikut:

```text
assets/doa.mp3
```

Jika nama file berubah, sesuaikan path audio di `index.html`.

### Mengubah Warna dan Layout

Buka file:

```text
css/style.css
```

Sesuaikan variabel warna, ukuran, jarak antar elemen, kartu bacaan, dan pengaturan mode gelap sesuai kebutuhan.

---

## 🔤 Catatan Font Arab

Aplikasi menggunakan urutan font Arab berikut:

```css
"ArabicFont", "Amiri Quran", "Noto Naskh Arabic", "Traditional Arabic", "Scheherazade New", serif
```

Jika ingin menggunakan font Arab lokal, tambahkan file font secara legal dan definisikan `@font-face` di `css/style.css`.

Contoh:

```css
@font-face {
  font-family: "ArabicFont";
  src: url("../assets/fonts/nama-font.woff2") format("woff2");
  font-display: swap;
}
```

Pastikan font yang digunakan memiliki lisensi yang mengizinkan penggunaan dan distribusi di repository publik.

---

## 🧪 Testing Sederhana

Sebelum dipublikasikan, lakukan pengujian berikut:

| Pengujian | Hasil yang Diharapkan |
|---|---|
| Buka halaman utama | Landing page tampil baik di desktop dan handphone. |
| Klik **Mulai Wazifah Sugro** | Halaman bacaan terbuka. |
| Data bacaan tampil | Seluruh bacaan tampil berurutan. |
| Mode Arab saja | Terjemahan tidak tampil. |
| Mode Arab + arti | Teks Arab dan arti tampil. |
| Pencarian | Bacaan dapat difilter sesuai kata kunci. |
| Counter | Jumlah bacaan bertambah dan progres berubah. |
| Reset counter | Progres bacaan kembali ke awal. |
| Perbesar/perkecil font | Ukuran teks berubah sesuai tombol. |
| Mode gelap | Tema berubah dan tetap tersimpan setelah refresh. |
| Backsound | Audio dapat diputar dan dihentikan. |
| Print | Browser membuka dialog cetak. |
| Refresh halaman | Preferensi pengguna tetap tersimpan di browser. |

---

## 🛠️ Troubleshooting

### 1. Halaman Bacaan Tidak Muncul

Periksa beberapa hal berikut:

- File `js/app.js` berhasil dimuat.
- Struktur `WAZIFAH_DATA` masih valid.
- Tidak ada koma, tanda kutip, atau kurung yang hilang setelah edit data.
- Console browser tidak menampilkan error JavaScript.

### 2. Gambar Tidak Tampil

Pastikan file berikut tersedia:

```text
assets/logo_doa.png
```

Jika nama file diganti, perbarui path di `index.html`.

### 3. Backsound Tidak Berjalan

Browser modern biasanya memblokir autoplay audio. Pengguna perlu menekan tombol audio terlebih dahulu agar backsound dapat diputar.

Pastikan file berikut tersedia:

```text
assets/doa.mp3
```

### 4. Perubahan Tidak Muncul Setelah Upload

Lakukan hard refresh:

```text
Ctrl + F5
```

Atau buka URL dengan cache buster:

```text
https://cakgup.github.io/pagipetang/?v=2
```

### 5. GitHub Pages Menampilkan 404

Periksa kembali:

- GitHub Pages sudah aktif di `Settings → Pages`.
- Branch yang dipilih adalah `main`.
- Folder yang dipilih adalah `/root`.
- File `index.html` berada di root repository.
- Proses build/deploy GitHub Pages sudah selesai.

---

## 🔐 Catatan Keamanan dan Privasi

Aplikasi ini tidak menggunakan backend dan tidak mengirim data ke server. Preferensi pengguna seperti tema, ukuran font, mode tampilan, counter, dan rute terakhir disimpan di browser melalui `localStorage`.

Hal yang perlu diperhatikan:

1. Jangan menyimpan data sensitif di source code repository publik.
2. Jangan memasukkan token, password, API key, atau kredensial pribadi ke dalam file aplikasi.
3. Pastikan aset audio/gambar yang digunakan memiliki izin penggunaan yang jelas.
4. Jika menambahkan integrasi eksternal di masa depan, pastikan endpoint dan data pengguna dilindungi dengan baik.

---

## 📚 Catatan Konten

Teks Arab, arti, urutan bacaan, sumber, dan jumlah pengulangan perlu diverifikasi kembali terhadap rujukan resmi atau kitab Al-Ma'tsurat yang digunakan sebelum aplikasi dipublikasikan secara luas.

Beberapa hal yang sebaiknya diperiksa:

- ketepatan teks Arab;
- tanda baca dan harakat;
- kesesuaian arti/terjemahan;
- urutan bacaan;
- jumlah pengulangan;
- penulisan nama surat dan ayat;
- penulisan doa dan sumbernya.

Repository ini bersifat alat bantu tampilan dan pembacaan. Validitas isi bacaan tetap perlu merujuk kepada sumber yang otoritatif.

---

## 🌱 Rekomendasi Pengembangan Lanjutan

Beberapa pengembangan yang dapat dilakukan pada versi berikutnya:

- menambahkan pilihan Wazifah Kubra;
- menambahkan transliterasi latin secara lengkap;
- menambahkan bookmark bacaan terakhir;
- menambahkan mode hafalan;
- menambahkan fitur checklist harian pagi dan petang;
- menambahkan pengingat waktu dzikir pagi dan petang;
- menambahkan progressive web app/PWA agar dapat dipasang di handphone;
- menambahkan mode offline yang lebih lengkap;
- menambahkan tema warna tambahan;
- menambahkan halaman referensi/sumber bacaan;
- menambahkan audio per bacaan;
- menambahkan fitur share bacaan ke WhatsApp;
- menambahkan tampilan Open Graph agar link lebih menarik saat dibagikan.

---

## 🤝 Kontribusi

Kontribusi, koreksi teks, perbaikan tampilan, dan pengembangan ulang sangat terbuka.

Alur kontribusi yang disarankan:

```bash
git checkout -b feature/nama-fitur
git add .
git commit -m "Menambahkan fitur nama-fitur"
git push origin feature/nama-fitur
```

Kemudian ajukan pull request melalui GitHub.

Untuk koreksi konten bacaan, mohon sertakan rujukan yang jelas agar perubahan dapat diverifikasi dengan baik.

---

## 📄 Lisensi

Repository ini menggunakan lisensi:

```text
MIT License
```

Silakan gunakan, pelajari, modifikasi, dan kembangkan ulang sesuai kebutuhan dakwah, pendidikan, komunitas, keluarga, atau penggunaan pribadi.

Gunakan dengan bijak. Jangan gunakan aplikasi ini untuk penipuan, penyalahgunaan identitas, penyebaran konten yang menyesatkan, atau aktivitas yang melanggar hukum.

---

## 🤲 Dedikasi

Aplikasi ini dibuat sederhana agar mudah dipelajari, digunakan, dan dikembangkan kembali oleh siapa pun yang ingin menghadirkan sarana digital yang bermanfaat.

> Teknologi terbaik bukan selalu yang paling rumit, tetapi yang paling mudah digunakan untuk membantu kebaikan.

Made with ❤️ by **CakGup**  
Didedikasikan untuk ummat.
