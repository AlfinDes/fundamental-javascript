# JavaScript Learning Guide

## 📚 JavaScript Fundamentals (1–10)

<<<<<<< HEAD
| No | Materi | Deskripsi Singkat | Progress |
|----|-------------------------|----------------------------------------------------------------|----------|
| 1 | Variabel & Tipe Data | var, let, const, tipe data dasar (string, number, boolean) | 🟩 |
| 2 | Operator | Aritmatika, logika, perbandingan, assignment, ternary | 🟩 |
| 3 | Control Flow | if/else dasar, switch sederhana | 🟩 |
| 4 | Looping | for, while, do...while versi dasar | 🟩 |
| 5 | Function | Function basic: parameter, return, arrow function sederhana | 🟩 |
| 6 | Array | push/pop, forEach, search dasar | 🟩 |
| 7 | Object | Property dasar, akses key, nested object sederhana | 🟩 |
| 8 | DOM | querySelector, manipulasi text/style dasar | 🔄 |
| 9 | Asynchronous JavaScript | setTimeout & promise basic untuk pemula |  |
| 10 | API Fetch | Fetch real public APIs, working with JSON data | ⬜ |
=======
| No | Materi | Deskripsi Singkat | Student | Teacher |
|----|-------------------------|----------------------------------------------------------------|----------|-----------|
| 1  | Variabel & Tipe Data | var, let, const, tipe data dasar (string, number, boolean) | 🟩       | 🏆        |
| 2  | Operator | Aritmatika, logika, perbandingan, assignment, ternary | 2.1 ✅, 2.2 ✅❌✅, 2.3 ❌, 2.4 ✅, 2.5 ❌, Bonus ❌       |           |
| 3  | Control Flow | if/else dasar, switch sederhana | 🟩       |           |
| 4  | Looping | for, while, do...while versi dasar | 🟩       |           |
| 5  | Function | Function basic: parameter, return, arrow function sederhana | 🟩       |           |
| 6  | Array | push/pop, forEach, search dasar | 🟩       |           |
| 7  | Object | Property dasar, akses key, nested object sederhana | 🔄       |           |
| 8  | DOM | querySelector, manipulasi text/style dasar | ⬜       |           |
| 9  | Asynchronous JavaScript | setTimeout & promise basic untuk pemula | ⬜       |           |
| 10 | API Fetch | Fetch real public APIs, working with JSON data | ⬜       |           |
>>>>>>> a3be29eb76400233fc013aa0007fe68452a12738

### Legend
**Progress**  
- 🏆 Passed → Lulus  
- 🟩 Done → Selesai  
- 🔄 In Progress → Sedang dipelajari  
- ⬜ Belum dikerjakan
- ✅ Soal benar
- ❌ Soal salah

---

## ✨ Basic JavaScript Coding Standards

Gunakan standar ini untuk semua latihan dan proyek JavaScript agar kode rapi, mudah dibaca, dan konsisten.

### 1. Gunakan Bahasa Inggris untuk Nama Variabel
Nama variabel harus menggunakan **bahasa Inggris** dan **jelas**.

**Contoh:**
```javascript
const customerName = "John Doe";
const itemPrice = 15000;
const totalPayment = 50000;
```

### 2. Gunakan camelCase
Huruf pertama kecil, kata selanjutnya kapital.

**Contoh:**
```javascript
const totalPrice = 25000;
const userAge = 21;
const firstName = "Jane";
```

### 3. Hindari Singkatan Aneh
Gunakan nama lengkap agar mudah dimengerti.

- ❌ `const nm = "John";`
- ✅ `const name = "John";`

### 4. Gunakan `const` untuk Nilai Tetap
`let` hanya untuk nilai yang berubah.

**Contoh:**
```javascript
const taxRate = 0.1; // tidak berubah
let totalPrice = 0;  // akan berubah
```

### 5. Tambahkan Spasi Biar Rapi
**Contoh:**
```javascript
let total = price + discount;
let isValid = age >= 18;
```

### 6. Konsisten dalam Penggunaan Kutip
Gunakan `' '`, `" "`, atau `` ` ` `` secara konsisten.

**Contoh:**
```javascript
const greeting = 'Hello World';
const message = "Welcome to JavaScript";
const template = `Total: ${total}`;
```

### 7. Gunakan Komentar Jika Perlu
**Contoh:**
```javascript
// Calculate final price after discount
let finalPrice = price - discount;

// Check if user is eligible
const isEligible = age >= 18;
```

### 8. Nama Variabel Harus Sesuai Isi
- ❌ `let x = 15000;`
- ✅ `let foodPrice = 15000;`

### 9. Jangan Gunakan `var`
Untuk pemula, cukup pakai `let` dan `const`.

**Contoh:**
```javascript
// ❌ Jangan seperti ini
var count = 0;

// ✅ Gunakan ini
let count = 0;
const maxCount = 100;
```

### 10. Keep It Simple
Hindari fitur kompleks saat awal belajar. Fokus pada dasar-dasar terlebih dahulu.

---

## 🌐 Public APIs Used in Topic 10

Semua API ini **gratis** dan **tidak perlu API key**:

1. **Random User Generator** - `https://randomuser.me/api/`
   - Generate random user data untuk testing

2. **Dog CEO** - `https://dog.ceo/api/breeds/image/random`
   - Random dog images

3. **REST Countries** - `https://restcountries.com/v3.1/name/{country}`
   - Informasi lengkap tentang negara

4. **Official Joke API** - `https://official-joke-api.appspot.com/jokes/programming/ten`
   - Random programming jokes

5. **GitHub API** - `https://api.github.com/users/{username}`
   - Public GitHub user data

6. **Weather API (wttr.in)** - `https://wttr.in/{city}?format=j1`
   - Weather data (no API key needed!)

---

## 🎯 Tips Belajar

1. Praktik setiap hari minimal 30 menit
2. Tulis kode sendiri, jangan hanya copy-paste
3. Pahami error message yang muncul
4. Buat project kecil untuk setiap materi
5. Review kode lama secara berkala

---

**Happy Coding! 🚀**