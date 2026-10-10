/*
 * =========================================================================
 * BAGIAN 5: TEBAK, EKSPERIMEN, DAN JELASKAN
 * =========================================================================
 */

console.log("==========================================");
console.log("    5.1 HASIL TEBAKAN DAN EKSPRESI JS     ");
console.log("==========================================");

// 1. console.log(5 + "5");
// Tebakan  : "55" (string karena operator + mendeteksi operand string dan melakukan konkatenasi)
// Hasil Asli: "55"
console.log(5 + "5");

// 2. console.log("10" - 4);
// Tebakan  : 6 (number karena operator - hanya bekerja untuk aritmatika numerik, string "10" dikonversi jadi number 10)
// Hasil Asli: 6
console.log("10" - 4);

// 3. console.log("10" * "2");
// Tebakan  : 20 (number karena operator * mengonversi kedua string numerik menjadi number)
// Hasil Asli: 20
console.log("10" * "2");

// 4. console.log(typeof ("5" + 5));
// Tebakan  : "string" (ekspresi "5" + 5 menghasilkan string "55", typeof dari string adalah "string")
// Hasil Asli: "string"
console.log(typeof ("5" + 5));

// 5. console.log(9 % 4);
// Tebakan  : 1 (sisa pembagian 9 dibagi 4 adalah 1, karena 4 * 2 = 8, sisa 1)
// Hasil Asli: 1
console.log(9 % 4);

// 6. console.log((2 + 3) ** 2);
// Tebakan  : 25 (kurung dievaluasi dulu 2 + 3 = 5, lalu dipangkatkan 2 menjadi 5 ** 2 = 25)
// Hasil Asli: 25
console.log((2 + 3) ** 2);

// 7. console.log(10 / 4);
// Tebakan  : 2.5 (pembagian di JavaScript menghasilkan floating point number desimal presisi)
// Hasil Asli: 2.5
console.log(10 / 4);

// 8. console.log(1 / 0);
// Tebakan  : Infinity (pembagian bilangan positif dengan 0 di JavaScript menghasilkan nilai khusus Infinity)
// Hasil Asli: Infinity
console.log(1 / 0);

// 9. console.log("abc" * 2);
// Tebakan  : NaN (string bukan angka tidak dapat dikonversi menjadi number, menghasilkan Not-a-Number)
// Hasil Asli: NaN
console.log("abc" * 2);

// 10. console.log(typeof NaN);
// Tebakan  : "number" (secara spesifikasi IEEE 754 dan JavaScript, NaN adalah nilai numerik khusus)
// Hasil Asli: "number"
console.log(typeof NaN);

// 11. console.log((5 > 3 && 2 > 4) || 1 === 1);
// Tebakan  : true ((true && false) menghasilkan false, lalu false || true menghasilkan true)
// Hasil Asli: true
console.log((5 > 3 && 2 > 4) || 1 === 1);

// 12. console.log(!true || !false);
// Tebakan  : true (!true adalah false, !false adalah true. false || true menghasilkan true)
// Hasil Asli: true
console.log(!true || !false);

// 13. console.log("5" == 5 && "5" !== 5);
// Tebakan  : true ("5" == 5 bernilai true karena loose equality konversi tipe, dan "5" !== 5 bernilai true karena beda tipe data)
// Hasil Asli: true
console.log("5" == 5 && "5" !== 5);

// 14. console.log(typeof [] === typeof {});
// Tebakan  : true (typeof array adalah "object" dan typeof object adalah "object". "object" === "object" adalah true)
// Hasil Asli: true
console.log(typeof [] === typeof {});

// 15. console.log([10, 20, 30][1] + [10, 20, 30][2]);
// Tebakan  : 50 (elemen indeks 1 adalah 20, elemen indeks 2 adalah 30. 20 + 30 = 50)
// Hasil Asli: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);

console.log("\n==========================================");
console.log("       5.2 EKSPERIMEN VAR DAN LET         ");
console.log("==========================================");

// --- Eksperimen 1: Block Scope (var bocor vs let terisolasi) ---
console.log("--- Uji Coba 1: Block Scope ---");
{
  var variabelVarBocor = "Nilai var dari dalam blok {}";
  let variabelLetAman = "Nilai let dari dalam blok {}";
  console.log("Dari dalam blok - let:", variabelLetAman);
}

// var bisa dibaca di luar blok:
console.log("Dari luar blok - var berhasil diakses:", variabelVarBocor);

// let tidak bisa dibaca di luar blok (menimbulkan ReferenceError jika diaktifkan):
// console.log("Dari luar blok - let:", variabelLetAman);
// PESAN ERROR JIKA DIAKTIFKAN:
// ReferenceError: variabelLetAman is not defined

// --- Eksperimen 2: Redeclaration (var boleh redeclare vs let dilarang) ---
console.log("\n--- Uji Coba 2: Redeclaration ---");
var menuKopi = "Kopi Tubruk";
var menuKopi = "Kopi Susu Gula Aren"; // Sah di JavaScript tanpa error, nilai ditimpa
console.log("Redeklarasi var berhasil tanpa error:", menuKopi);

let menuRoti = "Roti Cokelat";
// let menuRoti = "Roti Keju"; // SyntaxError jika diaktifkan
// PESAN ERROR JIKA DIAKTIFKAN:
// SyntaxError: Identifier 'menuRoti' has already been declared
console.log("Variabel let aman dari redeklarasi tidak sengaja:", menuRoti);