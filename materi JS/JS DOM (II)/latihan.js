let button = document.querySelector('button');
let input = document.getElementsByClassName('input');
let input2 = document.getElementsByClassName('input2');
let p = document.querySelector('p');

let penghitungan = function () {
  let angka1 = input.value;
  let angka2 = input2.value;
  console.log(angka1 + angka2);
  let total = angka1 + angka2;
  p.innerHTML = total;
};

button.addEventListener('click', penghitungan);
