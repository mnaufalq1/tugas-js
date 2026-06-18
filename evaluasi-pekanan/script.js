//Soal 1

let angKa = 75;
let stRing = '75';
let booLean = true;
console.log(typeof angKa); //Output: number
console.log(typeof stRing); //Output: string
console.log(typeof booLean); //Output: boolean


//Soal 2
let a = 10;
let b = '5';
console.log(a + b); //Output: 105
//kenapa bisa menghasilkan output 105? Karena operator + dalam JavaScript dapat 
//digunakan untuk penjumlahan angka maupun penggabungan string.
//Ketika salah satu operand adalah string, JavaScript akan mengkonversi operand lainnya menjadi string dan melakukan penggabungan.


//Soal 3
let angka1 = 12;
let angka2 = 3;
let hasil1 = angka1 + angka2;
let hasil2 = angka1 - angka2;
let hasil3 = angka1 * angka2;
let hasil4 = angka1 / angka2;
console.log(hasil1); //Output: 15
console.log(hasil2); //Output: 9
console.log(hasil3); //Output: 36
console.log(hasil4); //Output: 4


//Soal 4
let x = 8;
x += 4;
x *= 2;
x -= 6;
console.log(x); //Output: 18
//kenapa bisa menghasilkan output 18? Karena operator penugasan seperti +=, *=, dan -= 
//akan mengubah nilai variabel x sesuai dengan operasi yang dilakukan. 


//Soal 5
let numberr = 22; //menggantinya di parseFloat ini dan 22 disni adalah genap positif dan jika diganti maka akan berbeda.
if (numberr % 2 === 0) {
    if (numberr > 0) {
        console.log('genap positif');
    } else if (numberr < 0) {
        console.log('genap negatif');
    } else {
        console.log('nol adalah netral(genap)');
    }
} else {
    if (numberr > 0) {
        console.log('ganjil positif');
    } else if (numberr < 0) {
        console.log('ganjil negatif');
    } else {
        console.log('nol adalah netral(genap)');
    }
}



//Soal 6
let nilai = 82;
if (nilai >= 90 && nilai <= 100) {
    console.log('A');
} else if (nilai >= 80 && nilai < 90) {
    console.log('B');
} else if (nilai >= 70 && nilai < 80) {
    console.log('C');
} else if (nilai >= 60 && nilai < 70) {
    console.log('D');
} else if (nilai >= 0 && nilai < 60) {
    console.log('E');
} else {
    console.log('Nilai tidak valid');
} //Output: B


//Soal 7
function angkaTerbesar(a, b, c) {
    let terbesar = a;
    if (b > terbesar) {
        terbesar = b;
    }
    if (c > terbesar) {
        terbesar = c;
    }
    return terbesar;
}
let hasil = angkaTerbesar(20, 35, 15);
console.log(hasil); //Output: 35


//Soal 8
let na = 5;
let nb = 10;
let nc = (na > 3 && nb < 15) || na === 8;
console.log(nc); //Output: true


//Soal 9
function cekKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let tahun = 2001;
let hasilKabisat = cekKabisat(tahun);
console.log(hasilKabisat); //Output: false

 
//Soal 10
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


//Soal 11
let x1 = 4;
let y1 = x1++ + ++x1;
console.log(y1); //Output: 10


//Soal 12
let vle1 = 0;
for (i = 1; i <= 100; i += 2){ //jika incrementnya angka 1 maka akan menampilkan angka normal yang berurutan dari 1,2,3,4.....
   vle1 += i;  
}
console.log(vle1);
 
//Soal 13
let bintang = '';
for (let str = '0'; str < 5; str++) {
    bintang += "*";
    console.log(bintang)
}


//Soal 14
let anka = [12, 5, 18, 7, 21, 30, 2];
for (let i = 0; i < anka.length; i++) {
    if (anka[i] >= 10) {
        console.log(anka[i]);
    }
}


//Soal 15
function cekPrima(angkA) {
    if (angkA <= 1) return false; 

    for (let i = 2; i <= Math.sqrt(angkA); i++) {
        if (angkA % i === 0) {
            return false;
        }
    }
    return true; 
}
let totalPrima = 0;
let daftarAngkaPrima = [];

for (let i = 1; i <= 100; i++) {
    if (cekPrima(i)) {
        daftarAngkaPrima.push(i); 
        totalPrima++;             
    }
}
console.log(daftarAngkaPrima.join(", "));

//Soal 16
let aA = 2;
let bB = 3;
let cC = 4;
if (aA < bB) {
    if (bB > cC) {
        console.log("A");
    } else {
        console.log("B");
    }
} else {
    console.log("C");
} //Output: B



//Soal 17
let userName = 'admin@admin.com';
let passWord = 'admin123';
if (userName === 'admin@admin.com' && passWord === 'admin123'){
    console.log('Silahkan masuk!')
} else {
    console.log('Username dan password tidak sesuai!')
}


//Soal 18
let bulan = 3;
switch (bulan) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('jumlahHari = 31');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('jumlahHari = 30');
        break;
    case 2:
        console.log('jumlahHari = 28');
    default:
        console.log('tidak valid');  
}


//Soal 19
let numa = Number(2);
for (let num = 0; num <= 6; num++) {
    let numb = numa ** num;
    console.log(`${numb}`);
}


//Soal 20
let total = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        total += i;
    } else {
        total -= i;
    }
}
console.log(total); //Output : 5
//penjelasan terkait cara kerja kode diatas :
//total diatas belum diatur, kemudian darimana bisa mendapatkan angka tersebut? dari looping yang di bawahnya
//dan di looping didapatlah 10 angka yaitu dari 1 sampai 10
//kemudian masuk ke (if) jika (i) jika dibagi rata dengan 2 hasilnya 0 atau genap maka yang genap dari 1 sampai 10 ada 5 jadi, hasilnya adalah 5 dan hasil total dari (total+= i) adalah 0+5= 5.
//demikian juga jika di (else) hasilnya juga 5 jadi jika dihitung dari (total-= i) adalah 0 - 5 tapi kenapa kok bisa hasilnya 5 bukan 0?
//karena jika keduanya digabung maka akan menjadi seperti berikut : yang (if) = 2,4,6,8,10 dan yang (else) adalah = -1,-3,-5,-7,-9
//dan perhitungannya adaalah sebagai berikut : -1 + 2, -3 + 4, -5 + 6, -7 + 8, -9 + 10. maka hasil semuanya adalah 1 semua, dan jika dijumlahkan maka akan menjadi 5.

