/* 
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
let a = 15;
let b = 7;

let total = a + b;
console.log(total)

let pengurangan = a - b;
console.log(pengurangan)

let perkalian = a * b;
console.log(perkalian)

let pembagian = a / b;
console.log(pembagian)

let sisa = a % b;
console.log (sisa)





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
let produkA = 500000;
let produkB = 45000;

console.log(produkA > produkB)
console.log(produkA >= produkB)
console.log(produkB <= produkA)




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
let username = "admin";
let password = "12345";
let usernameFromDB = "admin";
let passwordFromDB = "12345";

if (usernameFromDB === username && password === passwordFromDB){
  console.log("Login Berhasil")
} else {
  console.log("Login Gagal")
}


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
let totalBelanja = 80000;
let isMember = true;

function cekEligibilityDiskon(totalBelanja, isMember){
  if (totalBelanja >= 100000 || isMember) {
    return "Mendapat diskon";
  } else {
    return "Tidak dapat diskon"
  }
}

let hasil = cekEligibilityDiskon(totalBelanja, isMember);

console.log("TotalBelanja:", totalBelanja)
console.log("Is Member:", isMember)
console.log(hasil)

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
let stockProduk = 5;
let status = stockProduk > 0 ? "Tersedia" : "Habis";

console.log("stok = ", + stockProduk, status)

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
let nilai = 85;
let grade = "";

if (nilai >= 90 && nilai <= 100) {
  grade = "A"
} else if (nilai >=80) {
  grade = "B"
} else if (nilai >= 70) {
  grade = "C"
} else if (nilai >= 60) {
  grade = "D"
} else if (nilai < 60 ) {
  grade = "E"
} else {
  console.log("Nilai tidak valid")
}

console.log(`Nilai: ${nilai}, Grade: ${grade}`)