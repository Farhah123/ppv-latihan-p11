# Changelog

Semua perubahan penting pada proyek ini dicatat di sini.
Format mengikuti [Keep a Changelog](https://keepachangelog.com/).

## [1.2.0] - 2026-11-11
### Added
- Komponen `KartuCatatan` dan `PesanKosong` di `src/komponen.js`.
- `KUNCI` berversi (`catatan-kuliah:v1`) di `src/storage.js`.
- Pemeriksa ketangguhan di folder `uji/` (`uji-tangguh.html` dan `uji-tangguh.js`).
- Peringatan di layar bila penyimpanan browser tidak tersedia.

### Changed
- Markup kartu ditulis sekali di `KartuCatatan` dan dipakai di daftar Disematkan dan Semua catatan.
- `muat()` dan `simpan()` memakai try/catch dan tidak pernah melempar galat.

### Fixed
- Aplikasi tidak lagi mati saat data tersimpan rusak.
- Judul catatan seperti `<b>tebal</b>` kini tampil sebagai teks, bukan HTML.

## [1.1.0] - 2026-11-08
### Changed
- Kode monolit dipecah menjadi modul ES: `state.js`, `ui.js`, `storage.js`, dan `main.js`.
- Event dipasang lewat `addEventListener`, tanpa `onclick` di HTML.

## [1.0.0] - 2026-11-01
### Added
- Versi awal monolit: satu berkas `app.js` berisi data, tampilan, dan penyimpanan.
