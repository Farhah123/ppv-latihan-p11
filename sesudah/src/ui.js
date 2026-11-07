// ui.js: hanya menggambar kartu ke layar. Tidak menyimpan data.

export function gambar(hasil) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');
  sematan.innerHTML = '';
  semua.innerHTML = '';
  let jumlahSemat = 0;
  for (let j = 0; j < hasil.length; j++) {
    const c = hasil[j];
    if (c.disematkan) {
      jumlahSemat++;
      sematan.innerHTML +=
        '<div class="kartu"><small>' + c.mk + '</small><h3>' + c.judul + '</h3>' +
        '<small>' + new Date(c.dibuat).toLocaleDateString('id-ID') + '</small>' +
        '<div class="aksi"><button data-aksi="semat" data-id="' + c.id + '">Lepas</button>' +
        '<button data-aksi="hapus" data-id="' + c.id + '">Hapus</button></div></div>';
    }
    semua.innerHTML +=
      '<div class="kartu"><small>' + c.mk + '</small><h3>' + c.judul + '</h3>' +
      '<small>' + new Date(c.dibuat).toLocaleDateString('id-ID') + '</small>' +
      '<div class="aksi"><button data-aksi="semat" data-id="' + c.id + '">' + (c.disematkan ? 'Lepas' : 'Sematkan') + '</button>' +
      '<button data-aksi="hapus" data-id="' + c.id + '">Hapus</button></div></div>';
  }
  if (jumlahSemat === 0) sematan.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  if (hasil.length === 0) semua.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  info.textContent = hasil.length + ' catatan, ' + jumlahSemat + ' disematkan';
}