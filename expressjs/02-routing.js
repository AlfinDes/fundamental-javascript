/*
================================================================================
💡 CARA BELAJAR DENGAN AI:
================================================================================
Kalau ada yang bingung, COPAS bagian antara tanda ===== ke AI:

===== PROMPT START =====
Saya sedang belajar HTTP Methods dan Routing di Express.js. Bisakah kamu jelaskan:
1. Apa perbedaan antara GET, POST, PUT, dan DELETE?
2. Kapan saya harus pakai POST vs PUT?
3. Apa itu CRUD dan kenapa penting di backend?
4. Bagaimana cara kerja req.params di Express?

Jelaskan dengan bahasa sederhana tanpa memberikan jawaban langsung untuk 
latihan di bawah. Saya ingin memahami konsepnya dulu.
===== PROMPT END =====

❌ JANGAN tanya: "Buatkan code untuk latihan nomor 2"
✅ TANYA: Konsep dan cara kerjanya
================================================================================
*/

/**
 * 02 - ROUTING: Memahami HTTP Methods
 * 
 * Tujuan: Belajar berbagai HTTP methods (GET, POST, PUT, DELETE)
 * 
 * Setup:
 * 1. Jalankan: node 02-routing.js
 * 2. Test dengan browser (GET) atau tools seperti Postman/Thunder Client (POST, PUT, DELETE)
 * 
 * HTTP Methods:
 * - GET: Mengambil data
 * - POST: Membuat data baru
 * - PUT: Update data yang sudah ada
 * - DELETE: Menghapus data
 */

const express = require('express');
const app = express();

// Middleware untuk parsing JSON bodies
app.use(express.json());

const PORT = 3000;

// ============================================
// DATABASE SIMULASI (In-Memory)
// ============================================

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// ============================================
// ROUTES - OPERASI CRUD
// ============================================

// GET - Baca semua users
app.get('/users', (req, res) => {
  res.json({
    success: true,
    data: users
  });
});

// GET - Baca satu user berdasarkan ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User tidak ditemukan'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// POST - Buat user baru
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User berhasil dibuat',
    data: newUser
  });
});

// PUT - Update user yang sudah ada
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User tidak ditemukan'
    });
  }
  
  users[userIndex] = {
    id: userId,
    name: req.body.name || users[userIndex].name,
    email: req.body.email || users[userIndex].email
  };
  
  res.json({
    success: true,
    message: 'User berhasil diupdate',
    data: users[userIndex]
  });
});

// DELETE - Hapus user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User tidak ditemukan'
    });
  }
  
  users.splice(userIndex, 1);
  
  res.json({
    success: true,
    message: 'User berhasil dihapus'
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`\nTest endpoint berikut:`);
  console.log(`  GET    http://localhost:${PORT}/users`);
  console.log(`  GET    http://localhost:${PORT}/users/1`);
  console.log(`  POST   http://localhost:${PORT}/users`);
  console.log(`  PUT    http://localhost:${PORT}/users/1`);
  console.log(`  DELETE http://localhost:${PORT}/users/1`);
});

// ============================================
// LATIHAN
// ============================================

/**
 * TODO:
 * 1. Tambahkan route untuk mencari user berdasarkan nama: GET /users/search?name=Alice
 * 2. Tambahkan validasi: POST harus reject jika name atau email kosong
 * 3. Buat resource baru 'products' dengan operasi CRUD lengkap
 * 4. Test semua route menggunakan Postman atau Thunder Client
 * 
 * Contoh POST body:
 * {
 *   "name": "Charlie",
 *   "email": "charlie@example.com"
 * }
 */
