// main.js: titik masuk. Menyambungkan state dan ui, memasang event.

import * as S from './state.js';
import { gambar } from './ui.js';

let kataCari = '';

function tampilkan() {
  gambar(S.cari(kataCari));
}

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const judul = document.getElementById('judul').value.trim();
  if (judul === '') return;
  S.tambah(judul, document.getElementById('mk').value);
  document.getElementById('judul').value = '';
  tampilkan();
});

document.getElementById('cari').addEventListener('input', function (e) {
  kataCari = e.target.value;
  tampilkan();
});

// Satu pendengar klik per wadah kartu (event delegation).
function tanganiKlik(e) {
  const tombol = e.target.closest('button[data-aksi]');
  if (!tombol) return;
  const id = Number(tombol.dataset.id);
  if (tombol.dataset.aksi === 'semat') {
    S.alihSemat(id);
  } else if (tombol.dataset.aksi === 'hapus') {
    if (!confirm('Hapus catatan ini?')) return;
    S.hapus(id);
  }
  tampilkan();
}

document.getElementById('sematan').addEventListener('click', tanganiKlik);
document.getElementById('semua').addEventListener('click', tanganiKlik);

tampilkan();