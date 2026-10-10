/*
 * ==========================================================================================
 * Nama Program  : Sistem Pencatat Transaksi & Laporan Keuangan Kedai Senja
 * Penulis       : Reynaldi Abditio
 * Tanggal       : 10 Oktober 2026
 * Tujuan        : Membuat sistem pencatat transaksi dan laporan keuangan untuk Kedai Senja
 * ==========================================================================================
 */

// 1. Data Kedai
const kedai = {
  nama: "Kedai Senja",
  pemilik: "Reynaldi Abditio",
  kota: "Kota Senja",
  tahunBerdiri: 2020,
  sedangBuka: true,
  nomorTelepon: "081234567890",
  website: "www.kedaisenja.com",
  jamOperasional: {
    buka: "08:00",
    tutup: "20:00"
  }
};

// 2. Menu Kedai
const menu = [
  {
    nama: "Kopi Senja",
    harga: 15000,
    kategori: "Minuman",
    stok: 10,
    tersedia: true
  },
  {
    nama: "Tea Senja",
    harga: 12000,
    kategori: "Minuman",
    stok: 0,
    tersedia: false
  },
  {
    nama: "Roti Bakar",
    harga: 10000,
    kategori: "Makanan",
    stok: 5,
    tersedia: true
  },
  {
    nama: "Nasi Goreng",
    harga: 20000,
    kategori: "Makanan",
    stok: 8,
    tersedia: true
  },
  {
    nama: "Sate Ayam",
    harga: 25000,
    kategori: "Makanan",
    stok: 3,
    tersedia: true
  },
  {
    nama: "Matcha Latte",
    harga: 15000,
    kategori: "Minuman",
    stok: 12,
    tersedia: true
  }
];

// 3. Data Transaksi
const transaksi = [
  {
    id: "senja001",
    namaPelanggan: "Andi",
    sudahMember: true,
    uangBayar: 60000,
    catatan: "Pesanan cepat ya",
    pesanan: [
      { indeksMenu: 0, jumlah: 2 },
      { indeksMenu: 2, jumlah: 3 }
    ]
  },
  {
    id: "senja002",
    namaPelanggan: "Budi",
    sudahMember: false,
    uangBayar: 50000,
    catatan: "Tidak pakai gula",
    pesanan: [
      { indeksMenu: 2, jumlah: 2 },
      { indeksMenu: 4, jumlah: 1 }
    ]
  },
  {
    id: "senja003",
    namaPelanggan: "Citra",
    sudahMember: true,
    uangBayar: 30000,
    catatan: "Mau yang manis",
    pesanan: [
      { indeksMenu: 1, jumlah: 1 },
      { indeksMenu: 5, jumlah: 2 }
    ]
  }
];

// ============================================
// BAGIAN 2: DATA KEDAI SENJA
// ============================================

console.log("==========================================");
console.log("       BAGIAN 2: DATA KEDAI SENJA         ");
console.log("==========================================");

console.log("Nama Kedai (Notasi Titik):", kedai.nama);
console.log("Kota (Notasi Kurung Siku):", kedai["kota"]);
console.log("Jam Tutup:", kedai.jamOperasional.tutup);

console.log("Menu Pertama (Indeks 0):", menu[0]);
console.log("Menu Terakhir (Indeks 5):", menu[menu.length - 1]);

console.log(
  "Nama Pelanggan Transaksi Kedua:",
  transaksi[1].namaPelanggan
);

console.log(
  "Nama Menu Item Kedua di Transaksi Ketiga:",
  menu[transaksi[2].pesanan[1].indeksMenu].nama
);

console.log("\n--- Hasil typeof ---");

console.log(
  "typeof kedai.tahunBerdiri:",
  typeof kedai.tahunBerdiri
);

console.log(
  "typeof kedai.sedangBuka:",
  typeof kedai.sedangBuka
);

console.log(
  "typeof kedai.website:",
  typeof kedai.website
);

console.log(
  "typeof kedai.jamOperasional:",
  typeof kedai.jamOperasional
);

console.log(
  "typeof menu:",
  typeof menu
);

console.log(
  "typeof transaksi[0].catatan:",
  typeof transaksi[0].catatan
);

// ============================================
// Variabel Tanpa Nilai
// ============================================

let catatanKasir;

console.log(
  "\nVariabel catatanKasir tanpa nilai:",
  catatanKasir
);

// ============================================
// BAGIAN 3: PERHITUNGAN TRANSAKSI DAN LAPORAN
// ============================================

// ---------- TRANSAKSI 1 ----------

const subtotal1 =
  menu[transaksi[0].pesanan[0].indeksMenu].harga *
    transaksi[0].pesanan[0].jumlah +
  menu[transaksi[0].pesanan[1].indeksMenu].harga *
    transaksi[0].pesanan[1].jumlah;

const potongan1 = transaksi[0].sudahMember
  ? subtotal1 * 0.10
  : 0;

const subtotalSetelahPotongan1 =
  subtotal1 - potongan1;

const pajak1 = subtotalSetelahPotongan1 * 0.11;

const totalBayar1 =
  subtotalSetelahPotongan1 + pajak1;

const kembalian1 =
  transaksi[0].uangBayar - totalBayar1;

const uangCukup1 =
  transaksi[0].uangBayar >= totalBayar1;

const totalItem1 =
  transaksi[0].pesanan[0].jumlah +
  transaksi[0].pesanan[1].jumlah;

const gratisAntar1 =
  subtotal1 >= 100000 ||
  totalItem1 >= 5;

const semuaMenuTersedia1 =
  menu[transaksi[0].pesanan[0].indeksMenu]
    .tersedia &&
  menu[transaksi[0].pesanan[1].indeksMenu]
    .tersedia;

const sisaBagi50rb1 =
  kembalian1 >= 0
    ? kembalian1 % 50000
    : null;

const sisaBagi20rb1 =
  kembalian1 >= 0
    ? kembalian1 % 20000
    : null;


// ---------- TRANSAKSI 2 ----------

const subtotal2 =
  menu[transaksi[1].pesanan[0].indeksMenu].harga *
    transaksi[1].pesanan[0].jumlah +
  menu[transaksi[1].pesanan[1].indeksMenu].harga *
    transaksi[1].pesanan[1].jumlah;

const potongan2 =
  transaksi[1].sudahMember
    ? subtotal2 * 0.10
    : 0;

const subtotalSetelahPotongan2 =
  subtotal2 - potongan2;

const pajak2 =
  subtotalSetelahPotongan2 * 0.11;

const totalBayar2 =
  subtotalSetelahPotongan2 + pajak2;

const kembalian2 =
  transaksi[1].uangBayar - totalBayar2;

const uangCukup2 =
  transaksi[1].uangBayar >= totalBayar2;

const totalItem2 =
  transaksi[1].pesanan[0].jumlah +
  transaksi[1].pesanan[1].jumlah;

const gratisAntar2 =
  subtotal2 >= 100000 ||
  totalItem2 >= 5;

const semuaMenuTersedia2 =
  menu[transaksi[1].pesanan[0].indeksMenu]
    .tersedia &&
  menu[transaksi[1].pesanan[1].indeksMenu]
    .tersedia;

const sisaBagi50rb2 =
  kembalian2 >= 0
    ? kembalian2 % 50000
    : null;

const sisaBagi20rb2 =
  kembalian2 >= 0
    ? kembalian2 % 20000
    : null;


// ---------- TRANSAKSI 3 ----------

const subtotal3 =
  menu[transaksi[2].pesanan[0].indeksMenu].harga *
    transaksi[2].pesanan[0].jumlah +
  menu[transaksi[2].pesanan[1].indeksMenu].harga *
    transaksi[2].pesanan[1].jumlah;

const potongan3 =
  transaksi[2].sudahMember
    ? subtotal3 * 0.10
    : 0;

const subtotalSetelahPotongan3 =
  subtotal3 - potongan3;

const pajak3 =
  subtotalSetelahPotongan3 * 0.11;

const totalBayar3 =
  subtotalSetelahPotongan3 + pajak3;

const kembalian3 =
  transaksi[2].uangBayar - totalBayar3;

const uangCukup3 =
  transaksi[2].uangBayar >= totalBayar3;

const totalItem3 =
  transaksi[2].pesanan[0].jumlah +
  transaksi[2].pesanan[1].jumlah;

const gratisAntar3 =
  subtotal3 >= 100000 ||
  totalItem3 >= 5;

const semuaMenuTersedia3 =
  menu[transaksi[2].pesanan[0].indeksMenu]
    .tersedia &&
  menu[transaksi[2].pesanan[1].indeksMenu]
    .tersedia;

const sisaBagi50rb3 =
  kembalian3 >= 0
    ? kembalian3 % 50000
    : null;

const sisaBagi20rb3 =
  kembalian3 >= 0
    ? kembalian3 % 20000
    : null;

// ============================================
// LAPORAN HARIAN
// ============================================

let pendapatanHarian = 0;
let jumlahTransaksi = 0;

pendapatanHarian += totalBayar1;
jumlahTransaksi++;

pendapatanHarian += totalBayar2;
jumlahTransaksi++;

pendapatanHarian += totalBayar3;
jumlahTransaksi++;

const rataRataPendapatan =
  pendapatanHarian / jumlahTransaksi;

const selisihTerbesar =
  Math.max(totalBayar1, totalBayar2, totalBayar3) -
  Math.min(totalBayar1, totalBayar2, totalBayar3);

const persentaseTransaksiPertama =
  (totalBayar1 / pendapatanHarian) * 100;

const hargaKopiTigaBulan =
  menu[0].harga * (1.05 ** 3);

// ============================================
// CETAK LAPORAN TRANSAKSI
// ============================================

console.log("\n========================================================");
console.log(
  `LAPORAN HARIAN ${kedai.nama.toUpperCase()}`
);
console.log("========================================================");

// TRANSAKSI 1

console.log(`
--- RINGKASAN TRANSAKSI 1 (${transaksi[0].id}) ---
Pelanggan         : ${transaksi[0].namaPelanggan}
Member            : ${transaksi[0].sudahMember ? "Ya" : "Tidak"}
Subtotal          : Rp ${subtotal1.toLocaleString("id-ID")}
Potongan (10%)    : Rp ${potongan1.toLocaleString("id-ID")}
Pajak (11%)       : Rp ${pajak1.toLocaleString("id-ID")}
Total Bayar       : Rp ${totalBayar1.toLocaleString("id-ID")}
Uang Bayar        : Rp ${transaksi[0].uangBayar.toLocaleString("id-ID")}
Kembalian         : Rp ${kembalian1.toLocaleString("id-ID")}
Status Pembayaran : ${uangCukup1 ? "UANG CUKUP" : "UANG KURANG"}
Gratis Antar      : ${gratisAntar1 ? "DAPAT" : "TIDAK DAPAT"}
Semua Menu Ready  : ${semuaMenuTersedia1 ? "YA" : "TIDAK"}
Sisa Bagi Rp50rb  : Rp ${sisaBagi50rb1.toLocaleString("id-ID")}
Sisa Bagi Rp20rb  : Rp ${sisaBagi20rb1.toLocaleString("id-ID")}
Catatan           : ${transaksi[0].catatan ?? "-"}
`);

// TRANSAKSI 2

console.log(`
--- RINGKASAN TRANSAKSI 2 (${transaksi[1].id}) ---
Pelanggan         : ${transaksi[1].namaPelanggan}
Member            : ${transaksi[1].sudahMember ? "Ya" : "Tidak"}
Subtotal          : Rp ${subtotal2.toLocaleString("id-ID")}
Potongan (10%)    : Rp ${potongan2.toLocaleString("id-ID")}
Pajak (11%)       : Rp ${pajak2.toLocaleString("id-ID")}
Total Bayar       : Rp ${totalBayar2.toLocaleString("id-ID")}
Uang Bayar        : Rp ${transaksi[1].uangBayar.toLocaleString("id-ID")}
Kembalian         : Rp ${kembalian2.toLocaleString("id-ID")}
Status Pembayaran : ${uangCukup2 ? "UANG CUKUP" : "UANG KURANG"}
Gratis Antar      : ${gratisAntar2 ? "DAPAT" : "TIDAK DAPAT"}
Semua Menu Ready  : ${semuaMenuTersedia2 ? "YA" : "TIDAK"}
Sisa Bagi Rp50rb  : Rp ${sisaBagi50rb2.toLocaleString("id-ID")}
Sisa Bagi Rp20rb  : Rp ${sisaBagi20rb2.toLocaleString("id-ID")}
Catatan           : ${transaksi[1].catatan ?? "-"}
`);

// TRANSAKSI 3

console.log(`
--- RINGKASAN TRANSAKSI 3 (${transaksi[2].id}) ---
Pelanggan         : ${transaksi[2].namaPelanggan}
Member            : ${transaksi[2].sudahMember ? "Ya" : "Tidak"}
Subtotal          : Rp ${subtotal3.toLocaleString("id-ID")}
Potongan (10%)    : Rp ${potongan3.toLocaleString("id-ID")}
Pajak (11%)       : Rp ${pajak3.toLocaleString("id-ID")}
Total Bayar       : Rp ${totalBayar3.toLocaleString("id-ID")}
Uang Bayar        : Rp ${transaksi[2].uangBayar.toLocaleString("id-ID")}
Kembalian         : Rp ${kembalian3.toLocaleString("id-ID")}
Status Pembayaran : ${
  uangCukup3
    ? "UANG CUKUP"
    : `UANG KURANG (Kurang Rp ${Math.abs(
        kembalian3
      ).toLocaleString("id-ID")})`
}
Gratis Antar      : ${gratisAntar3 ? "DAPAT" : "TIDAK DAPAT"}
Semua Menu Ready  : ${
  semuaMenuTersedia3
    ? "YA"
    : "TIDAK (Ada Menu Habis)"
}
Catatan           : ${transaksi[2].catatan ?? "-"}
`);

// ============================================
// REKAPITULASI
// ============================================

console.log("========================================================");
console.log("REKAPITULASI LAPORAN KASIR");
console.log("========================================================");

console.log(
  "Total Pendapatan Harian : Rp",
  pendapatanHarian.toLocaleString("id-ID")
);

console.log(
  "Jumlah Transaksi        :",
  jumlahTransaksi,
  "transaksi"
);

console.log(
  "Rata-rata Pendapatan    : Rp",
  rataRataPendapatan.toLocaleString("id-ID")
);

console.log(
  "Selisih Terbesar        : Rp",
  selisihTerbesar.toLocaleString("id-ID")
);

console.log(
  "Porsi Transaksi Pertama :",
  `${persentaseTransaksiPertama.toFixed(2)}%`
);

console.log(
  "Harga Kopi Setelah 3 Bulan : Rp",
  hargaKopiTigaBulan.toLocaleString("id-ID")
);