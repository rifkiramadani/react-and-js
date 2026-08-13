// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('nilai hasil promise ketika resolved');
//     }, 1000);
// });

// //menggunakan promise biasa
// // p
// // .then((response) =>{
// //     console.log(response)
// // })
// // .catch((error) => {
// //     console.error('gagal mengambil nilai hasil resolve', error);
// // })

// //menggunakan async await
// const tampilkanNilai = async () => {
//     console.log(await p);
// }

const bacaFilePromise = (namaFile) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "isi data file.";
            console.log(`membaca file : ${namaFile}`);
            resolve(data);    
        }, 1000)
    })
} 

const prosesFilePromise = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const proses = data.toUpperCase();
            console.log(`memproses file: ${proses}`);
            resolve(proses)
        }, 1000)
    })
}

const tampilkanHasilPromise = (hasil) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`hasil pemrosesan : ${hasil}`);
            resolve()
        }, 1000)
    })
}

const handleFilePromise = async (file) => {
    try {
        const bacaFile = await bacaFilePromise(file);
        const prosesFile = await prosesFilePromise(bacaFile);
        await tampilkanHasilPromise(prosesFile);
        console.log('Selesai dengan Promise');
    } catch (error) {
        console.error('Error: ', error);
    }
}

handleFilePromise('file.txt');