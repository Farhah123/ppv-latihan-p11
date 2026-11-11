// ui.js: hanya menggambar kartu ke layar. Tidak menyimpan data.

import { KartuCatatan, PesanKosong } from './komponen.js';
import { penyimpananTersedia } from './storage.js';

export function gambar(hasil) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');

  const disematkan = hasil.filter((c) => c.disematkan);

  sematan.replaceChildren();
  semua.replaceChildren();

  if (disematkan.length === 0) {
    sematan.append(PesanKosong('Belum ada catatan yang disematkan.'));
  } else {
    disematkan.forEach((c) => sematan.append(KartuCatatan(c)));
  }

  if (hasil.length === 0) {
    semua.append(PesanKosong('Tidak ada catatan.'));
  } else {
    hasil.forEach((c) => semua.append(KartuCatatan(c)));
  }

  let teks = hasil.length + ' catatan, ' + disematkan.length + ' disematkan';
  if (!penyimpananTersedia()) {
    teks += ' | Peringatan: data tidak tersimpan karena penyimpanan browser tidak tersedia.';
  }
  info.textContent = teks;
}
