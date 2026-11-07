// state.js: data catatan beserta aturannya. Tidak menyentuh tampilan.

import { muat, simpan } from './storage.js';

let catatan = muat();

export function semua() {
  return catatan;
}

export function tambah(judul, mk) {
  catatan.push({
    id: Date.now(),
    judul: judul,
    mk: mk,
    dibuat: new Date().toISOString(),
    disematkan: false
  });
  simpan(catatan);
}

export function alihSemat(id) {
  for (let i = 0; i < catatan.length; i++) {
    if (catatan[i].id === id) catatan[i].disematkan = !catatan[i].disematkan;
  }
  simpan(catatan);
}

export function hapus(id) {
  catatan = catatan.filter(function (c) {
    return c.id !== id;
  });
  simpan(catatan);
}

export function cari(kata) {
  const k = kata.toLowerCase();
  return catatan.filter(function (c) {
    return c.judul.toLowerCase().includes(k);
  });
}