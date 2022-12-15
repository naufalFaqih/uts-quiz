function munculhargatiket() {
  //-- Deklarasi Variabel
  var tujuan = document.form.input_tujuan.value; // Nilai Variabel (tujuan) diambil dari Form input yang bernama (input_tujuan) -->
  // Selesai Deklarasi Variabel //

  if (tujuan == 'Amerika') {
    hargatiket = 1000000;
  } //Jika (tujuan) yang dipilih "Amerika" maka Nilai (hargatiket) adalah 1000000 -->
  else if (tujuan == 'Afrika') {
    hargatiket = 500000;
  } else if (tujuan == 'Eropa') {
    hargatiket = 250000;
  }
  document.form.output_hargatujuan.value = eval(hargatiket); // Nilai Form (output_hargatujuan) akan ber nilai variabel (hargatiket) -->
}

function munculhargatipetiket() {
  var tipetiket = document.form.input_tipetiket.value;
  if (tipetiket == 'VVIP') {
    tambahanbiaya = 0.5;
  } else if (tipetiket == 'VIP') {
    tambahanbiaya = 0.1;
  } else if (tipetiket == 'Ekonomi') {
    tambahanbiaya = 0;
  }
  document.form.output_tambahanbiaya.value = eval(tambahanbiaya) * eval(document.form.output_hargatujuan.value);
}
function apakahmember() {
  if (document.form.memberbukan.checked == true) {
    diskon = 0.1;
  } else {
    diskon = 0;
  }
  document.form.output_diskon.value = eval(diskon) * (eval(document.form.output_tambahanbiaya.value) + eval(document.form.output_hargatujuan.value));
}
function totalharga() {
  var jumlahtiket = document.form.input_jumlahtiket.value;
  document.form.output_totalharga.value = eval(jumlahtiket) * (eval(document.form.output_tambahanbiaya.value) + eval(document.form.output_hargatujuan.value)) - eval(document.form.output_diskon.value);
}
