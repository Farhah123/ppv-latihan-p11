// komponen.js: komponen tampilan yang dipakai berulang.
// Semua teks pengguna masuk lewat textContent, bukan innerHTML.

export function KartuCatatan(catatan) {
  const kartu = document.createElement('div');
  kartu.className = 'kartu';

  const mk = document.createElement('small');
  mk.textContent = catatan.mk ?? '';

  const judul = document.createElement('h3');
  judul.textContent = catatan.judul;

  const tanggal = document.createElement('small');
  tanggal.textContent = new Date(catatan.dibuat).toLocaleDateString('id-ID');

  const aksi = document.createElement('div');
  aksi.className = 'aksi';

  const tombolSemat = document.createElement('button');
  tombolSemat.dataset.aksi = 'semat';
  tombolSemat.dataset.id = catatan.id;
  tombolSemat.textContent = catatan.disematkan ? 'Lepas' : 'Sematkan';

  const tombolHapus = document.createElement('button');
  tombolHapus.dataset.aksi = 'hapus';
  tombolHapus.dataset.id = catatan.id;
  tombolHapus.textContent = 'Hapus';

  aksi.append(tombolSemat, tombolHapus);
  kartu.append(mk, judul, tanggal, aksi);
  return kartu;
}

export function PesanKosong(teks) {
  const p = document.createElement('p');
  p.className = 'kosong';
  p.textContent = teks;
  return p;
}
