/*
================================================================================
💡 CARA BELAJAR DENGAN AI:
================================================================================
Kalau ada yang bingung, COPAS bagian antara tanda ===== ke AI:

===== PROMPT START =====
Saya sedang belajar Express.js untuk pertama kali. Bisakah kamu jelaskan:
1. Apa itu Express.js dan kenapa kita pakai framework ini?
2. Apa bedanya res.send() dan res.json()?
3. Bagaimana cara kerja app.listen()?

Jelaskan dengan bahasa sederhana tanpa memberikan jawaban langsung untuk 
latihan di bawah. Saya ingin memahami konsepnya dulu.
===== PROMPT END =====

❌ JANGAN tanya: "Bagaimana cara mengerjakan latihan nomor 1?"
✅ TANYA: Konsep dan cara kerjanya
================================================================================
*/

/**
 * 01 - HELLO WORLD: Server Express Pertama Kamu
 * 
 * Tujuan: Memahami cara membuat HTTP server dasar menggunakan Express
 * 
 * Setup:
 * 1. Inisialisasi npm: npm init -y
 * 2. Install Express: npm install express
 * 3. Jalankan file ini: node 01-hello-world.js
 * 4. Buka browser: http://localhost:3000
 */

// Import framework Express
const express = require('express');

// Buat aplikasi Express
const app = express();

// Tentukan nomor port
const PORT = 4000;

// ============================================
// ROUTES (RUTE)
// ============================================

// Route dasar - merespons GET request di URL root
app.get('/', (req, res) => {
  res.send('Hello World! 🚀');
});

// Contoh route lainnya
app.get('/about', (req, res) => {
  res.send('Ini adalah halaman About');
});

// Contoh response JSON
app.get('/api/info', (req, res) => {
  res.json({
    message: 'Selamat datang di Express.js',
    version: '1.0.0',
    author: 'Nama Kamu'
  });
});

// ============================================
// START SERVER (JALANKAN SERVER)
// ============================================

// app.listen(PORT, () => {
//   console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
//   console.log(`Coba kunjungi:`);
//   console.log(`  - http://localhost:${PORT}/`);
//   console.log(`  - http://localhost:${PORT}/about`);
//   console.log(`  - http://localhost:${PORT}/api/info`);
// });

// ============================================
// LATIHAN
// ============================================

/**
 * TODO:
 * 1. Tambahkan route baru '/contact' yang mengembalikan "Hubungi kami di: email@example.com"
 * 2. Tambahkan route '/api/status' yang mengembalikan JSON: { status: 'online', uptime: '5 menit' }
 * 3. Ubah PORT menjadi 4000 dan restart server
 * 4. Apa yang terjadi jika kamu mengunjungi route yang tidak ada? (misal: /random)
 */

app.get('/contact', (req, res) => {
  res.send('Hubungi kami di: email@example.com');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    uptime: '5 menit'
  });
});

app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
  console.log(`coba kunjungi`);
  console.log(`  - http://localhost:${PORT}/`);
  console.log(`  - http://localhost:${PORT}/contact`);
  console.log(`  - http://localhost:${PORT}/api/status`);
});

app.use((req, res) => {
  res.status(404).send(`Halaman tidak di temukan`)
})