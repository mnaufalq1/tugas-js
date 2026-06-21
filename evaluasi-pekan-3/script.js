//Soal 1

let s1 = [12, 3, 7, 20, 15, 35, 24, 6, 9, 17, 18, 12, 5, 29, 2, 22, 42, 39, 33, 41];
let hsl = 0;
for (let i = 0; i < s1.length; i++) {
    if (i % 2 !== 0) {

        if (s1[i] % 2 === 0) {
            hsl += s1[i]
            console.log(s1[i]);
        }
    }
}
console.log('total adalah : ' + hsl);



//Soal 2

let data = [12, 5, 18, 5, 7, 12, 20, 18, 25];
let dh = [];
for (let i = 0; i < data.length; i++) {
    if (!dh.includes(data[i])) {
        dh.push(data[i])

    }

}
console.log(dh);



//Soal 3
let s2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s3 = [];
for (let i = s2.length - 1; i > -1; i--) {
    s3.push(s2[i])
}
console.log(s3);


//Soal 4

let nilai = [75, 90, 45, 88, 60, 92, 77]; //Terdapat method yang tidak ada di madul yaitu .filter
let nlai = nilai.filter(function (nil) {
    return nil > 70;
})
let nila = 0;
for (let i = 0; i < nlai.length; i++) {
    nila += nlai[i]
}
let rtRt = nila / nlai.length;
console.log(rtRt);


//Soal 5

let ss = [12, 14, 19, 27, 10];
let sr = Math.max(...ss); // demikian juga ada math.max()
let ssr = ss.filter(function (st) {
    return st !== sr
});
let sv = Math.max(...ssr)
console.log(sv);



//Soal 6

let kata = ["javascript", "html", "css", "react", "nodejs"];
let kt = kata.filter(function (ka) {
    return ka.length >= 5;
});
console.log(kt);



//Soal 7

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { //dan ini juga ada math.sqrt()
        if (num % i === 0) return false;
    }
    return true;
}

function countPrimes(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

console.log(countPrimes([12, 3, 7, 20, 15, 35, 24, 6, 9, 17, 18, 12, 5, 29, 2, 22, 42, 39, 33, 41]));

//Soal 8

function findCommonElements(arr1, arr2) {
    let commonElements = [];
    for (let element of arr1) {
        if (arr2.includes(element)) {
            commonElements.push(element);
        }
    }
    return commonElements;
}
console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//Soal 9

function createHelloWorld(hi) {
    console.log(hi);

};
createHelloWorld('Hello')



//Soal 10

let angka = [5, 10, 15, 20, 25, 30, 35, 40];
for (let i = 0; i < angka.length; i++) {
    for (let j = 0; j < angka.length - 1 - i; j++) {
        if (angka[j] < angka[j + 1]) {
            let tem = angka[j];
            angka[j] = angka[j + 1];
            angka[j + 1] = tem;
        }
    }
}
console.log(angka);

//Soal 11

const student = {
    name: "Ahmad",
    age: 17,
    scores: [80, 75, 90, 88]
};
let mrid = 0;
for (let i = 0; i < student.scores.length; i++) {
    mrid += student.scores[i];
}
let tot = mrid / student.scores.length
console.log(tot);


//Soal 12

const bank = {
    nama: "Budi",
    saldo: 200000,
    nabung(jumlah) {
        this.saldo += jumlah;
        console.log('saldo anda sekarang adalah ', this.saldo);
    },
    tarik(jumlah) {
        this.saldo -= jumlah;
        console.log('saldo telah ditarik, sekarang sisa saldo adalah ', this.saldo);
    },
    cekSaldo() {
        console.log('saldo anda sebesar ', this.saldo);

    },
};

bank.cekSaldo();
bank.nabung(50000);
bank.tarik(100000);


//Soal 13

const mur =
    [
        { name: "Andi", score: 75 },
        { name: "Budi", score: 90 },
        { name: "Citra", score: 82 }
    ];
mur.sort(function (a, b) { return b.score - a.score }); //disini pula terdapat .sort
let uri = mur[0];
console.log(uri);



//Soal 14

const product = {
    id: 1,
    name: "Laptop",
    price: 12000000,
    stock: 5
};
let prod = Object.entries(product); //disini juga terdapat object.entries()
console.log(prod);



//Soal 15



//Soal 16

const psrta =
    [
        { name: "Ali", major: "TI" },
        { name: "Budi", major: "SI" },
        { name: "Citra", major: "TI" },
        { name: "Dina", major: "MI" },
        { name: "Eko", major: "TI" }
    ];
let psht = psrta.filter(function (dftar) { return dftar.major === 'TI' });
console.log(psht);

let psr = psrta.filter(function (dftar) { return dftar.major === 'MI' });
console.log(psr);

let ps = psrta.filter(function (dftar) { return dftar.major === 'SI' });
console.log(ps);



//Soal 17

let nestedObject = {
    a: 10,
    b: {
        c: 20,
        d: {
            e: 30
        }
    },
    f: 5
};
let total = 0;
function countNumericValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            total += obj[key];
        } else if (typeof obj[key] === "object") {
            countNumericValues(obj[key]);
        }
    }
}
countNumericValues(nestedObject);
console.log(total);


//Soal 18

let transaksi = [
    { type: "income", amount: 500000 },
    { type: "expense", amount: 200000 },
    { type: "income", amount: 300000 },
    { type: "expense", amount: 100000 }
];
let totalIncome = 0;
let totalExpense = 0;
for (let i = 0; i < transaksi.length; i++) {
    if (transaksi[i].type === "income") {
        totalIncome += transaksi[i].amount;
    } else if (transaksi[i].type === "expense") {
        totalExpense += transaksi[i].amount;
    }
}
console.log("Total Income:", totalIncome);
console.log("Total Expense:", totalExpense);

//Soal 19

const item = {
    name: "Laptop",
    price: 12000000,
    stock: 5,
    addItem(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        console.log('Item ditambahkan:', this.name, this.price, this.stock);
    },
    updateStock(newStock) {
        this.stock = newStock;
        console.log('Update stok:', this.stock);
    },
    deleteItem() {
        delete this.name;
        delete this.price;
        delete this.stock;
        console.log('Item telah dihapus');
    },
    cariItem() {
        console.log('Nama Item:', this.name);
        console.log('Harga Item:', this.price);
        console.log('Stok Item:', this.stock);
    },
    cekItem() {
    if (this.name === undefined) {
        console.log('Item detail: Maaf, barang ini sudah dihapus atau belum terdaftar!');
    } else {
        console.log('Item detail:', this.name, this.price, this.stock);
    }
}
    };



item.addItem("Smartphone", 8000000, 10);
item.cariItem();
item.updateStock(10);
item.cekItem();
item.deleteItem();
item.cekItem();


//Soal 20

