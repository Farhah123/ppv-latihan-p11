// storage.js: satu-satunya modul yang menyentuh localStorage.
// muat() dan simpan() tidak pernah melempar galat.

export const KUNCI = 'catatan-kuliah:v1';

let cadangan = [];
let tersedia = true;

const sah = (c) => c !== null && typeof c === 'object' && typeof c.judul === 'string';

export function penyimpananTersedia() {
  return tersedia;
}

export function muat() {
  let mentah;
  try {
    mentah = localStorage.getItem(KUNCI);
    tersedia = true;
  } catch (err) {
    tersedia = false;
    console.warn('localStorage tidak dapat dibaca, memakai cadangan di memori:', err);
    return cadangan.filter(sah);
  }

  if (mentah === null) return [];

  try {
    const data = JSON.parse(mentah);
    if (!Array.isArray(data)) {
      console.warn('Data tersimpan bukan array, diabaikan.');
      return [];
    }
    return data.filter(sah);
  } catch (err) {
    console.warn('Data tersimpan rusak (JSON tidak valid), diabaikan:', err);
    return [];
  }
}

export function simpan(daftar) {
  cadangan = daftar;
  try {
    localStorage.setItem(KUNCI, JSON.stringify(daftar));
    tersedia = true;
    return true;
  } catch (err) {
    tersedia = false;
    console.warn('Gagal menyimpan ke localStorage:', err);
    return false;
  }
}
