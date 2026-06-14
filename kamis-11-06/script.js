//Tugas 1

let nama = 'Naufal';
let umur = 20;
let tinggiBadan = 174;
let statusProgrammer = true;
let hobi = ['membaca', 'jalan jalan', 'bersepeda'];
console.log("Nama : ", nama); // Output: Nama : Naufal
console.log("Umur : ", umur); // Output: Umur : 20
console.log("Tinggi Badan : ", tinggiBadan); // Output: Tinggi Badan : 174
console.log("Status Programmer : ", statusProgrammer); // Output: Status Programmer : true
console.log("Hobi : ", hobi); // Output: Hobi : ['membaca', 'jalan jalan', 'bersepeda']

//Tugas 2

let nama1 = 'Budi'; // Nama
let alamat1 = 'Bandung'; // Alamat
let pekerjaan1 = 'Programmer'; // Pekerjaan
console.log("Nama : ", nama1); // Output: Nama : Budi
console.log("Alamat : ", alamat1); // Output: Alamat : Bandung
console.log("Pekerjaan : ", pekerjaan1); // Output: Pekerjaan : Programmer

//Tugas 3

let namaPembeli = 'Ani'; // Deklarasi variabel dengan nilai awal

let hargaProduk = 80000;
console.log("Harga Produk Awal : ", hargaProduk); // Output: Harga Produk Awal : 80000

hargaProduk = 70000; // Harga produk setelah diskon
console.log("Harga Produk Setelah Diskon : ", hargaProduk); // Output: Harga Produk Setelah Diskon : 70000

let jumlahProduk = 3;
let totalHarga = hargaProduk * jumlahProduk;
console.log('namaPembeli : ', namaPembeli); // Output: namaPembeli : Ani
console.log("Total Harga : ", totalHarga); // Output: Total Harga : 210000



//Tugas 4

let jumlahPesanan = 10 + 5; // Aritmatika penjumlahan
console.log("Jumlah Pesanan : ", jumlahPesanan);
let pembukaan = 'Hello' + "World!"; // Penggabungan string
console.log("Pembukaan : ", pembukaan);
let sisaBensin = 30 > 20; // Perbandingan
console.log("Sisa Bensin : ", sisaBensin);
let lampuMenyala = true && false; // Logika AND
console.log("Lampu Menyala : ", lampuMenyala);

//Tugas 5

//Aritmatika
let jumlahPengunjungMingguan = 10 + 12 * 7 - 3; // Aritmatika penjumlahan
console.log("Jumlah Pengunjung : ", jumlahPengunjungMingguan);
let jumlahStokProduk = 50 / 5; // Aritmatika pembagian
console.log("Jumlah Stok Produk : ", jumlahStokProduk);
let sisaStokProduk = 50 % 5; // Aritmatika modulus
console.log("Sisa Stok Produk : ", sisaStokProduk);

//Assignment
let jumlahPenjualan = 100;
jumlahPenjualan += 20; // Penambahan dengan assignment
console.log("Jumlah Penjualan : ", jumlahPenjualan);
jumlahPenjualan -= 10; // Pengurangan dengan assignment
console.log("Jumlah Penjualan : ", jumlahPenjualan);
jumlahPenjualan *= 2; // Perkalian dengan assignment
console.log("Jumlah Penjualan : ", jumlahPenjualan);
jumlahPenjualan /= 4; // Pembagian dengan assignment
console.log("Jumlah Penjualan : ", jumlahPenjualan);

//Comparison
let stokProduk = 20;
let permintaanProduk = 15;
let produkTersedia = stokProduk < permintaanProduk; // Perbandingan stok dengan permintaan
console.log("Produk Tersedia : ", produkTersedia);
let hargaProduk1 = 50000;
let hargaProduk2 = 75000;
let produkLebihMahal = hargaProduk1 > hargaProduk2; // Perbandingan harga produk
console.log("Produk Lebih Mahal : ", produkLebihMahal);
let namaProduk1 = "Laptop";
let namaProduk2 = "Smartphone";
let namaSama = namaProduk1 === namaProduk2; // Perbandingan nama produk
console.log("Nama Produk Sama : ", namaSama);
let stokProduk1 = 10;
let stokProduk2 = 10;
let stokSama = stokProduk1 == stokProduk2; // Perbandingan stok produk
console.log("Stok Produk Sama : ", stokSama);
let sisaStok = 5;
let stokHabis = sisaStok != 0; // Perbandingan sisa stok dengan nol
console.log("Stok Habis : ", stokHabis);

//Logical
let pelangganDatang = true;
let stokTersedia = true;
let bisaMembeli = pelangganDatang && stokTersedia; // Logika AND untuk menentukan apakah pelanggan bisa membeli
console.log("Bisa Membeli : ", bisaMembeli);
let pelangganDatang2 = false;
let stokTersedia2 = true;
let bisaMembeli2 = pelangganDatang2 || stokTersedia2; // Logika OR untuk menentukan apakah pelanggan bisa membeli
console.log("Bisa Membeli : ", bisaMembeli2);
let pelangganDatang3 = false;
let stokTersedia3 = false;
let bisaMembeli3 = !(pelangganDatang3 || stokTersedia3); // Logika NOT untuk menentukan apakah pelanggan tidak bisa membeli
console.log("Bisa Membeli : ", bisaMembeli3);

//Tugas 6
const angkaPertama = 10; //Mendeklarasikan variabel angkaPertama dengan nilai 10
const angkaKedua = 25; //Mendeklarasikan variabel angkaKedua dengan nilai 25
const hasilPenjumlahan = angkaPertama + angkaKedua; //Penjumlahkan angkaPertama dan angkaKedua.
const hasilPengurangan = angkaPertama - angkaKedua; //Pengurangan antara angkaPertama dan angkaKedua.
const hasilPerkalian = angkaPertama * angkaKedua; //Perkalian antara angkaPertama dan angkaKedua.
const hasilPembagian = angkaPertama / angkaKedua; //Pembagian antara angkaPertama dan angkaKedua.
console.log("Hasil Penjumlahan : ", hasilPenjumlahan);
console.log("Hasil Pengurangan : ", hasilPengurangan);
console.log("Hasil Perkalian : ", hasilPerkalian);
console.log("Hasil Pembagian : ", hasilPembagian);

 

