# 📐 Modul Pembelajaran Matematika Interaktif - Fase B

> Aplikasi web interaktif untuk pembelajaran Matematika (Kelas 4 SD) berdasarkan Kurikulum Merdeka.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)

## 📖 Deskripsi

Modul pembelajaran ini dirancang untuk membantu peserta didik memahami konsep matematika melalui materi yang terstruktur, contoh soal, dan latihan interaktif. Aplikasi ini mencakup 5 bab utama sesuai dengan Capaian Pembelajaran (CP), Tujuan Pembelajaran (TP), dan Alur Tujuan Pembelajaran (ATP) Kurikulum Merdeka.

## ✨ Fitur Utama

- 📚 **5 Bab Materi Lengkap** - Dari Bilangan Cacah hingga Analisa Data
- 🎯 **Capaian Pembelajaran** - CP, TP, dan ATP terintegrasi di setiap bab
- 💡 **Materi & Contoh** - Penjelasan detail dengan contoh soal
- ✏️ **Latihan Interaktif** - 42+ soal pilihan ganda dengan feedback langsung
- 📊 **Progress Tracking** - Progress bar dan skor real-time
- 📝 **Pembahasan** - Penjelasan jawaban untuk setiap soal
- 🏆 **Sistem Penilaian** - Grade otomatis (A-E) dengan visualisasi skor
- 📱 **Responsif** - Tampilan optimal di desktop, tablet, dan mobile
- 🎨 **UI Modern** - Desain menarik dan ramah anak

## 📚 Materi Pembelajaran

### BAB 1: Bilangan Cacah Sampai 999.999 🔢
- Nilai tempat bilangan
- Membandingkan dan mengurutkan bilangan
- Penjumlahan dan pengurangan
- Perkalian dan pembagian
- Kuadrat bilangan
- Kelipatan, Faktor, KPK, dan FPB
- Pecahan (biasa, campuran, desimal, persen)

### BAB 2: Aljabar 🔤
- Hubungan perkalian dan pembagian
- Persamaan sederhana
- Pola bilangan
- Pola gambar

### BAB 3: Pengukuran 📏
- Pengukuran panjang (mm, cm, m)
- Hubungan antar satuan baku
- Keliling bangun datar
- Luas bangun datar
- Volume bangun ruang

### BAB 4: Geometri 📐
- Bangun datar (segi banyak)
- Lingkaran
- Mengukur sudut
- Bangun ruang (prisma dan tabung)

### BAB 5: Analisa Data dan Peluang 📊
- Turus (Tally)
- Tabel frekuensi
- Diagram batang
- Piktogram dan diagram gambar
- Peluang dan kejadian

## 🛠️ Teknologi

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| React | 18 | UI Framework |
| TypeScript | 5 | Type Safety |
| Vite | 6 | Build Tool |
| Tailwind CSS | 4 | Styling |

## 📦 Instalasi

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm, pnpm, atau yarn

### Langkah Instalasi

```bash
# Clone repository
git clone <repository-url>
cd modul-matematika

# Install dependencies (pilih salah satu)
npm install
# atau
pnpm install
# atau
yarn install
```

> **Catatan untuk pengguna pnpm:** Jika muncul perintah `pnpm approve-builds`, pilih **esbuild** dan package terkait lainnya. Ini diperlukan agar Vite dapat berjalan dengan baik.

## 🚀 Menjalankan Aplikasi

```bash
# Development mode
npm run dev
# atau
pnpm dev

# Build untuk production
npm run build
# atau
pnpm build

# Preview production build
npm run preview
```

Aplikasi akan berjalan di `http://localhost:5173`

## 📁 Struktur Proyek

```
modul-matematika/
├── public/              # File statis
├── src/
│   ├── data/
│   │   └── chapters.ts  # Data materi dan soal semua bab
│   ├── App.tsx          # Komponen utama aplikasi
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles (Tailwind)
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Dokumentasi
```

## 🎮 Cara Menggunakan

### Untuk Siswa:
1. Buka aplikasi di browser
2. Pilih bab yang ingin dipelajari
3. Baca materi dan contoh soal
4. Kerjakan latihan soal
5. Lihat pembahasan dan skor

### Untuk Guru:
1. Gunakan sebagai media pembelajaran di kelas
2. Berikan latihan soal sebagai tugas
3. Pantau progres siswa melalui skor
4. Gunakan pembahasan untuk diskusi kelas

## 📊 Komponen Aplikasi

| Halaman | Deskripsi |
|---------|-----------|
| 🏠 Beranda | Overview semua bab dan capaian pembelajaran |
| 📖 Materi | Penjelasan detail per sub-topik dengan contoh |
| ✏️ Latihan | Kuis interaktif dengan feedback langsung |
| 🏆 Hasil | Skor, grade, dan pembahasan lengkap |

## 🎯 Capaian Pembelajaran

Aplikasi ini disusun berdasarkan:
- **CP** (Capaian Pembelajaran) - Kompetensi yang diharapkan
- **TP** (Tujuan Pembelajaran) - Tujuan spesifik per bab
- **ATP** (Alur Tujuan Pembelajaran) - Urutan pencapaian

## 📱 Responsivitas

Aplikasi ini dirancang responsif untuk:
- 📱 Mobile (320px - 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dibuat untuk tujuan pendidikan.

## 👨‍🏫 Pembuat

Dibuat sebagai modul pembelajaran interaktif untuk mendukung Kurikulum Merdeka Fase B.

---

<div align="center">

**Selamat Belajar Matematika! 🎓✨**

*Belajar jadi menyenangkan dengan modul interaktif*

</div>

