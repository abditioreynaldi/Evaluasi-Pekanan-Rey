/* Program hitung transaksi Kedai Senja */
// FIX 1: Menutup komentar multiline dengan '*/' agar tidak mengomentari seluruh kode di bawahnya.

// FIX 2: Mengubah deklarasi 'const namaKedai' menjadi 'let namaKedai' agar nilainya dapat diubah saat kedai berganti nama.
let namaKedai = "Kedai Senja";

const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;

// FIX 3: Mengubah tipe data jumlahRoti dari string "2" menjadi number 2 agar tidak terjadi konkatenasi string ("32").
let jumlahRoti = 2;

let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
// FIX 4: Memperbaiki penulisan variabel 'jumlahkopi' (huruf kecil) menjadi 'jumlahKopi' (camelCase) agar tidak ReferenceError.
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
// FIX 5: Menambahkan tanda kurung '(subtotal - 10000)' agar pengurangan dieksekusi terlebih dahulu sebelum dikali TARIF_PAJAK.
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
// FIX 6: Menambahkan tanda titik koma (semicolon ';') di akhir baris untuk kepatuhan sintaks JavaScript.
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
// FIX 7: Mengganti operator assignment ganda (=) menjadi operator perbandingan (>=) agar uangBayar tidak tertimpa dan bernilai boolean.
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
// FIX 8: Memperbaiki rumus kembalian dari 'totalBayar - uangBayar' menjadi 'uangBayar - totalBayar' agar tidak menghasilkan nilai negatif.
let kembalian = uangBayar - totalBayar;

// Jumlah item genap? Seharusnya: false
// FIX 9: Mengubah logika pengecekan genap dari '=== 1' (ganjil) menjadi '=== 0' (sisa bagi 0 untuk bilangan genap).
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
// FIX 10: Menggunakan operator increment (++) atau assignment (+= 1) agar nilai pertambahan disimpan kembali ke variabel transaksiSelesai.
transaksiSelesai++;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// FIX 11: Menghapus kata kunci 'let' karena variabel namaKedai sudah dideklarasikan di awal (mencegah SyntaxError redeclaration).
namaKedai = "Kedai Senja Baru";

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// FIX 12: Menghapus atau mengomentari baris penugasan ulang 'TARIF_PAJAK = 0.12' karena TARIF_PAJAK adalah konstanta (const) dan tidak boleh diubah.
// TARIF_PAJAK = 0.12; // Dihapus/dikomentari karena memicu TypeError: Assignment to constant variable

// FIX 13 (Bonus/Kerapihan): Mengubah 'Console.log' (huruf C kapital) menjadi 'console.log' (huruf kecil) agar tidak ReferenceError.
console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);