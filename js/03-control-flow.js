/* 
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
let cuaca = "panas";
let suhu = 35; 

if (cuaca === "panas" && suhu >= 35 ) {
    console.log ( "suhu =", suhu, cuaca)
} else {
    console.log ("sejuk")
}


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
let umur = 25;

if (umur >= 0 && umur <= 5){
    console.log("Balita")
} else if (umur >= 6 && umur <= 12){
    console.log("Anak-anak")
} else if (umur >= 13 && umur <= 17){
    console.log("Remaja")
} else if (umur >= 18 && umur <= 60){
    console.log("Dewasa")
} else if (umur > 60){
    console.log("Lansia")
}


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
let umur1 = 20;
let punyaKTP = true;

function cekEligibilityTiket(umur1, punyaKTP){
    if (umur1 >= 17 && punyaKTP) {
        return "Boleh nonton film dewasa"
    } else if (umur1 < 17){
        return "Hanya boleh film anak-anak"
    } else {
        return "Bawa KTP dulu"
    }
}
let hasil = cekEligibilityTiket(umur1, punyaKTP)

console.log("umur:", umur1, "Punya KTP", punyaKTP, hasil)


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
let hari = ""
let day = 3

switch (day) {
    case 1:
        hari = "Senin"
        break;
    case 2:
        hari = "Selasa"
        break;
    case 3:
        hari = "Rabu"
        break;
    case 4:
        hari = "Kamis"
        break;
    case 5:
        hari = "Jum'at"
        break;
    case 6:
        hari = "Sabtu"
        break;
    case 7:
        hari = "Minggu"
        break;
    default:
        hari = "Hari tidak valid"
} 

console.log("Day:", day, hari)


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
let payment = ["cash", "debit", "qris", "ewallet"];

function processPayment(method){
switch (method) {
    case "cash":
        console.log("Bayar di kasir"); break;
    case "debit":
        console.log("Gesek kartu di mesin EDC"); break;
    case "qris":
        console.log("Scan QR code"); break;
    case "ewallet":
        console.log("Buka aplikasi e-wallet"); break;
    default:
        console.log("Metode tidak tersedia");        
}
}
console.log("method: qris" )
processPayment(`qris`)

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
let saldoAwal = 1000000;
let nominal = 300000;

function tarikTunai(nominal){
  console.log("Penarikan Tunai")
}
if (nominal > saldoAwal){
  console.log("Saldo tidak cukup")
  console.log("Saldo anda: Rp" + saldoAwal.toLocaleString('id-ID'))
  console.log("Nominal penarikan: Rp" + nominal.toLocaleString('id-ID'))
}

if (nominal % 50000 !== 0){
  console.log("nominal harus kelipatan Rp 50.000")
  console.log("nominal yang anda masukan: Rp" + nominal.toLocaleString('id-ID'))
  
}

if (nominal <= 0){
  console.log("nominal tidak valid")
}
let saldo = saldoAwal;
let  sisa = saldoAwal -= nominal;

console.log("penarikan: Rp" + nominal)
console.log("Sisa saldo: Rp" + sisa)

