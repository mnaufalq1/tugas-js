//Bilangan Positif, Negatif, atau Nol

let numUser = 2;
if (numUser > 1) {
    console.log('Bilangan Positif');
} else if (numUser < 1) {
    console.log('Bilangan Negatif');
} else {
    console.log('Nol')
}

//Bilangan Genap atau Ganjil
let number = prompt('Masukkan angka :');
if (number % 2 ===0) {
    alert('Bilangan Genap');
} else {
    alert('Bilangan Ganjil');
}

//Lulus atau Tidak Lulus
let nilai = prompt('Masukkan Nilai :');
if (nilai > 75) {
    alert('Dinyatakan Lulus!');
} else {
    alert('Tidak Lulus!');
}

//Hak Memiliki SIM
let umur = prompt('Masukkan Umur Anda!');
if (umur > 17) {
    alert('Selamat! Anda boleh membuat SIM!');
} else {
    alert('Belum Cukup Umur!');
}

//Perbandingan 2 Angka
let angka1 = prompt('masukkan angka 1!');
let angka2 = prompt('masukkan angka 2!');
if (angka1 > angka2) {
    alert(`Nilai ${angka1} Lebih Besar!`);
} else {
    alert(`Nilai ${angka2} Lebih Besar!`);
}

//Perbandingan 3 Angka
let num1 = prompt('masukkan angka pertama!');
let num2 = prompt('masukkan angka kedua!');
let num3 = prompt('masukkan angka ketiga!');
let terBesar = Math.max(num1, num2, num3)
alert(`${terBesar} adalah angka terbesar!`);

//Kategori Umur(anak-anak, remaja, dewasa, lansia)
let years = prompt('masukkan umurmu!');
let kategori;
if (years <= 12) {
    alert("anak-anak");
} else if (years <= 17) {
    alert('remaja');
} else if (years <= 50) {
    alert("dewasa");
} else {
    alert("lansia");
}

//Kalkulator Sederhana
let value1 = prompt('masukkan angka!');
let value2 = prompt('masukkan angka kedua!');
let valueKerja = prompt('Masukkan Operator Berikut!\n +, -, *, /. %')
let kerja;
let valueHasil1 = parseFloat(value1);
let valueHasil2 = parseFloat(value2);
switch (valueKerja) {
    case '+':
        kerja = valueHasil1 + valueHasil2;
        break;
    case '-':
        kerja = valueHasil1 - valueHasil2;
        break;
    case '*':
        kerja = valueHasil1 * valueHasil2;
        break;
    case '/':
        kerja = valueHasil1 / valueHasil2;
        break;
    case '%':
        kerja = valueHasil1 % valueHasil2;
        break;
    default:
        alert('Input tidak valid!')
}
alert(`Hasilnya : ${value1} ${valueKerja} ${value2} = ${kerja}`)

// //Sistem Akses Admin
// let userName = prompt('masukkan usename');
// let password = prompt('masukkan password');
// let role = prompt('sebutkan role');
