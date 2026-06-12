# KreaNation 🚀
*Inisiatif Kreatif & Teknologi oleh Mahreen Indonesia*

**KreaNation** adalah landing page modern dan interaktif yang dirancang untuk menginspirasi dan mewadahi generasi muda Indonesia (usia 16-30 tahun) agar dapat bertransformasi dari penikmat teknologi menjadi pencipta karya digital yang berdampak nyata bagi masyarakat sekitar.

Proyek ini menggunakan framework modern **Next.js (App Router)** dengan optimasi visual premium, mikro-animasi responsif, dan prinsip psikologi UX yang ramah pengguna.

---

## 🌟 Visi & Misi

### Visi
Menjadi sebuah gerakan dan komunitas kolaboratif tempat anak muda Indonesia belajar, berkreasi, dan saling mendukung dalam melahirkan karya digital solutif di era industri kreatif modern.

### Misi Utama (3 Pilar Gerakan)
1. **Membuka Akses Skill Digital**: Menyediakan materi dan panduan eksplorasi skill digital esensial dari nol (coding, desain UI/UX, AI, dll) tanpa hambatan ketakutan belajar.
2. **Mendorong Kolaborasi Kreatif**: Mempertemukan kreator muda dari berbagai disiplin ilmu untuk menyatukan ide dan merancang portofolio profesional bersama.
3. **Menghasilkan Dampak Nyata**: Mengarahkan setiap karya digital untuk langsung berkontribusi mendigitalisasi UMKM lokal dan mendukung kampanye sosial.

---

## 🛠️ Tech Stack & Kebutuhan Sistem

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing untuk navigasi, data, dan properti)
* **Styling & Layout**: [Tailwind CSS](https://tailwindcss.com/)
* **Typography**: Google Fonts - Montserrat (Display & Headings) dan Inter (Body & Labels)
* **Icons**: Google Material Symbols Outlined
* **Environment**: Node.js v18.0.0 atau lebih tinggi

---

## 📂 Struktur Folder Proyek

Mengikuti panduan arsitektur modular yang rapi agar mudah dipelihara dan dikembangkan:

```bash
src/
├── app/                  # Next.js App Router (Page views, layout, globals.css)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # HeroSection, AboutSection, JourneySection, ShowcaseSection, dll
│   └── ui/               # Reusable UI components (Button, Card, Badge, SectionTitle)
├── constants/            # Nilai-nilai konfigurasi konstan
├── data/                 # Penyimpanan konten statis (navigation, journey, showcase, statistics)
├── lib/                  # Fungsi utilitas penolong (helpers)
├── styles/               # File CSS tambahan
└── types/                # Definisi tipe data TypeScript (interfaces)
```

---

## 🎯 Detail Implementasi & Fitur Premium

Halaman ini dibangun dengan detail visual dan teknis yang tinggi untuk menciptakan kesan pertama yang memukau:

1. **Tentang & Misi Section**: Menjelaskan latar belakang kolaborasi Mahreen Indonesia dengan visual *split-column layout*. Kartu misinya dilengkapi dengan **ambient glow** dan **left border accent** yang meluncur secara dinamis saat kursor menyentuh kartu.
2. **Alur Tumbuh Bersama (Journey)**: Proses belajar terarah (*Learn $\rightarrow$ Build $\rightarrow$ Impact*) menggunakan bahasa kolektif *"Kita"* untuk membangun rasa memiliki. Menggunakan teknik **Optical Vertical Alignment** (`translate-y-[2px]`) untuk menyelaraskan nomor latar belakang besar dengan kotak ikon secara presisi.
3. **Cara Berkarya Bersama (Showcase)**: Berisi 9 kartu program kolaboratif interaktif (Workshop, Coding, Hackathon, Webinar, dll) dengan fitur **Load More interaktif**. Kartu ke-7 hingga 9 memiliki efek animasi *staggered-fade-in* bertingkat saat diungkap.
4. **Dampak Nyata (Statistics)**: Menampilkan data pencapaian kuantitatif dengan efek animasi **Count-Up**. Ukuran font angka dikoreksi dari `font-black` (terlalu gemuk) menjadi `font-bold` agar lebih bersih, tajam, dan elegan.
5. **Responsive Grid**: Seluruh layout didesain secara *mobile-first* dan menyesuaikan secara natural di layar smartphone, tablet, maupun desktop tanpa adanya elemen yang terpotong.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah di bawah ini untuk memulai pengembangan di komputer lokal Anda:

### 1. Kloning Proyek & Masuk ke Direktori
```bash
git clone <repository-url>
cd kreanation
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Dev Server
```bash
npm run dev
```
Setelah server berjalan, buka browser di alamat [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Produksi
Guna memvalidasi performa dan keselarasan kode produksi, jalankan perintah:
```bash
npm run build
npm run start
```

---

## 🤝 Kontribusi & Gerakan
Proyek KreaNation terbuka untuk kolaborasi berkelanjutan bagi seluruh developer, desainer, copywriter, dan pegiat AI muda Indonesia yang ingin memajukan ekosistem teknologi kreatif di tanah air. 

Mari berkarya bersama untuk dampak yang lebih besar! 🇮🇩
