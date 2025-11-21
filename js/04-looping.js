/* 
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
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < list.length; i++){
  console.log(list[i])
}

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
let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0)
  console.log(i)
}




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
let time = 10;

for ( let i = 10; i >= 1; i--){
  console.log(i)
}

console.log("Start")



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
let numberRahasia = 7;
let tebakan = 1;
let hitung = 0;

while (tebakan <= 7){
  tebakan++;
  hitung++;
}

console.log("ketemu butuh" + hitung + "kali tebakan")

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
let attempts = ["wrong1", "wrong2", "secret123"]
let index = 0;

do {
  let pass = attempts[index]
  
  if (pass !== "secret123"){
    console.log("Password salah:" + "coba lagi")
  } else {
    console.log("Password benar:" + "Akses diberikan")
  }

  index++
} while (index < attempts.length)



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
let num = 5;

let table = `perkalian ${num}\n`;

for (let i = 1; i<= 10; i++) {
  table += `${num} X ${i} = ${num * i}\n`;
}

console.log(table)