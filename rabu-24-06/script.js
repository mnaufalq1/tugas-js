let namaInput = document.getElementById("nama");
let umurInput = document.getElementById("umur");
let kelasInput = document.getElementById("kelas");
let tambahBtn = document.getElementById("tambah");
let tableBody = document.getElementById("table-body");
let jumlahSiswa = document.getElementById("jumlah-siswa");

tambahBtn.addEventListener("click", function () {
  let nama = namaInput.value;
  let umur = umurInput.value;
  let kelas = kelasInput.value;
  let row = document.createElement("tr");
  row.innerHTML = `
        <td>${nama}</td>
        <td>${umur}</td>
        <td>${kelas}</td>
        <td><button class="btn-edit">Edit</button><button class="btn-hapus">Hapus</button></td>
    `;
  tableBody.appendChild(row);
  jumlahSiswa.textContent = tableBody.children.length;
  namaInput.value = "";
  umurInput.value = "";
  kelasInput.value = "";
});

tableBody.addEventListener('click', function(e) {

    if (e.target.classList.contains('btn-hapus')) {
        let row = e.target.parentElement.parentElement;
        tableBody.removeChild(row);
        jumlahSiswa.textContent = tableBody.children.length;
    }
    
    if (e.target.classList.contains('btn-edit')) {
        let row = e.target.parentElement.parentElement;
        
        let namaLama = row.children[0].textContent;
        let umurLama = row.children[1].textContent;
        let kelasLama = row.children[2].textContent;
        
        namaInput.value = namaLama;
        umurInput.value = umurLama;
        kelasInput.value = kelasLama;
        
        tableBody.removeChild(row);
        
        jumlahSiswa.textContent = tableBody.children.length;
    }

});