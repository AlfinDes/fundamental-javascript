/* 
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
console.log("Hello");
setTimeout(() => console.log("World"), 2000); 

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
let number = 0;
let interval = setInterval (() => {
  number++;
  console.log(number) // setInterval menjalankan kode berulang
  
  if (number === 3) {
    clearInterval(interval)
    console.log("berhenti") //clear interval kode berhenti
  }
}, 1000)


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
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success")
  }, 1000) // 1 detik
})

myPromise
 .then((hasil) => {
  console.log(hasil) // then berhasil
})
 .catch((error) => {
  console.log(error) // catch gagal
})

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
const num = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve("Number is greater than 5")
    } else {
      reject("Number is too small")
    }
  })
}

num(7)
 .then((berhasil) => {
  console.log(berhasil)
})
 .catch((error) => {
  console.log(error)
})



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
const yourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success")
  }, 1000) // 1 detik
})
async function getData() {
  try {
   const result = await yourPromise
   console.log(result)
 } catch (error) {
   console.log("Gagal", error)
 }
}
getData()



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
const getUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "John", age: 25, city: "Jakarta" }
      resolve(data)
    },2000) // 2 detik
  })
}


async function fetchUserData() {
  console.log("Loading...") //loading dulu setelah 2 detik
  const data = await getUserData()
  console.log(`Name: ${data.name}, Age: ${data.age}, City: ${data.city}`) //menampilkan format data
}

fetchUserData()