/* 
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
let fruits = ["Apel", "Mangga", "Jeruk", "Pisang", "Anggur"];

console.log(fruits[2])



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
let item = [];

item.push("Sepatu", "Tas", "Topi");
item.pop();

console.log(item);



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
let prices = [10000, 25000, 15000, 30000];

prices.forEach(function(prices){
  console.log("Harga: Rp" + prices )
});



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
let numbers = [5, 12, 8, 130, 44];

let result = numbers.find(n => n > 10);

console.log(result);



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
let grades = [75, 82, 60, 91, 55, 88];

let results = grades.filter(n=> n > 70);

console.log(results);



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
 let cart = [
   { name: "Buku", prices: 50000, qty: 2 },
   { name: "Pulpen", prices: 5000, qty: 5 },
   { name: "Tas", prices: 150000, qty: 1 }
 ];

let total = cart.reduce((accumulator, currentItem) => {
    let itemTotal = currentItem.prices * currentItem.qty;
    return accumulator + itemTotal;
}, 0);

console.log(`Total: Rp ${total}`);