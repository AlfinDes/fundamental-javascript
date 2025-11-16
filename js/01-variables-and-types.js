/* 
================================================================================
 TOPIC 1 — VARIABLES & TYPES (REAL CASE)
 For Beginners — String, Number, Boolean
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 1.1: Customer Greeting
--------------------------------------------------------------------------------
 Buat variabel nama pelanggan (string), 
 lalu tampilkan "Selamat datang, {namaPelanggan}!"

 Expected Output:
 "Selamat datang, John!"
--------------------------------------------------------------------------------
*/

// Write your code here
let costumerName = "John";
console.log ("Selamat Datang",costumerName)




/*
--------------------------------------------------------------------------------
 EXERCISE 1.2: Store Calculator
--------------------------------------------------------------------------------
 Sebuah toko menjual 1 roti harga 8000 dan 1 susu harga 5000.
 Buat variabel untuk dua harga itu (number),
 lalu hitung total belanja.

 Expected Output:
 Total: 13000
--------------------------------------------------------------------------------
*/

// Write your code here
let roti = 8000;
let susu = 5000;

let total = (roti) + (susu);
console.log(`Total: Rp${total}`)



/*
--------------------------------------------------------------------------------
 EXERCISE 1.3: Member Status Check
--------------------------------------------------------------------------------
 Buat variabel isMember (boolean) sebagai status member.
 Jika true, cetak "Anda mendapatkan diskon member".
 Jika false, cetak "Harga normal, bukan member".

 Hint: Gunakan if/else

 Expected Output (if true):
 "Anda mendapatkan diskon member"
--------------------------------------------------------------------------------
*/

// Write your code here
let isMember = "Member";

if (isMember){
    console.log("Anda mendaoatkan diskon member")
} else {
    console.log("Harga normal, bukan member")
}



/*
--------------------------------------------------------------------------------
 EXERCISE 1.4: Age Checker
--------------------------------------------------------------------------------
 Buat variabel umur (number).
 Tampilkan:
 - "Dewasa" jika umur >= 18
 - "Anak-anak" jika umur < 18

 Hint: Gunakan if/else

 Expected Output (umur 20):
 "Dewasa"
--------------------------------------------------------------------------------
*/

// Write your code here
let umur = 20;

if (umur >=18){
    console.log("Dewasa")
} else {
    console.log("Anak-anak")
}




/*
--------------------------------------------------------------------------------
 EXERCISE 1.5: Movie Info
--------------------------------------------------------------------------------
 Buat variabel judulFilm (string) dan durasiMenit (number).
 Tampilkan kalimat:
 "Film {judulFilm} berdurasi {durasiMenit} menit."

 Expected Output:
 "Film Avengers berdurasi 120 menit."
--------------------------------------------------------------------------------
*/

// Write your code here
let judulFilm = "Film avengers";
let durasiMenit = 120;

console.log(`${judulFilm} berdurasi ${durasiMenit}menit`);



/*
================================================================================
 BONUS CHALLENGE 1: Cashier Program
================================================================================
 Buat program kasir sederhana dengan ketentuan:
 - Nama pembeli: "Sarah"
 - Beli 2 roti (@8000) dan 1 susu (@5000)
 - Status member: true (dapat diskon 10%)

 Tampilkan output seperti ini:
 "Pembeli: Sarah"
 "Total: Rp 21000"
 "Diskon: Rp 2100"
 "Total Bayar: Rp 18900"

 Hint: 
 - Hitung total dulu (2 * 8000 + 1 * 5000)
 - Jika member true, hitung diskon (total * 0.1)
 - Total bayar = total - diskon
================================================================================
*/

// Write your code here
let pembeli = "Sarah";
let roti1 = 8000;
let qty = 2;
let susu2 = 5000;
let isMember1 = true;
let cekDiskon = 0.1;
let potongan = 0;

let totalBelanja1 = (roti1 * qty) + susu2;

if (isMember1){
  potongan = totalBelanja1 * cekDiskon;
  totalBayar1 = totalBelanja1 - potongan;
  
} else {
    console.log("Bukan member")
} 
console.log(`Pembeli: ${pembeli}`)
   console.log(`total: ${totalBelanja1}`)
   console.log("Diskon: Rp", potongan)
   console.log("Total bayar: Rp", totalBayar1)