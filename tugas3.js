function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  try {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
      const urut = dataArray.sort(function (a, b) {
        return a - b;
      });
      const seleksi = urut.filter((el) => el > nilaiAwal && el < nilaiAkhir);
      if (seleksi.length == 0) {
        throw "Nilai tidak ditemukan";
      } else {
        throw seleksi;
      }
    }
    if (nilaiAwal > nilaiAkhir) throw "Nilai akhir harus lebih besar dari nilai awal";
    if (dataArray.length < 5) throw "Jumlah angka dalam dataArray harus lebih dari 5";
  } catch (print) {
    console.log(print);
  }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // OK
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); // nilaiAkhir < nilaiAwal
seleksiNilai(5, 17, [2, 25, 4]); // dataArray < 5
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // data tidak ditemukan
