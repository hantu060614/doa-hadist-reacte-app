# 📖 Doa & Hadist App - UAS Edition

Aplikasi **Doa & Hadist** ini adalah proyek aplikasi mobile berbasis React Native (Expo) yang dikembangkan sebagai tugas Ujian Akhir Semester (UAS) mata kuliah React Native di Politeknik LP3I Cirebon.

Aplikasi ini menyediakan panduan lengkap bagi pengguna untuk membaca doa harian, mempelajari hadist pilihan, serta fitur penunjang ibadah lainnya.

## ✨ Fitur Unggulan

1. **📚 Kumpulan Doa Lengkap:** Lebih dari 20 doa harian, disusun berdasarkan kategori (Aktivitas, Ibadah, Kesulitan, dll).
2. **📖 Hadist Pilihan:** Lebih dari 15 hadist shahih beserta perawi dan penjelasannya.
3. **🎨 Desain UI Islami & Elegan:** Mengusung tema *Emerald Green* dan *White* dengan tampilan modern (*Clean UI*).
4. **🔍 Pencarian Cepat (Real-time Search):** Cari doa atau hadist dengan cepat tanpa delay.
5. **🗂️ Filter Kategori:** Kelompokkan doa dan hadist berdasarkan tema secara praktis.
6. **❤️ Favorit Lokal (Offline):** Simpan doa atau hadist yang sering dibaca berkat integrasi `AsyncStorage`.
7. **🔊 Text-to-Speech (TTS):** Dengarkan arti terjemahan dibacakan langsung oleh sistem perangkat Anda.
8. **📋 Salin Teks (Copy to Clipboard):** Memudahkan pengguna menyalin keseluruhan isi doa/hadist (Arab, Latin, Arti) untuk dibagikan.
9. **📿 Tasbih Digital Interaktif:** Penghitung dzikir dengan *Haptic Feedback* (getaran) setiap putaran ke-33.
10. **📸 Profil Kustom:** Ubah foto profil dari galeri bawaan HP yang tersimpan secara lokal.

## 🛠️ Arsitektur & Teknologi

Meskipun menggunakan *environment* Expo, proyek ini dirancang dengan struktur *Clean Code* layaknya React Native CLI agar mudah dikembangkan dan dirawat (*Maintainable*):

```text
/src
  ├── components/    # Komponen UI yang bisa dipakai ulang (Card, Header, dll)
  ├── data/          # Berisi basis data statis (doa.js, hadist.js)
  ├── navigation/    # Pengaturan Bottom Tabs dan Stack Navigation
  ├── screens/       # Layar utama (Home, Detail, Tasbih, Tentang, dll)
  └── utils/         # Fungsi bantuan (Penyimpanan lokal, Konfigurasi Tema)
```

**Dependensi Utama:**
- `expo` & `react-native`
- `@react-navigation/native` & `@react-navigation/bottom-tabs`
- `@react-native-async-storage/async-storage`
- `expo-speech`, `expo-clipboard`, `expo-image-picker`

## 🚀 Cara Instalasi & Menjalankan

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/hantu060614/doa-hadist-reacte-app.git
   cd doa-hadist-reacte-app
   ```
2. **Install Dependensi:**
   ```bash
   npm install
   ```
3. **Jalankan Aplikasi:**
   ```bash
   npm start
   ```
4. **Buka di HP:**
   Gunakan aplikasi **Expo Go** di Android atau iOS untuk scan QR Code yang muncul di terminal.

---

**Dikembangkan oleh:**
👤 **Hamami Hamzah**
🎓 Politeknik LP3I Cirebon (Tahun Ajaran 2025/2026)
