/*
================================================================================
💡 CARA BELAJAR DENGAN AI:
================================================================================
Kalau ada yang bingung, COPAS bagian antara tanda ===== ke AI:

===== PROMPT START =====
Saya sedang belajar cara menangani Request Data di Express.js. Bisakah kamu jelaskan:
1. Apa bedanya req.params, req.query, dan req.body?
2. Kapan saya harus pakai query string vs URL parameter?
3. Bagaimana cara validasi data dari request?
4. Bagaimana cara kerja express.json() middleware?

Jelaskan dengan bahasa sederhana tanpa memberikan jawaban langsung untuk 
latihan di bawah. Saya ingin memahami konsepnya dulu.
===== PROMPT END =====

❌ JANGAN tanya: "Kasih jawaban untuk latihan nomor 1"
✅ TANYA: Konsep dan cara kerjanya
================================================================================
*/

/**
 * 04 - REQUESTS: Menangani Data Dinamis
 * 
 * Tujuan: Belajar cara membaca data dari request
 * 
 * Sumber Data:
 * 1. URL Parameters (req.params) - /users/:id
 * 2. Query Strings (req.query) - /search?name=john&age=25
 * 3. Request Body (req.body) - Data POST/PUT
 * 4. Headers (req.headers) - Authorization, Content-Type, dll.
 * 
 * Jalankan: node 04-requests.js
 */

const express = require('express');
const app = express();

// Enable JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// ============================================
// 1. URL PARAMETERS (req.params)
// ============================================

// Contoh: /users/123
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  
  res.json({
    message: 'Contoh URL Parameter',
    userId: userId,
    type: typeof userId // Selalu string!
  });
});

// Multiple parameters: /posts/5/comments/12
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  res.json({
    postId: req.params.postId,
    commentId: req.params.commentId
  });
});

// ============================================
// 2. QUERY STRINGS (req.query)
// ============================================

// Contoh: /search?name=john&age=25&city=jakarta
app.get('/search', (req, res) => {
  const { name, age, city } = req.query;
  
  res.json({
    message: 'Contoh Query String',
    filters: {
      name: name || 'tidak diberikan',
      age: age || 'tidak diberikan',
      city: city || 'tidak diberikan'
    },
    allQueryParams: req.query
  });
});

// Contoh pagination: /products?page=2&limit=10
app.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  res.json({
    message: 'Contoh Pagination',
    pagination: {
      page,
      limit,
      skip,
      totalItems: 100,
      totalPages: Math.ceil(100 / limit)
    }
  });
});

// ============================================
// 3. REQUEST BODY (req.body)
// ============================================

// POST - Buat user
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  
  // Validasi dasar
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Field yang diperlukan tidak lengkap',
      required: ['username', 'email', 'password']
    });
  }
  
  res.status(201).json({
    success: true,
    message: 'User berhasil didaftarkan',
    data: {
      username,
      email,
      // Jangan pernah return password di aplikasi nyata!
      passwordLength: password.length
    }
  });
});

// ============================================
// 4. HEADERS (req.headers)
// ============================================

app.get('/headers', (req, res) => {
  res.json({
    message: 'Contoh Request Headers',
    userAgent: req.headers['user-agent'],
    contentType: req.headers['content-type'],
    authorization: req.headers['authorization'] || 'Tidak diberikan',
    allHeaders: req.headers
  });
});

// ============================================
// 5. MENGGABUNGKAN SEMUA SUMBER
// ============================================

// Contoh kompleks: /api/users/123/posts?page=1&limit=5
app.get('/api/users/:userId/posts', (req, res) => {
  const userId = req.params.userId;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const authToken = req.headers['authorization'];
  
  res.json({
    message: 'Menggabungkan sumber data',
    urlParam: { userId },
    queryParams: { page, limit },
    hasAuth: !!authToken,
    result: `Mengambil ${limit} posts untuk user ${userId}, halaman ${page}`
  });
});

// POST dengan params dan body: /api/users/123/update
app.post('/api/users/:userId/update', (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;
  
  res.json({
    message: 'User berhasil diupdate',
    userId,
    updates,
    timestamp: new Date().toISOString()
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`\nTest endpoint berikut:\n`);
  console.log(`URL Parameters:`);
  console.log(`  GET http://localhost:${PORT}/users/123`);
  console.log(`  GET http://localhost:${PORT}/posts/5/comments/12\n`);
  
  console.log(`Query Strings:`);
  console.log(`  GET http://localhost:${PORT}/search?name=john&age=25`);
  console.log(`  GET http://localhost:${PORT}/products?page=2&limit=5\n`);
  
  console.log(`Request Body (gunakan Postman/Thunder Client):`);
  console.log(`  POST http://localhost:${PORT}/register`);
  console.log(`  Body: { "username": "john", "email": "john@example.com", "password": "secret123" }\n`);
  
  console.log(`Headers:`);
  console.log(`  GET http://localhost:${PORT}/headers`);
});

// ============================================
// LATIHAN
// ============================================

/**
 * TODO:
 * 1. Buat route yang menerima query params required dan optional
 *    Contoh: /filter?category=tech&sort=asc&minPrice=100
 * 
 * 2. Buat endpoint login yang validasi email dan password dari body
 *    POST /login
 * 
 * 3. Buat route yang menggunakan semua 4 sumber data:
 *    POST /api/orders/:orderId/items?notify=true
 *    Headers: Authorization
 *    Body: { itemName, quantity, price }
 * 
 * 4. Tambahkan error handling untuk data yang hilang/tidak valid
 */
