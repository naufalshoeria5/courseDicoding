// Cara membuat object pada javascript
// Object Literal
// let mahasiswa = {
//   nama: "ucok",
//   energy: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${nama}, selamat makan!`);
//   },
// };

// function declration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Selamat Makan ${this.nama}`);
  };
}
