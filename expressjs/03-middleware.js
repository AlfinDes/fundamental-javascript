/*
================================================================================
💡 CARA BELAJAR DENGAN AI:
================================================================================
Kalau ada yang bingung, COPAS bagian antara tanda ===== ke AI:

===== PROMPT START =====
Saya sedang belajar Middleware di Express.js. Bisakah kamu jelaskan:
1. Apa itu middleware dan kenapa penting di Express?
2. Bagaimana urutan eksekusi middleware?
3. Apa fungsi next() di middleware?
4. Bagaimana cara membuat custom middleware?

Jelaskan dengan bahasa sederhana tanpa memberikan jawaban langsung untuk 
latihan di bawah. Saya ingin memahami konsepnya dulu.
===== PROMPT END =====

❌ JANGAN tanya: "Buatkan middleware untuk latihan nomor 3"
✅ TANYA: Konsep dan cara kerjanya
================================================================================
*/

/**
 * 03 - MIDDLEWARE: Layer Antara Request dan Response
 * 
 * Tujuan: Memahami apa itu middleware dan cara menggunakannya
 * 
 * Apa itu Middleware?
 * - Function yang dijalankan SELAMA siklus request-response
 * - Bisa memodifikasi objek req/res
 * - Bisa mengakhiri request atau melanjutkan ke middleware berikutnya
 * 
 * Jalankan: node 03-middleware.js
 */

const express = require('express');
const { default: rateLimit } = require('express-rate-limit');
const app = express();

const PORT = 3000;

// ============================================
// BUILT-IN MIDDLEWARE
// ============================================

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (dari HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve file statis (misal: gambar, CSS, JS)
// app.use(express.static('public'));

// ============================================
// CUSTOM MIDDLEWARE - Logger
// ============================================

// Ini berjalan di SETIAP request
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Lanjutkan ke middleware berikutnya
});

// ============================================
// CUSTOM MIDDLEWARE - Request Timer
// ============================================

app.use((req, res, next) => {
  req.startTime = Date.now();
  
  // Hook ke event response finish
  res.on('finish', () => {
    const duration = Date.now() - req.startTime;
    console.log(`⏱️  Request memakan waktu ${duration}ms`);
  });
  
  next();
});

// ============================================
// ROUTE-SPECIFIC MIDDLEWARE
// ============================================

// Middleware pengecekan autentikasi
const checkAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token authorization tidak ditemukan'
    });
  }
  
  // Simulasi validasi token
  if (token === 'Bearer secret-token') {
    req.user = { id: 1, name: 'Admin' };
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: 'Token tidak valid'
    });
  }
};

// ============================================
// ROUTES
// ============================================

// Route publik - tanpa middleware
app.get('/', (req, res) => {
  res.json({
    message: 'Route publik - tidak perlu autentikasi'
  });
});

// Route terproteksi - menggunakan middleware checkAuth
app.get('/dashboard', checkAuth, (req, res) => {
  res.json({
    message: 'Selamat datang di dashboard kamu',
    user: req.user
  });
});

// Multiple middleware berurutan
app.get('/admin', 
  checkAuth, 
  (req, res, next) => {
    // Cek apakah user adalah admin
    if (req.user.name !== 'Admin') {
      return res.status(403).json({
        success: false,
        message: 'Akses admin diperlukan'
      });
    }
    next();
  },
  (req, res) => {
    res.json({
      message: 'Panel admin',
      user: req.user
    });
  }
);

// ============================================
// ERROR HANDLING MIDDLEWARE (Selalu terakhir!)
// ============================================

// Handler 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route tidak ditemukan'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`\nTest route berikut:\n`);
  console.log(`  GET http://localhost:${PORT}/`);
  console.log(`  GET http://localhost:${PORT}/dashboard (butuh auth header)`);
  console.log(`  GET http://localhost:${PORT}/admin (butuh auth header)`);
  console.log(`\nUntuk test route terproteksi, tambahkan header:`);
  console.log(`  Authorization: Bearer secret-token`);
});

// ============================================
// LATIHAN
// ============================================

/**
 * TODO:
 * 1. Buat middleware yang log request body (untuk POST requests)
 * 2. Buat middleware yang menambahkan custom header ke semua response
 * 3. Buat middleware rate-limiting (maksimal 5 request per menit)
 * 4. Test route /dashboard dengan dan tanpa authorization header
 */
 
// topik 1
const logRequestBody = (req, res, next) => {
  if (req.method === 'POST') {
    console.log('POST body =>', req.body);
  }
  next();
};

app.use(logRequestBody);

app.post('/login', (req, res) => {
  const log = req.body;
  res.send('data di kirim');

});

// topik 2
app.use((req, res, next) => {
  res.setHeader('File-Stastic', 'Belajar-Exspress')
  next();
});

// topik 3
const limiting = rateLimit({
  windowMs: 1 * 60 * 1000,
  max:5,
  messeage: {
    status: 429,
    error: "Terlalu banyak reques"
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiting);
app.get("/", (req, res) => {
  res.send("Request di terima");
});

// topik 4
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Authorization header tidak ada",
    });
  }

  next();
};

app.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Selamat datang di dashboard",
    user: req.user,
  });
});

