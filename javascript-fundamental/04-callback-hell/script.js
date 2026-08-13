 const bacaFile = (namaFile, callback) => {
    setTimeout(() => {
        const data = "data dari file";
        console.log(`Data dari file ${namaFile} berhasil di baca`);
        callback(data)
    },1000)
 }

 const prosesFile = (data,callback) => {
    setTimeout(() => {
        const hasil = data.toUpperCase();
        console.log(`Data di proses: ${hasil}`);
        callback(hasil)
    }, 1000)
 }

 const tampilkanHasil = (data, callback) => {
    setTimeout(() => {
        console.log(`hasil pemrosesan: ${data}`);
        callback();
    }, 1000)
 }

 bacaFile('file.txt', (data) => {
    prosesFile(data, (hasil) => {
        tampilkanHasil(hasil, () => {
            console.log('selesai');
        }) 
    })
 })


