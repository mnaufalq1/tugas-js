//Soal 1

for (let i = 1; i <= 10; i++ ) {
    console.log('Antrean ke'+ i);
}


//Soal 2

for (let i = 10; i >= 1; i-- ) {
    console.log('Antrean ke'+ i);
}


//Soal 3

for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        continue

    }
    console.log(number);
}


//Soal 4

for (let number = 1; number <= 20; number++) {
    if (number % 2 !== 0) {
        continue

    }
    console.log(number);
}


//Soal 5

let number1 = Number(5);
for (let number = 1; number <= 10; number ++) {
   let hasil = number1 * number;
   console.log(`${number1} x ${number} = ${hasil}`)
}


//Soal 6

let num1 = Number(5);
for (let numberr = 1; numberr <= 50; numberr ++) {
   let hasill = num1 * numberr;
   console.log(`${hasill}`)
}


//Soal 7

let n1 = Number(2);
for (let nbr = 1; nbr <= 10; nbr ++) {
   let hasiL = n1 ** nbr;
   console.log(`${n1} Kuadrat ${nbr} = ${hasiL}`)
}


//Soal 8

let bintang = '';
for (let str = '0'; str < 10; str ++) {
    bintang += "*";
    console.log(bintang)
}


//Soal 9

for (let j = 100; j >= 1; j-= 10 ) {
    console.log(j);
}


//Soal 10

for (let nr = 1; nr <= 20; nr++) {
    if (nr % 2 !== 0) {
        continue

    }
    console.log(`${nr} adalah genap`);
} 
for (let vlue = 1; vlue <= 20; vlue++) {
    if (vlue % 2 === 0) {
        continue

    }
    console.log(`${vlue} adalah ganjil`);
}


//Soal 11

let makanan = ["Nasi Goreng", "Sate", "Bakso", "Rendang", "Gado-Gado"];
for (let i = 0; i < makanan.length; i++) {
    console.log(i + 1 + ".", makanan[i]);
}


//Soal 12

let nilai = [12, 45, 7, 23, 89, 34];
let terbesar = Math.max(...nilai);
console.log(`${terbesar} adalah angka terbesar`)


//Soal 13

let skor = [55, 19, 82, 8, 43, 26];
let terkecil = Math.min(...skor);
console.log(`${terkecil} adalah nilai terkecil`)


//Soal 14

let kumpulanAngka = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < kumpulanAngka.length; i++) {
    total += kumpulanAngka[i];
}
let rataRata = total / kumpulanAngka.length;
console.log(`${rataRata} adalah nilai rata rata`)


//Soal 15

let acak = [7, 2, 9, 7, 5, 7, 1, 3, 7];
let saringan = acak.filter(n => n === 7);
let bersih = saringan.length;
console.log(bersih)


//Soal 16

let huruf = ["A", "B", "C", "D", "E"];
let hurufTebalik = huruf.toReversed()
console.log(hurufTebalik)


//Soal 17

let arrayLama = [100, 200, 300, 400];
let arrayBaru = [...arrayLama];
console.log(arrayBaru)


//Soal 18

let data = [4, 15, 8, 23, 2, 11, 9, 18];
for (let i = 0; i < data.length; i++) {
    if (data[i] >= 10) {
        console.log(data[i]);
        
    }
}



//Soal 19

let harga = [10000, 25000, 50000, 12000];
let tarifPajak = 0.10;
let hargaPajak = harga.map(nilai => nilai + (nilai * tarifPajak));
console.log(hargaPajak)


//Soal 20

let buah = ["Jeruk", "Mangga", "Apel", "Pisang", "Anggur"];
let target = 'Apel';
if (buah.includes(target)) {
    console.log( 'sudah ketemu!')
} else {
    console.log('maaf tidak ada!')
}
