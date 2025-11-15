// Run this with: node generate-exercises.js

const fs = require('fs');

const exercises = {
  '02-operators.js': `/* 
================================================================================
 TOPIC 2 — OPERATORS
 Learn: Arithmetic, Comparison, Logical, Assignment, Ternary
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning JavaScript operators. Before I start coding, help me understand:

1. What are the different types of operators in JavaScript?
2. How do arithmetic operators work? (+, -, *, /, %)
3. What's the difference between == and ===?
4. How do logical operators (&&, ||, !) work?
5. What is a ternary operator and when should I use it?

Please use simple examples like SHOPPING PRICES or STUDENT GRADES.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 2.1: Basic Calculator
--------------------------------------------------------------------------------
 Buat variabel a = 15 dan b = 7.
 Hitung dan tampilkan:
 - Penjumlahan (a + b)
 - Pengurangan (a - b)
 - Perkalian (a * b)
 - Pembagian (a / b)
 - Modulus/sisa bagi (a % b)

 Expected Output:
 15 + 7 = 22
 15 - 7 = 8
 15 * 7 = 105
 15 / 7 = 2.142857142857143
 15 % 7 = 1
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 2.2: Price Comparison
--------------------------------------------------------------------------------
 Sebuah toko online memberikan harga:
 - Produk A: 50000
 - Produk B: 45000
 
 Bandingkan kedua harga dan tampilkan:
 - Apakah harga A lebih mahal dari B? (boolean)
 - Apakah harga A sama dengan B? (boolean)
 - Apakah harga B lebih murah atau sama dengan A? (boolean)

 Expected Output:
 A lebih mahal dari B: true
 A sama dengan B: false
 B lebih murah atau sama dengan A: true
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 2.3: Login Validation
--------------------------------------------------------------------------------
 Buat validasi login sederhana:
 - username harus "admin"
 - password harus "12345"
 
 Gunakan operator logical (&&) untuk cek apakah login berhasil.
 Tampilkan "Login berhasil" atau "Login gagal"

 Hint: gunakan && untuk AND logic

 Expected Output (jika benar):
 "Login berhasil"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 2.4: Discount Eligibility
--------------------------------------------------------------------------------
 Seorang customer mendapat diskon jika:
 - Total belanja >= 100000 ATAU
 - Dia adalah member

 Buat variabel:
 - totalBelanja (number)
 - isMember (boolean)
 
 Gunakan operator || (OR) untuk cek eligibility.

 Expected Output (totalBelanja = 80000, isMember = true):
 "Mendapat diskon"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 2.5: Ternary Operator - Stock Status
--------------------------------------------------------------------------------
 Sebuah toko punya stok produk (number).
 Gunakan ternary operator untuk menampilkan:
 - "Tersedia" jika stok > 0
 - "Habis" jika stok <= 0

 Hint: condition ? valueIfTrue : valueIfFalse

 Expected Output (stok = 5):
 "Tersedia"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 2: Grade Calculator
================================================================================
 Buat program penghitung grade dengan ketentuan:
 - Input: nilai (number) dari 0-100
 - Gunakan operator untuk tentukan grade:
   * nilai >= 90: "A"
   * nilai >= 80: "B"
   * nilai >= 70: "C"
   * nilai >= 60: "D"
   * nilai < 60: "E"
 
 Tampilkan: "Nilai: {nilai}, Grade: {grade}"

 Expected Output (nilai = 85):
 "Nilai: 85, Grade: B"
================================================================================
*/

// Write your code here
`,

  '03-control-flow.js': `/* 
================================================================================
 TOPIC 3 — CONTROL FLOW
 Learn: if/else, else if, switch case
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning control flow in JavaScript. Before I start coding, help me understand:

1. What is control flow and why do we need it?
2. How does if/else statement work?
3. When should I use else if vs multiple if statements?
4. What is a switch case and when is it better than if/else?
5. Can you explain nested if statements?

Please use simple examples like TRAFFIC LIGHTS or WEATHER CONDITIONS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 3.1: Simple If-Else
--------------------------------------------------------------------------------
 Buat program cek cuaca:
 - Jika suhu > 30: "Panas"
 - Jika tidak: "Sejuk"

 Expected Output (suhu = 35):
 "Panas"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 3.2: Multiple Conditions (else if)
--------------------------------------------------------------------------------
 Buat program cek kategori umur:
 - 0-5: "Balita"
 - 6-12: "Anak-anak"
 - 13-17: "Remaja"
 - 18-60: "Dewasa"
 - >60: "Lansia"

 Expected Output (umur = 25):
 "Dewasa"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 3.3: Nested If
--------------------------------------------------------------------------------
 Buat program cek eligibility tiket bioskop:
 - Umur >= 17 DAN punya KTP: "Boleh nonton film dewasa"
 - Umur >= 17 TAPI tidak punya KTP: "Bawa KTP dulu"
 - Umur < 17: "Hanya boleh film anak-anak"

 Expected Output (umur = 20, punyaKTP = true):
 "Boleh nonton film dewasa"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 3.4: Switch Case - Day Name
--------------------------------------------------------------------------------
 Buat program yang menerima angka 1-7 dan menampilkan nama hari:
 1: Senin
 2: Selasa
 3: Rabu
 4: Kamis
 5: Jumat
 6: Sabtu
 7: Minggu
 Selain itu: "Hari tidak valid"

 Expected Output (day = 3):
 "Rabu"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 3.5: Switch Case - Payment Method
--------------------------------------------------------------------------------
 Buat program untuk menampilkan instruksi pembayaran:
 - "cash": "Bayar di kasir"
 - "debit": "Gesek kartu di mesin EDC"
 - "qris": "Scan QR code"
 - "ewallet": "Buka aplikasi e-wallet"
 - Lainnya: "Metode tidak tersedia"

 Expected Output (method = "qris"):
 "Scan QR code"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 3: ATM Withdrawal
================================================================================
 Buat simulasi penarikan ATM:
 - Saldo awal: 1000000
 - Input: jumlah penarikan
 
 Kondisi:
 - Jika penarikan > saldo: "Saldo tidak cukup"
 - Jika penarikan tidak kelipatan 50000: "Nominal harus kelipatan 50.000"
 - Jika valid: tampilkan sisa saldo

 Expected Output (penarikan = 300000):
 "Penarikan berhasil. Sisa saldo: Rp 700000"
================================================================================
*/

// Write your code here
`,

  '04-looping.js': `/* 
================================================================================
 TOPIC 4 — LOOPING
 Learn: for, while, do...while
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning loops in JavaScript. Before I start coding, help me understand:

1. What is a loop and why do we need it?
2. How does a for loop work? Break down the syntax.
3. What's the difference between while and do...while?
4. When should I use for vs while?
5. What are break and continue statements?

Please use simple examples like COUNTING NUMBERS or PRINTING LISTS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 4.1: Basic For Loop
--------------------------------------------------------------------------------
 Tampilkan angka 1 sampai 10 menggunakan for loop.

 Expected Output:
 1
 2
 3
 ...
 10
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 4.2: Even Numbers
--------------------------------------------------------------------------------
 Tampilkan semua angka genap dari 2 sampai 20.

 Expected Output:
 2
 4
 6
 ...
 20
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 4.3: Countdown Timer
--------------------------------------------------------------------------------
 Buat countdown dari 10 ke 1, lalu tampilkan "Start!".

 Expected Output:
 10
 9
 8
 ...
 1
 Start!
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 4.4: While Loop - Number Guessing
--------------------------------------------------------------------------------
 Buat simulasi tebak angka:
 - Angka rahasia: 7
 - Tebakan awal: 1
 - Tambah tebakan +1 sampai ketemu angka rahasianya
 - Hitung berapa kali tebakan

 Expected Output:
 "Ketemu! Butuh 7 kali tebakan"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 4.5: Do-While Loop
--------------------------------------------------------------------------------
 Buat program yang terus meminta input password sampai benar.
 Password yang benar: "secret123"
 
 Simulasikan dengan array attempts:
 const attempts = ["wrong1", "wrong2", "secret123"];
 
 Hint: gunakan do-while dan index untuk simulasi input

 Expected Output:
 "Password salah, coba lagi"
 "Password salah, coba lagi"
 "Password benar! Akses diberikan"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 4: Multiplication Table
================================================================================
 Buat tabel perkalian untuk angka tertentu (misal 5):
 
 5 x 1 = 5
 5 x 2 = 10
 5 x 3 = 15
 ...
 5 x 10 = 50

 Gunakan loop dan template string.
================================================================================
*/

// Write your code here
`,

  '05-functions.js': `/* 
================================================================================
 TOPIC 5 — FUNCTIONS
 Learn: Function declaration, parameters, return, arrow function
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning functions in JavaScript. Before I start coding, help me understand:

1. What is a function and why do we need it?
2. What's the difference between parameters and arguments?
3. How does the return statement work?
4. What are arrow functions and how are they different from regular functions?
5. What is function scope?

Please use simple examples like CALCULATORS or GREETING MESSAGES.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 5.1: Simple Function
--------------------------------------------------------------------------------
 Buat function dengan nama: greet()
 
 Function ini harus menampilkan "Hello, World!"
 Panggil function tersebut.

 Expected Output:
 "Hello, World!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 5.2: Function with Parameter
--------------------------------------------------------------------------------
 Buat function dengan nama: greetUser(name)
 
 Function ini harus menerima parameter name
 dan menampilkan "Hello, {name}!"

 Expected Output (greetUser("Alice")):
 "Hello, Alice!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 5.3: Function with Return
--------------------------------------------------------------------------------
 Buat function dengan nama: hitungLuasPersegiPanjang(panjang, lebar)
 
 Function ini harus mengembalikan hasil perhitungan luas (panjang * lebar)

 Expected Output (hitungLuasPersegiPanjang(5, 3)):
 15
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 5.4: Arrow Function
--------------------------------------------------------------------------------
 Buat arrow function dengan nama: kelilingLingkaran
 
 Function ini untuk menghitung keliling lingkaran.
 Rumus: 2 * pi * radius (gunakan pi = 3.14)
 
 Format: const kelilingLingkaran = (radius) => { ... }

 Expected Output (kelilingLingkaran(7)):
 43.96
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 5.5: Function with Multiple Parameters
--------------------------------------------------------------------------------
 Buat function dengan nama: hitungDiskon(harga, persenDiskon)
 
 Function ini harus mengembalikan harga setelah diskon.
 Rumus: harga - (harga * persenDiskon / 100)

 Expected Output (hitungDiskon(100000, 20)):
 80000
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 5: Temperature Converter
================================================================================
 Buat dua function untuk konversi suhu:
 
 1. Function: celsiusToFahrenheit(celsius)
    Rumus: F = (C * 9/5) + 32
 
 2. Function: fahrenheitToCelsius(fahrenheit)
    Rumus: C = (F - 32) * 5/9

 Expected Output:
 celsiusToFahrenheit(100) → 212
 fahrenheitToCelsius(212) → 100
================================================================================
*/

// Write your code here
`,

  '06-arrays.js': `/* 
================================================================================
 TOPIC 6 — ARRAYS
 Learn: push, pop, shift, unshift, forEach, find, filter
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning arrays in JavaScript. Before I start coding, help me understand:

1. What is an array and how is it different from a variable?
2. How do I add and remove items from an array? (push, pop, shift, unshift)
3. What is forEach and how does it work?
4. What's the difference between find() and filter()?
5. How do I access array elements by index?

Please use simple examples like LISTS OF COLORS or NUMBERS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 6.1: Create and Access Array
--------------------------------------------------------------------------------
 Buat array dengan nama: fruits
 Isi dengan 5 nama buah.
 Tampilkan buah di index ke-2.

 Expected Output:
 "Jeruk" (jika array = ["Apel", "Mangga", "Jeruk", "Pisang", "Anggur"])
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 6.2: Push and Pop
--------------------------------------------------------------------------------
 Buat array kosong dengan nama: items
 Lalu:
 1. Tambahkan 3 nama dengan push()
 2. Hapus item terakhir dengan pop()
 3. Tampilkan array hasil akhir

 Expected Output:
 ["Item1", "Item2"]
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 6.3: forEach Loop
--------------------------------------------------------------------------------
 Buat array dengan nama: prices
 Isi: [10000, 25000, 15000, 30000]
 
 Gunakan forEach untuk tampilkan setiap harga dengan format:
 "Harga: Rp {harga}"

 Expected Output:
 "Harga: Rp 10000"
 "Harga: Rp 25000"
 "Harga: Rp 15000"
 "Harga: Rp 30000"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 6.4: Find in Array
--------------------------------------------------------------------------------
 Buat array dengan nama: numbers
 Isi: [5, 12, 8, 130, 44]
 
 Gunakan find() untuk cari angka pertama yang lebih dari 10.

 Expected Output:
 12
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 6.5: Filter Array
--------------------------------------------------------------------------------
 Buat array dengan nama: grades
 Isi: [75, 82, 60, 91, 55, 88]
 
 Gunakan filter() untuk ambil nilai yang >= 70 (lulus).

 Expected Output:
 [75, 82, 91, 88]
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 6: Shopping Cart Total
================================================================================
 Buat array dengan nama: cart
 Isi dengan object products:
 
 const cart = [
   { name: "Buku", price: 50000, qty: 2 },
   { name: "Pulpen", price: 5000, qty: 5 },
   { name: "Tas", price: 150000, qty: 1 }
 ];

 Hitung total belanja (price * qty untuk semua item).

 Expected Output:
 "Total: Rp 275000"
================================================================================
*/

// Write your code here
`,

  '07-objects.js': `/* 
================================================================================
 TOPIC 7 — OBJECTS
 Learn: Properties, methods, nested objects, object manipulation
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning objects in JavaScript. Before I start coding, help me understand:

1. What is an object and how is it different from an array?
2. How do I create and access object properties?
3. What's the difference between dot notation and bracket notation?
4. What are object methods?
5. How do nested objects work?

Please use simple examples like PERSON INFO or CAR DETAILS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 7.1: Create Simple Object
--------------------------------------------------------------------------------
 Buat object dengan nama: book
 
 Properties:
 - title: "Harry Potter"
 - author: "J.K. Rowling"
 - year: 1997
 
 Tampilkan semua propertinya.

 Expected Output:
 "Harry Potter"
 "J.K. Rowling"
 1997
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 7.2: Access Object Properties
--------------------------------------------------------------------------------
 Buat object dengan nama: student
 Isi dengan properties: name, age, class
 
 Akses dan tampilkan dengan 2 cara:
 1. Dot notation (student.name)
 2. Bracket notation (student["name"])

 Expected Output:
 "Alice"
 "Alice"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 7.3: Object with Method
--------------------------------------------------------------------------------
 Buat object dengan nama: calculator
 
 Buat 2 method:
 - add(a, b) → return a + b
 - multiply(a, b) → return a * b

 Expected Output:
 calculator.add(5, 3) → 8
 calculator.multiply(5, 3) → 15
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 7.4: Nested Object
--------------------------------------------------------------------------------
 Buat object dengan nama: user
 
 Struktur:
 {
   name: "John",
   address: {
     city: "Jakarta",
     postalCode: "12345"
   }
 }
 
 Akses dan tampilkan city-nya.

 Expected Output:
 "Jakarta"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 7.5: Update Object Property
--------------------------------------------------------------------------------
 Buat object dengan nama: product
 Isi: { name: "Laptop", price: 5000000 }
 
 Lalu:
 1. Ubah harganya jadi 4500000
 2. Tambah property baru: stock: 10

 Expected Output:
 Before: { name: "Laptop", price: 5000000 }
 After: { name: "Laptop", price: 4500000, stock: 10 }
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 7: User Profile System
================================================================================
 Buat object dengan nama: profile
 
 Struktur:
 - Data diri (name, age, email)
 - Array hobbies (minimal 3 hobbies)
 - Nested object address (street, city, country)
 - Method getFullProfile() yang return string lengkap

 Expected Output:
 "Name: Alice, Age: 25, City: Jakarta, Hobbies: Reading, Gaming, Coding"
================================================================================
*/

// Write your code here
`,

  '08-dom.js': `/* 
================================================================================
 TOPIC 8 — DOM MANIPULATION
 Learn: querySelector, innerHTML, textContent, style, classList
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning DOM manipulation in JavaScript. Before I start coding, help me understand:

1. What is the DOM (Document Object Model)?
2. How do I select HTML elements using querySelector?
3. What's the difference between innerHTML and textContent?
4. How do I change CSS styles with JavaScript?
5. How do addEventListener and events work?

Please use simple examples like CHANGING TEXT or BUTTON CLICKS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
CONTOH HTML:
Buat file 08-dom.html dengan struktur ini, lalu link file ini di <script>

<!DOCTYPE html>
<html>
<head>
  <title>DOM Exercises</title>
  <style>
    .highlight { background: yellow; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <h1 id="title">Hello</h1>
  <p id="text">This is a paragraph</p>
  <div id="box">Box</div>
  <button id="btn">Click Me</button>
  <p id="message"></p>
  <button id="toggleBtn">Toggle</button>
  <div id="content">This content can be hidden</div>
  
  <div id="counter">0</div>
  <button id="increase">+</button>
  <button id="decrease">-</button>
  <button id="reset">Reset</button>
  
  <script src="08-dom.js"></script>
</body>
</html>
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 8.1: Select and Change Text
--------------------------------------------------------------------------------
 Gunakan querySelector untuk select element dengan id "title"
 Ubah textContent-nya jadi "Welcome!"

 Expected Result:
 <h1> berubah dari "Hello" ke "Welcome!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.2: Change Style
--------------------------------------------------------------------------------
 Select element dengan id "text"
 
 Ubah style-nya:
 - color: red
 - fontSize: 20px
 - fontWeight: bold

 Hint: gunakan .style property

 Expected Result:
 Paragraph berubah jadi merah, besar, dan bold
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.3: Add and Remove Class
--------------------------------------------------------------------------------
 Select element dengan id "box"
 
 1. Tambah class "highlight" (background kuning)
 2. Setelah 2 detik, hapus class "highlight"

 Hint: classList.add() dan classList.remove()
       gunakan setTimeout untuk delay

 Expected Result:
 Box background kuning 2 detik, lalu kembali normal
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.4: Button Click Event
--------------------------------------------------------------------------------
 Select button dengan id "btn"
 Select paragraph dengan id "message"
 
 Ketika button diklik, tampilkan "Button clicked!" di paragraph

 Hint: addEventListener('click', ...)

 Expected Result:
 Klik button → muncul text "Button clicked!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 8.5: Toggle Visibility
--------------------------------------------------------------------------------
 Select button dengan id "toggleBtn"
 Select div dengan id "content"
 
 Buat button yang bisa hide/show content

 Hint: style.display = 'none' atau 'block'

 Expected Result:
 Klik toggle → content hilang/muncul bergantian
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 8: Simple Counter
================================================================================
 Buat counter dengan:
 - Display angka (id: "counter", mulai dari 0)
 - Button "+" (id: "increase") untuk tambah
 - Button "-" (id: "decrease") untuk kurang
 - Button "Reset" (id: "reset") untuk kembali ke 0
 
 Logic:
 - Increase: angka + 1
 - Decrease: angka - 1 (tapi tidak boleh < 0)
 - Reset: kembali ke 0

 Expected Result:
 Counter yang bisa +1, -1, dan reset
================================================================================
*/

// Write your code here
`,

  '09-async-js.js': `/* 
================================================================================
 TOPIC 9 — ASYNCHRONOUS JAVASCRIPT
 Learn: setTimeout, setInterval, Promise basics
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning asynchronous JavaScript. Before I start coding, help me understand:

1. What does 'asynchronous' mean in JavaScript?
2. How do setTimeout and setInterval work?
3. What is a Promise and why do we need it?
4. How do .then() and .catch() work with Promises?
5. What is async/await and how is it different from .then()?

Please use simple examples like TIMERS or LOADING DATA.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 9.1: Basic setTimeout
--------------------------------------------------------------------------------
 Tampilkan "Hello" langsung, 
 lalu tampilkan "World" setelah 2 detik.

 Hint: gunakan console.log dan setTimeout

 Expected Output:
 "Hello" (langsung)
 (tunggu 2 detik)
 "World"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 9.2: setInterval Timer
--------------------------------------------------------------------------------
 Buat timer yang menampilkan angka 1, 2, 3 setiap 1 detik.
 Stop di angka 3.

 Hint: gunakan setInterval dan clearInterval

 Expected Output:
 1 (detik 1)
 2 (detik 2)
 3 (detik 3)
 (berhenti)
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 9.3: Simple Promise
--------------------------------------------------------------------------------
 Buat Promise yang resolve setelah 1 detik dengan pesan "Success!"
 Gunakan .then() untuk tampilkan pesannya.

 Hint:
 const myPromise = new Promise((resolve, reject) => {
   // your code here
 });

 Expected Output (setelah 1 detik):
 "Success!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 9.4: Promise with Reject
--------------------------------------------------------------------------------
 Buat Promise yang:
 - Resolve jika angka > 5 dengan pesan "Number is greater than 5"
 - Reject jika angka <= 5 dengan pesan "Number is too small"
 
 Gunakan .then() dan .catch()
 Test dengan angka 7 dan angka 3

 Expected Output (input 7):
 "Number is greater than 5"
 
 Expected Output (input 3):
 "Number is too small"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 9.5: Async/Await Basic
--------------------------------------------------------------------------------
 Ubah Exercise 9.3 menggunakan async/await.
 
 Buat async function dengan nama: getData()
 
 Hint:
 async function getData() {
   const result = await yourPromise;
   console.log(result);
 }

 Expected Output (setelah 1 detik):
 "Success!"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 9: Fake API Call Simulation
================================================================================
 Simulasikan fetch data user dari API:
 
 1. Buat Promise yang resolve setelah 2 detik dengan data:
    { name: "John", age: 25, city: "Jakarta" }
 
 2. Buat async function dengan nama: fetchUserData()
 
 3. Tampilkan "Loading..." saat menunggu
 
 4. Setelah selesai, tampilkan datanya dalam format:
    "Name: John, Age: 25, City: Jakarta"
 
 5. Gunakan async/await

 Expected Output:
 "Loading..." (langsung)
 (tunggu 2 detik)
 "Name: John, Age: 25, City: Jakarta"
================================================================================
*/

// Write your code here
`,

  '10-api-fetch.js': `/* 
================================================================================
 TOPIC 10 — API FETCH (REAL PUBLIC API)
 Learn: fetch(), working with real APIs, JSON data
================================================================================

💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
--------------------------------------------------------------------------------
"I'm learning to fetch data from APIs in JavaScript. Before I start coding, help me understand:

1. What is an API and how does it work?
2. What is the fetch() function?
3. How do I handle API responses with .then() or async/await?
4. What is JSON and why do APIs use it?
5. How do I handle errors when fetching data?

Please use simple analogies like ORDERING FOOD or LIBRARY BOOKS.
Keep it simple and beginner-friendly!"
--------------------------------------------------------------------------------

⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
 
NOTE: Semua API di bawah adalah GRATIS dan TIDAK PERLU API KEY
Jalankan file ini di browser console atau buat HTML file
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 10.1: Fetch Random User
--------------------------------------------------------------------------------
 API: https://randomuser.me/api/
 
 Fetch 1 random user dan tampilkan:
 - Nama lengkap (first + last)
 - Email
 - Negara (country)

 Hint:
 - Gunakan fetch()
 - Gunakan .then() atau async/await
 - Data ada di response.results[0]

 Expected Output:
 "Name: John Doe"
 "Email: john.doe@example.com"
 "Country: United States"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 10.2: Fetch Random Dog Image
--------------------------------------------------------------------------------
 API: https://dog.ceo/api/breeds/image/random
 
 Fetch 1 random dog image dan tampilkan URL-nya.
 
 BONUS: Jika pakai HTML, tampilkan gambarnya dengan <img>

 Hint: Image URL ada di response.message

 Expected Output:
 "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 10.3: Fetch Country Info
--------------------------------------------------------------------------------
 API: https://restcountries.com/v3.1/name/{country}
 
 Fetch data negara "Indonesia" dan tampilkan:
 - Nama resmi (official name)
 - Ibukota (capital)
 - Populasi (population)
 - Mata uang (currencies)

 Hint: Data ada di response[0]

 Expected Output:
 "Official Name: Republic of Indonesia"
 "Capital: Jakarta"
 "Population: 273523615"
 "Currency: Indonesian rupiah"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 10.4: Fetch Programming Jokes
--------------------------------------------------------------------------------
 API: https://official-joke-api.appspot.com/jokes/programming/ten
 
 Fetch 10 programming jokes dan tampilkan:
 - Setup (pertanyaan)
 - Punchline (jawaban)

 Hint: Response adalah array of jokes

 Expected Output:
 "1. Why do programmers prefer dark mode?"
 "   Because light attracts bugs!"
 "2. How many programmers does it take to change a light bulb?"
 "   None. It's a hardware problem."
 ...
--------------------------------------------------------------------------------
*/

// Write your code here




/*
--------------------------------------------------------------------------------
 EXERCISE 10.5: Fetch GitHub User
--------------------------------------------------------------------------------
 API: https://api.github.com/users/{username}
 
 Fetch data GitHub user "octocat" dan tampilkan:
 - Username (login)
 - Bio
 - Public repos count
 - Followers

 Expected Output:
 "Username: octocat"
 "Bio: ..."
 "Public Repos: 8"
 "Followers: 9000+"
--------------------------------------------------------------------------------
*/

// Write your code here




/*
================================================================================
 BONUS CHALLENGE 10: Mini Weather App
================================================================================
 API: https://wttr.in/{city}?format=j1
 
 Buat mini weather app yang fetch cuaca untuk kota "Jakarta"
 
 Tampilkan:
 - Nama kota
 - Suhu saat ini (Celsius)
 - Deskripsi cuaca (weatherDesc)
 - Humidity

 Gunakan async/await dan error handling (try-catch)

 NOTE: API ini gratis tanpa API key!

 Expected Output:
 "City: Jakarta"
 "Temperature: 28°C"
 "Condition: Partly cloudy"
 "Humidity: 75%"
================================================================================
*/

// Write your code here
`,

  '11-crud-browser.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD Todo App</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    h1 {
      color: #333;
      margin-bottom: 30px;
      text-align: center;
    }

    .input-section {
      display: flex;
      gap: 10px;
      margin-bottom: 30px;
    }

    input[type="text"] {
      flex: 1;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
    }

    input[type="text"]:focus {
      outline: none;
      border-color: #667eea;
    }

    button {
      padding: 12px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;
    }

    button:hover {
      background: #5568d3;
    }

    .todo-list {
      list-style: none;
    }

    .todo-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 5px;
      margin-bottom: 10px;
      transition: all 0.3s;
    }

    .todo-item:hover {
      background: #e9ecef;
      transform: translateX(5px);
    }

    .todo-item.completed {
      opacity: 0.6;
    }

    .todo-item.completed .todo-text {
      text-decoration: line-through;
      color: #999;
    }

    .todo-text {
      flex: 1;
      font-size: 16px;
      color: #333;
    }

    .btn-complete {
      padding: 5px 10px;
      background: #28a745;
      font-size: 14px;
    }

    .btn-delete {
      padding: 5px 10px;
      background: #dc3545;
      font-size: 14px;
    }

    .empty-state {
      text-align: center;
      color: #999;
      padding: 40px;
      font-size: 18px;
    }

    .stats {
      margin-top: 20px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 5px;
      text-align: center;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Todo App - CRUD with LocalStorage</h1>
    
    <div class="input-section">
      <input 
        type="text" 
        id="todoInput" 
        placeholder="What needs to be done?"
        onkeypress="if(event.key==='Enter') addTodo()"
      >
      <button onclick="addTodo()">Add Todo</button>
    </div>

    <ul class="todo-list" id="todoList"></ul>

    <div class="stats" id="stats"></div>
  </div>

  <script>
    /* 
    ================================================================================
     TOPIC 11 — CRUD OPERATIONS (BROWSER VERSION)
     Learn: LocalStorage, DOM Manipulation, CRUD with JavaScript
    ================================================================================

    💬 UNDERSTAND THE CONCEPT FIRST - Ask AI:
    --------------------------------------------------------------------------------
    "I'm learning CRUD operations with localStorage. Before I start coding,
    help me understand:

    1. What is CRUD in simple terms?
    2. How does localStorage API work in browsers?
    3. Show me how to:
       - Save data: localStorage.setItem()
       - Get data: localStorage.getItem()
       - Remove data: localStorage.removeItem()
    4. Why do we need JSON.stringify() and JSON.parse()?

    Please use BOOK LIBRARY or CONTACT LIST examples, NOT todo apps.
    Keep it simple and beginner-friendly!"
    --------------------------------------------------------------------------------

    ⚠️  IMPORTANT: Understand the concepts above BEFORE attempting the exercises!
    */

    // Initialize todos from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    /*
    --------------------------------------------------------------------------------
     EXERCISE 11.1: CREATE - Add New Todo
    --------------------------------------------------------------------------------
     Buat function dengan nama: addTodo()
     
     Function ini harus:
     - Ambil value dari input dengan id "todoInput"
     - Buat todo object baru dengan struktur:
       { id: Date.now(), title: string, completed: false }
     - Push ke array todos
     - Save ke localStorage dengan key 'todos'
     - Panggil renderTodos() untuk render ulang
     - Clear input field

     Expected Result:
     Todo baru muncul di list
    --------------------------------------------------------------------------------
    */
    
    // Write your code here


    /*
    --------------------------------------------------------------------------------
     EXERCISE 11.2: READ - Render All Todos
    --------------------------------------------------------------------------------
     Buat function dengan nama: renderTodos()
     
     Function ini harus:
     - Loop semua todos
     - Buat HTML untuk setiap todo dengan button complete & delete
     - Tampilkan di element dengan id "todoList"
     - Panggil updateStats() di akhir
     - Jika todos kosong, tampilkan empty state

     Expected Result:
     Semua todos ter-render dengan button complete & delete
    --------------------------------------------------------------------------------
    */
    
    // Write your code here


    /*
    --------------------------------------------------------------------------------
     EXERCISE 11.3: UPDATE - Toggle Complete Status
    --------------------------------------------------------------------------------
     Buat function dengan nama: toggleComplete(id)
     
     Function ini harus:
     - Cari todo berdasarkan id
     - Toggle completed status (true ↔ false)
     - Save ke localStorage
     - Panggil renderTodos() untuk render ulang

     Expected Result:
     Todo berubah jadi strikethrough atau sebaliknya
    --------------------------------------------------------------------------------
    */
    
    // Write your code here


    /*
    --------------------------------------------------------------------------------
     EXERCISE 11.4: DELETE - Remove Todo
    --------------------------------------------------------------------------------
     Buat function dengan nama: deleteTodo(id)
     
     Function ini harus:
     - Filter todos, exclude yang id-nya match
     - Save ke localStorage
     - Panggil renderTodos() untuk render ulang

     Expected Result:
     Todo hilang dari list
    --------------------------------------------------------------------------------
    */
    
    // Write your code here


    /*
    --------------------------------------------------------------------------------
     EXERCISE 11.5: Utility - Update Stats
    --------------------------------------------------------------------------------
     Buat function dengan nama: updateStats()
     
     Function ini harus menampilkan di element id "stats":
     - Total todos
     - Completed todos
     - Remaining todos

     Expected Result:
     "Total: 5 | Completed: 2 | Remaining: 3"
    --------------------------------------------------------------------------------
    */
    
    // Write your code here


    /*
    ================================================================================
     BONUS CHALLENGE 11: Advanced Features
    ================================================================================
     Tambahkan fitur-fitur berikut:
     
     1. Edit todo (double click pada todo untuk edit)
     2. Clear all completed todos (button baru)
     3. Filter todos: All / Active / Completed
     4. Search/filter todos berdasarkan keyword
     5. Mark all as complete/incomplete
     
     Silakan berkreasi dengan UI dan functionality!
    ================================================================================
    */


    // Initialize app - panggil renderTodos() saat halaman load
    // Write your code here
  </script>
</body>
</html>
`
};

// Generate all files
Object.entries(exercises).forEach(([filename, content]) => {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`✅ Created: ${filename}`);
});

console.log('\n🎉 All exercise files generated successfully!');
console.log('\n📁 Generated files:');
console.log('   - 02-operators.js');
console.log('   - 03-control-flow.js');
console.log('   - 04-looping.js');
console.log('   - 05-functions.js');
console.log('   - 06-arrays.js');
console.log('   - 07-objects.js');
console.log('   - 08-dom.js');
console.log('   - 09-async-js.js');
console.log('   - 10-api-fetch.js');
console.log('   - 11-crud-browser.html');
console.log('\n🚀 Happy coding!');