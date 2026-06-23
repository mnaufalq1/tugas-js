//Soal 1

const logs = [
 "LOGIN|andi|2026-06-01",
 "LOGIN|budi|2026-06-02",
 "LOGOUT|andi|2026-06-03",
 "LOGIN|andi|2026-06-04",
 null,
 undefined,
 "INVALID"
];

function buatLaporanAktivitas(dataLogs) {
  const validLogs = dataLogs.filter(log => {
    if (!log || typeof log !== 'string') return false;
    return log.includes('|');
  });

  const nilaiAwalLaporan = {
    totalValidLogs: 0,
    uniqueUsers: [],
    loginCount: {},
    oldestLog: null,
    newestLog: null
  };

  return validLogs.reduce((laporan, log) => {
    const [aksi, nama, tanggal] = log.split('|');
    const tanggalLog = new Date(tanggal);

    laporan.totalValidLogs += 1;

    if (!laporan.uniqueUsers.includes(nama)) {
      laporan.uniqueUsers.push(nama);
    }

    if (aksi === 'LOGIN') {
      laporan.loginCount[nama] = (laporan.loginCount[nama] || 0) + 1;
    }

    if (!laporan.oldestLog && !laporan.newestLog) {
      laporan.oldestLog = tanggal;
      laporan.newestLog = tanggal;
    } else {
      if (tanggalLog < new Date(laporan.oldestLog)) laporan.oldestLog = tanggal;
      if (tanggalLog > new Date(laporan.newestLog)) laporan.newestLog = tanggal;
    }

    return laporan;
  }, nilaiAwalLaporan);
}

const hasilLaporan = buatLaporanAktivitas(logs);
console.log(hasilLaporan);

//Soal 2

function createWallet(saldoAwal) {
  let saldo = saldoAwal;
  let catatanTransaksi = ["Dompet dibuat dengan saldo awal " + saldoAwal];

  return {
    balance: function() {
      return saldo;
    },

    deposit: function(jumlah) {
      if (jumlah <= 0) {
        console.log("Jumlah deposit harus lebih dari 0!");
        return;
      }
      saldo += jumlah; 
      catatanTransaksi.push("Deposit: " + jumlah); 
    },

    withdraw: function(jumlah) {
      if (jumlah > saldo) {
        console.log("Saldo tidak mencukupi, transaksi dibatalkan.");
        return; 
      }
      
      saldo -= jumlah; 
      catatanTransaksi.push("Withdraw: " + jumlah);
    },

    history: function() {
      return [...catatanTransaksi];
    }
  };
}

const wallet = createWallet(1000);

wallet.deposit(500);
wallet.withdraw(200);

console.log("Saldo Saat Ini:", wallet.balance());
console.log("Riwayat Transaksi:", wallet.history());

wallet.withdraw(2000); 



//Soal 3

function generatePayroll(...employees) { 
  
  const karyawanDenganGaji = employees.map(employee => {
    const { name, basicSalary, allowance } = employee;
    
    const totalGaji = Number(basicSalary) + Number(allowance);
    
    return {
      name: name,
      totalSalary: totalGaji
    };
  });

  const totalPengeluaran = karyawanDenganGaji.reduce((total, emp) => {
    return total + emp.totalSalary;
  }, 0);

  const semuaGaji = karyawanDenganGaji.map(emp => emp.totalSalary);

  const gajiTertinggi = Math.max(...semuaGaji);
  const gajiTerendah = Math.min(...semuaGaji);

  const karyawanTertinggi = karyawanDenganGaji.find(emp => emp.totalSalary === gajiTertinggi);
  const karyawanTerendah = karyawanDenganGaji.find(emp => emp.totalSalary === gajiTerendah);

  return {
    totalGajiTiapKaryawan: karyawanDenganGaji,
    totalPengeluaranPerusahaan: totalPengeluaran,
    karyawanGajiTertinggi: karyawanTertinggi,
    karyawanGajiTerendah: karyawanTerendah
  };
}

const laporanPayroll = generatePayroll(
  { name: "Andi", basicSalary: "5000000", allowance: "1000000" },
  { name: "Budi", basicSalary: "4500000", allowance: "750000" }
);

console.log(laporanPayroll);


//Soal 4

function inspectCollection(data) {
  const isIterable = data != null && typeof data[Symbol.iterator] === 'function';
  
  let size = 0;
  let first = null;
  let last = null;
  let keys = [];

  if (isIterable) {
    const elements = [...data];
    size = elements.length;
    
    if (size > 0) {
      first = elements[0];
      last = elements[size - 1];
    }
  } else {
    if (data != null && typeof data === 'object') {
      keys = Object.keys(data);
      size = keys.length;
    } else {
      keys = [];
      size = 0;
    }
  }

  const report = {
    type: isIterable ? "iterable" : "non-iterable",
    totalItems: size
  };

  if (isIterable) {
    report.firstElement = first;
    report.lastElement = last;
  } else {
    report.availableKeys = keys;
  }

  return report;
}

console.log(inspectCollection("hello"));

console.log(inspectCollection([1, 2, 3]));

console.log(inspectCollection(new Set([1, 2, 3])));

console.log(inspectCollection(new Map([["a", 1]])));

console.log(inspectCollection({ a: 1, b: 2 }));

console.log(inspectCollection(12345));



//Soal 5

function createAccessTracker() {
  const dataKunjungan = {};
  
  let totalMasuk = 0;
  let pengunjungTerbanyak = null;
  let jumlahKunjunganMaksimal = 0;

  return {
    enter: function(name) {
      if (!name || typeof name !== 'string') return;
      
      const waktuSekarang = new Date();

      if (!dataKunjungan[name]) {
        dataKunjungan[name] = [];
      }
      
      dataKunjungan[name].push(waktuSekarang);
      totalMasuk += 1;

      const totalKunjunganUser = dataKunjungan[name].length;
      if (totalKunjunganUser > jumlahKunjunganMaksimal) {
        jumlahKunjunganMaksimal = totalKunjunganUser;
        pengunjungTerbanyak = name;
      }
    },

    lastVisit: function(name) {
      const riwayat = dataKunjungan[name];
      if (!riwayat || riwayat.length === 0) return null;
      
      return riwayat[riwayat.length - 1];
    },

    report: function() {
      const ringkasanEntries = {};
      const semuaKaryawan = Object.keys(dataKunjungan);

      semuaKaryawan.forEach(name => {
        ringkasanEntries[name] = dataKunjungan[name].length;
      });

      return formatLaporan(semuaKaryawan.length, totalMasuk, pengunjungTerbanyak, ringkasanEntries);

      function formatLaporan(totalEmp, totalEnt, mostFreq, entriesObj) {
        return {
          totalEmployees: totalEmp,
          totalEntries: totalEnt,
          mostFrequentVisitor: mostFreq,
          entries: entriesObj 
        };
      }
    }
  };
}

const tracker = createAccessTracker();

tracker.enter("Andi");
tracker.enter("Budi");
tracker.enter("Andi");

console.log(tracker.report());

console.log("Kunjungan Terakhir Andi:", tracker.lastVisit("Andi")); 
