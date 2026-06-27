# 📖 Aplikasi Doa & Hadist - Tugas UAS React Native

Aplikasi **Doa & Hadist** ini adalah aplikasi mobile berbasis **React Native (Expo)** yang dikembangkan secara khusus untuk memenuhi tugas **Ujian Akhir Semester (UAS)** pada mata kuliah Pemrograman Mobile / React Native di **Politeknik LP3I Cirebon**.

Aplikasi ini dirancang untuk memberikan kemudahan bagi umat muslim dalam membaca doa harian, mempelajari hadist pilihan, serta menunjang ibadah melalui fitur-fitur interaktif.

## 🎯 Tujuan Pengembangan
1. **Memenuhi Syarat Akademik**: Sebagai evaluasi akhir pemahaman mahasiswa terhadap pengembangan aplikasi mobile menggunakan React Native.
2. **Implementasi Teknologi**: Menerapkan konsep *State Management*, *Local Storage* (`AsyncStorage`), *Navigation* (Stack & Bottom Tabs), serta penggunaan Native Modules (seperti Text-to-Speech dan Haptic Feedback).
3. **Manfaat Praktis**: Menyediakan aplikasi yang ringan, responsif, dan bermanfaat untuk kebutuhan ibadah sehari-hari.

## ✨ Fitur Utama & Implementasi Teknis

1. **📚 Kumpulan Doa Lengkap & 📖 Hadist Pilihan**
   Menampilkan daftar doa dan hadist dari data lokal (*dummy data/local JSON*) yang di-render secara efisien menggunakan `FlatList`.
2. **🔍 Pencarian Cepat (Real-time Search) & 🗂️ Filter Kategori**
   Menggunakan *state* pada React untuk memfilter data berdasarkan teks input pengguna dan kategori yang dipilih tanpa jeda.
3. **❤️ Favorit Lokal (Offline)**
   Mengimplementasikan `@react-native-async-storage/async-storage` untuk menyimpan dan mengelola data doa/hadist favorit pengguna secara persisten di perangkat.
4. **🔊 Text-to-Speech (TTS) & 📋 Salin Teks**
   Memanfaatkan `expo-speech` untuk membacakan terjemahan secara audio dan `expo-clipboard` agar teks mudah disalin.
5. **📿 Tasbih Digital Interaktif**
   Penghitung dzikir yang menggunakan *state* untuk menghitung jumlah putaran, dilengkapi *Haptic Feedback* (`expo-haptics`) yang bergetar pada hitungan tertentu (misal: ke-33).
6. **📸 Profil Kustom**
   Menggunakan `expo-image-picker` untuk mengakses galeri perangkat secara lokal dan mengubah foto profil pengguna.
7. **🎨 Desain UI Islami & Elegan**
   Dikembangkan menggunakan *StyleSheet* bawaan React Native dengan struktur komponen modular yang menjamin UI yang konsisten dan responsif.

## 🛠️ Arsitektur & Struktur Proyek

Proyek ini menerapkan prinsip *Clean Code* untuk memastikan skalabilitas dan kemudahan perawatan (*maintainability*):

```text
/src
  ├── components/    # Komponen UI Reusable (Card, Header, SearchBar, dll)
  ├── data/          # Basis data statis (doa.js, hadist.js)
  ├── navigation/    # Konfigurasi React Navigation (Bottom Tabs & Stack)
  ├── screens/       # Layar utama (Home, Detail, Tasbih, Favorit, Profile)
  └── utils/         # Fungsi helper dan konfigurasi tema
```

**Dependensi Utama:**
- `expo` & `react-native`
- `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/native-stack`
- `@react-native-async-storage/async-storage`
- Plugin Expo: `expo-speech`, `expo-clipboard`, `expo-image-picker`, `expo-haptics`

## 🚀 Panduan Instalasi & Menjalankan Aplikasi

Berikut adalah langkah-langkah untuk menjalankan proyek ini di lingkungan lokal:

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/hantu060614/kumpulan-doa-hadist-reacte-app.git
   cd kumpulan-doa-hadist-reacte-app
   ```
2. **Install Dependensi:**
   ```bash
   npm install
   ```
3. **Jalankan Server Expo:**
   ```bash
   npm start
   ```
   Atau
   ```bash
   npx expo start
   ```
4. **Testing di Perangkat:**
   Gunakan aplikasi **Expo Go** pada perangkat Android atau iOS untuk memindai QR Code yang muncul di terminal.

---

**🎓 Informasi Pengembang:**
- **Nama:** Hamami Hamzah
- **Institusi:** Politeknik LP3I Cirebon
- **Tahun Ajaran:** 2025/2026

*Dokumentasi ini dibuat untuk mempermudah Dosen Penguji dalam meninjau struktur, fitur, dan teknologi yang diimplementasikan pada proyek aplikasi Doa & Hadist.*
