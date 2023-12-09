//DOM Document Object Model

let p = document.querySelector('p');

// console.log(p.innerText); // Mengambil text nya aja
// console.log(p.innerHTML); //mengambil HTML nya juga

//mengakses mengganti content / memanipulasi
// console.log((p.innerHTML = '<b>Coding</b> Is Fun'));

//mengakses style css
// console.log((p.style.backgroundColor = 'red'));

//menghapus class css
// console.log(p.classList.remove('text'));

//menambah
// console.log(p.classList.add('pindah'));

// DOM (II) DONE

// DOM Event
let button = document.querySelector('button');
let input = document.querySelector('input');

// ini event click
// button.addEventListener('click', function () {
//   let isi = input.value;
//   //   console.log(isi);
//   p.innerHTML = isi;
// });

// event listener dipisah function
let clickHandler = function () {
  let isi = input.value;
  console.log(isi);
  p.innerHTML = isi;
};

input.addEventListener('input', clickHandler);
button.addEventListener('click', clickHandler);
