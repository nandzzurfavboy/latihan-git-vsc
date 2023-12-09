// ketika sebauh halaman selesai di load maka jalankan function dibawah ini

// kalo mau ambil elemen class, tulisannya $(".text")
// tambahin titik sebelum nulis nama classnya

// kalo mau ambil elemen id, tulisannya $("#text")
// tambahin hashtag sebelum nulis nama idnya

$(document).ready(function () {
  let h2 = $('h2'); // mengambil element h2 untuk dimasukkan ke dlm var h2. H2 didalm petik itu bisa nama element, class, id.
  h2.text('Selamat Datang'); //bisa text, bisa html
  h2.append('<i>, Pelanggan</i>'); //nambahin text di belakang
  h2.prepend('<i>Hello, </i>'); //nambahin text di depan
  h2.after('<i>Helloooooooooooooooooooo, </i>'); // nambahin di h2 html
  h2.before('<i>ini before lohh</i>'); // nambahin sebelum di h2 html
  // let input = $('input');
  // console.log(input.val(''));
  // h2.remove();

  // console.log($('h2').html('Ini aku keluar'));
  h2.addClass('biru');
});

// document.querySelector('h2').classList.add("biru")
// document.querySelector('h2').style.color = "blue"
