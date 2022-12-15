function munculhargatiket() {
  //-- Deklarasi Variabel
  var tujuan = document.form.input_tujuan.value; // Nilai Variabel (tujuan) diambil dari Form input yang bernama (input_tujuan) -->
  // Selesai Deklarasi Variabel //

  if (tujuan == 'Purwakarta') {
    hargatiket = 44000;
  } //Jika (tujuan) yang dipilih "Amerika" maka Nilai (hargatiket) adalah 1000000 -->
  else if (tujuan == 'Bandung') {
    hargatiket = 55000;
  } else if (tujuan == 'Solo') {
    hargatiket = 66000;
  } else if (tujuan == 'Semarang') {
    hargatiket = 56000;
  }
  document.form.output_hargatujuan.value = eval(hargatiket); // Nilai Form (output_hargatujuan) akan ber nilai variabel (hargatiket) -->
}

function munculhargatipetiket() {
  var tipetiket = document.form.input_tipetiket.value;
  if (tipetiket == 'Bisnis') {
    tambahanbiaya = 0.5;
  } else if (tipetiket == 'Eksekutif') {
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
function bayar() {
  var nama = document.getElementById('nama').value;
  var tujuan = document.getElementById('tujuan').value;
  var tipe = document.getElementById('tipe').value;
  var jumlah = document.getElementById('jumlah').value;
  var harga = document.getElementById('harga').value;
  var biaya = document.getElementById('biaya').value;
  var diskon = document.getElementById('diskon').value;
  var total = document.getElementById('total').value;

  document.write('<pre>');
  document.write('<table border="2" align="center" bgcolor="white" width="500">');
  document.write('<tr>');
  document.write('<td>');
  document.write('<table width="500">');
  document.write('<tr>');
  document.write('<td colspan="3" align="center" width="500">' + '<font color="black" size="6">' + '<b>' + 'Hasil pemesanan' + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'Nama' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + nama + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'Tujuan' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + tujuan + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'typeTiket' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + tipe + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'jumlahTiket' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + jumlah + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'harga' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + harga + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'biayaTambahan' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + biaya + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'diskon' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + diskon + '</b>' + '</font>' + '</td>');
  document.write('</tr>');

  document.write('<tr>');
  document.write('<td width="200">' + '<font color="black">' + '<b>' + 'totalHarga' + '</b>' + '</font>' + '</td>');
  document.write('<td width="5">' + '<font color="black">' + '<b>' + ':' + '</b>' + '</font>' + '</td>');
  document.write('<td width="295">' + '<font color="black">' + '<b>' + total + '</b>' + '</font>' + '</td>');
  document.write('</tr>');
}
