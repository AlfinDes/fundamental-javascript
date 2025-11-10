let bakso = "15000"; // string
let esteh = 3000; //number 
let diskon = "1000"; //string 

let total = Number (bakso) + Number (esteh) - Number (diskon);

console.log(`total yg harus dibayar : Rp${total} `);


let umur = 17;

if (umur >= 18 && umur <= 60) {
console.log (" Akses di izinkan ✅");
} else {
  console.log (" akses di tolak, usia tidak sesuai ❎");
}


let nilaiSiswa = "82";

let hasil = Number (nilaiSiswa);

if (nilaiSiswa >=85 && nilai <= 100) {
  console.log ("nilai : Grade A")
} else if ("nilaiSiswa >= 75 && < 84 "){
  console.log ("nilai : Grade B")
} else if ("nilaiSiswa >= 65 && < 74") {
  console.log ("nilai : Grade C")
} else if ("nilaiSiswa >= 60 && < 64") {
  console.log ("nilai : Grade D")
} 


let stok = 0;
let sedangPromo = true;

if (stok > 0 || (stok === 0 && sedangPromo)) {
  if (stok > 0) {
    console.log("Stok tersedia, segera beli");
  } else {
    console.log("Stok sedang kosong, tapi promo masih berlaku. Tunggu restock");
  }
} else {
  console.log("Stok habis, silakan cek kembali nanti.");
}
  

let totalBelanja = 300000;
let cekDiskon = 15;
let totalBayar;

if (totalBelanja >= 300000) {
    let diskon = (cekDiskon / 100) * totalBelanja;
    totalBayar = totalBelanja - diskon; 
    console.log("Diskon Anda: Rp" + diskon);
    console.log("Total yang harus dibayar: Rp" + totalBayar);
} else {
    console.log("Total yang harus dibayar: Rp" + totalBayar);
}

let siswa = [
    {
        nama: "tari",
        umur: 17,
        nilaiUjian: 65
    },
    {
        nama: "ilham",
        umur: 17,
        nilaiUjian: 70
    },
];

console.log(siswa)

function hitungTotal(belanja, diskon){
  return belanja - (belanja * diskon); 
} 

let hasildiskon = hitungTotal (200000,0.1);
console.log("total belanja:", hasildiskon)


const menu = [
  { nama: "ikan bakar", harga: 15000, jumlah: 1 },
  { nama: "ayam crispy", harga: 13000, jumlah: 2 },
  { nama: "nasi goreng", harga: 12000, jumlah: 1 }
];

menu.forEach (item => {
  console.log (`${item.nama}: Rp ${item.harga}`);
});

const daftarMenu = menu.map(item => item.nama);
console.log(daftarMenu);

const totalHarga = menu.reduce((total, item) => {
  return total + (item.harga * item.jumlah);
}, 0);

console.log(`Total Belanja: Rp ${totalHarga}`);

let nilai = [
    90,85,80,70,65
]
 let totalnilai = 0; 
let i = 0;

for (let i = 0; i < nilai.length; i++) {
  total = total + nilai[i]
  console.log(nilai[i]);
}


let rataRata = total / nilai.length;
console.log(rataRata);

if (rataRata >= 75) { 
   console.log("Selamat lulus ujian")
} else {
  console.log("Tidak lulus ujian")
  }




