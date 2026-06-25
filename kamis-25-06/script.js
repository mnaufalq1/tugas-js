import { tambah, kurang, kali, bagi } from "./rumus-kalkulator/main.js";

const tombol = document.getElementById('btn');
const pesan = document.getElementById('pessan');

tombol.addEventListener("click", function (e) {
    e.preventDefault();
    
    // 1. Mengambil angka terbaru dari input
    let a = Number(document.getElementById('number-1').value);
    let b = Number(document.getElementById('number-2').value);
    
    // 2. Mengambil jenis operasi yang dipilih oleh user di dropdown
    let pilihanOperasi = document.getElementById('operasi').value;
    
    let hasil = 0;

    // 3. Menentukan fungsi mana yang harus dijalankan berdasarkan pilihanOperasi
    if (pilihanOperasi === "tambah") {
        hasil = tambah(a, b);
    } else if (pilihanOperasi === "kurang") {
        hasil = kurang(a, b)
        // [A] Tuliskan kode untuk operasi kurang di sini
    } else if (pilihanOperasi === "kali") {
        hasil = kali(a, b)
        // [B] Tuliskan kode untuk operasi kali di sini
    } else if (pilihanOperasi === "bagi") {
        hasil = bagi(a, b)
        // [C] Tuliskan kode untuk operasi bagi di sini
    }

    // 4. Tampilkan hasilnya ke layar
    pesan.innerText = `Hasil: ${hasil}`;
});