//Soal 1
console.log('Soal 1');

let antrian = ["Andi", "Budi", "Citra", "Dina"];
antrian.shift();
antrian.pop()
antrian.push('Eka');
let sisaAntrian = antrian.unshift('Fajar');
console.log(antrian);
console.log(sisaAntrian);


//Soal 2
console.log('Soal 2');

let barang = ["Mouse", "Keyboard", "Monitor", "Printer"];
barang.splice(2, 1, 'Laptop', "Scanner");
console.log(barang);



//Soal 3
console.log("Soal 3");

let siswa = ["Aisyah", "Bagus", "Dewi", "Fikri", "Galih"];
console.log(siswa.indexOf('Dewi')); //Output : 2
console.log(siswa.indexOf('Rahma')); //Output : -1
console.log(siswa.includes('Galih')); //Output : true
console.log(siswa.includes('Zidan')); //Output : false



//Soal 4
console.log('Soal 4');

let angka = [5, 10, 15, 20, 25, 30, 35, 40];
console.log(angka.slice(2, 6));



//Soal 5
console.log('Soal 5');

let pegawai = [
    "Anton",
    "Beni",
    "Caca",
    "Dedi",
    "Eka",
    "Farah"
];
pegawai.splice(1,1, 'Dedi');
pegawai.splice(3,1);
pegawai.splice(4,1, 'Gilang');
console.log(pegawai);



//Soal 6
console.log('Soal 6');

console.log(['Z', 'B', "D"]);
console.log(3);


//Soal 7

let syaratMasuk = prompt('masukkan username');
let pengguna = ["admin","operator","kasir","manager"];

if (pengguna.includes(syaratMasuk)) {
    alert('User Ditemukan');
    alert(pengguna.indexOf(syaratMasuk))
} else {
    alert('User Tidak Ditemukan');
}




//Soal 8
console.log('Soal 8');

let arr = [10, 20, 30, 40, 50, 60];
arr.unshift(5);
arr.pop();
arr.splice(3,1, 35)
console.log(arr);


//Soal 9
console.log('Soal 9');

let kota = [
 "Jakarta",
 "Bandung",
 "Surabaya",
 "Medan",
 "Makassar"
];
kota.splice(1,1, 'Surabaya');
kota.splice(2,1, 'Yogyakarta')
let sisaKota = kota.unshift('Bali');
kota.pop();
console.log(kota);
console.log(sisaKota);
console.log(kota.indexOf('Yogyakarta'));




//Soal 10
console.log('Soal 10');

let data = [
 "merah",
 "biru",
 "hijau",
 "kuning",
 "ungu",
 "hitam"
];
data.unshift('putih');
data.splice(2,1,'hijau');
data.splice(3,1, 'orange');
data.pop()
console.log(data);



//Soal Bonus
console.log('Bonus');

let data1 = ["A","B","C","D","E","F","G"];
data1.unshift('G');
data1.splice(2,1, 'X');
data1.splice(5,1, "Y");
data1.pop();
console.log(data1);
