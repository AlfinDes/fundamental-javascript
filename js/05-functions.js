/* 
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
function greet(nama) {
   console.log ("Hello " + nama);
}

greet("World");

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
function greetUser(nickName){
   console.log("Hello " + nickName);
}

greetUser("Alice");

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
function hitungLuasPersegiPanjang (panjang, luas){
  return panjang * luas;
}

let hasil = hitungLuasPersegiPanjang(5, 3);
console.log(hasil)



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
const kelilingLingkaran = (radius) => {
  const pi = 3.14;
  return 2 * pi * radius; 
}
console.log(kelilingLingkaran(7))



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
let harga = 100000;
let persenDiskon = 20;
function hitungDiskon(harga, persenDiskon){
  return harga - (harga * persenDiskon / 100);
}

let totalHarga = hitungDiskon (100000, 20);
console.log(totalHarga)

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
function celsiusToFahrenheit(celsius){
  var fahrenheit = (celsius * 9/5) + 32;
  console.log("celsiusToFahrenheit", fahrenheit)
}

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9
  console.log("fahrenheitToCelsius", celsius)
}

celsiusToFahrenheit(100)
fahrenheitToCelsius(212)