const btnCari = document.getElementById("btn-cari");
const inputCari = document.getElementById("input-cari");
const surahContainer = document.getElementById("surah-container");

btnCari.addEventListener("click", handleCariSurah);

async function handleCariSurah() {
    const container = document.getElementById("surah-container");
    container.innerHTML = "Sedang memuat..."; // Teks tunggu sementara
    
    const nomorSurah = Number(inputCari.value) - 1;

    const response = await fetch("https://equran.id/api/v2/surat");
    const data = await response.json();

    // 1. Ambil SATU objek surah utuh (tanpa menulis .nomor di ujungnya)
    const surah = data.data[nomorSurah];
    
    container.innerHTML = ""; // Bersihkan kontainer sebelum menampilkan data baru

    // 2. Karena datanya tunggal, langsung buat satu div tanpa perlu .forEach
    const div = document.createElement("div");
    div.innerHTML = `
        <p><strong>Nomor:</strong> ${surah.nomor}</p>
        <p><strong>Nama:</strong> ${surah.namaLatin} (${surah.nama})</p>
        <p><strong>Arti:</strong> ${surah.arti}</p>
        <p><strong>Jumlah Ayat:</strong> ${surah.jumlahAyat}</p>
        <p><strong>Deskripsi:</strong> ${surah.deskripsi}</p>
    `;
    container.appendChild(div);
}