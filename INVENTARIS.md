# Inventaris Tanggung Jawab: app.js (monolit)

| Rentang baris | Isi blok | Kelompok | Keterangan |
|---|---|---|---|
| 1-3 | Komentar pembuka | (diabaikan) | Bukan kode |
| 5 | JSON.parse(localStorage.getItem(...)) | Penyimpanan | Membaca data tersimpan, hasilnya mengisi catatan |
| 5-6 | var catatan, var kataCari | Data/state | Variabel global (T2) |
| 8-13 | Awal render(): ambil elemen DOM, kosongkan innerHTML | Tampilan | |
| 14-19 | Loop menyaring catatan berdasarkan kataCari | Data/state | Akan jadi cari(kata) |
| 20-36 | Loop membuat HTML kartu dan menghitung jumlahSemat | Tampilan | Berisi onclick (T3) |
| 37-39 | Pesan kosong dan teks #info | Tampilan | |
| 40 | localStorage.setItem(...) | Penyimpanan | Ada di dalam render() (T4) |
| 43-48 | sematkan(id): membalik disematkan | Data/state | Akan jadi alihSemat(id) |
| 50-58 | hapus(id): confirm() lalu membuang dari array | Data/state | confirm (baris 51) pindah ke main.js, sisanya jadi hapus(id) di state.js |
| 60-68 | Listener submit form | Event | Baca input tetap di main.js, push (baris 64-65) pindah ke tambah(judul, mk) |
| 70-73 | Listener input kotak cari | Event | Tetap di main.js |
| 75 | render() pemanggilan awal | Event | Inisialisasi aplikasi |

## Tanda yang ditemukan
- T1: render() (baris 8-41) mengerjakan penyaringan, pembuatan HTML, perhitungan, dan penyimpanan sekaligus.
- T2: catatan dan kataCari (baris 5-6) adalah variabel global.
- T3: onclick pada baris 28, 29, 34, 35 memanggil fungsi global.
- T4: localStorage dan innerHTML bercampur di dalam satu fungsi.