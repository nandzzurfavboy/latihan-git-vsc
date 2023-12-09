//contoh kalkulator
//punya apa aja?

//nama
//jenis = jadul/sinefit
//penambahan
//pengurangan

//atribut = yang punya kalkulator
let kalkulator = {
  nama: 'kalkulator A',
  jenis: 'jadul',
  penambahan: function (a, b) {
    return a + b;
  },
  pengurangan: function (a, b) {
    return a - b;
  },
};

// console.log(kalkulator.penambahan(1, 5));

//object didalam object

let kulkas = {
  nama: 'Kulkas A',
  pendingin: {
    nama: 'pendingin A',
    dinginin: function () {
      console.log('Dingin...........');
    },
  },
};

console.log(kulkas.pendingin.nama);
