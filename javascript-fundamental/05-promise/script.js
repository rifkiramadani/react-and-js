// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const berhasil = false;
//         if(berhasil) {
//             resolve("Janji ditepati");
//         } else {
//             const err = new Error('Janji dibatalkan');
//             reject(err)
//         }
//     },2000)
// });

// myPromise
//     .then((hasil) => {
//         console.log(hasil)
//     })
//     .catch((error) => {
//         console.error(error)
//     });


// const bacaFile = (namaFile) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = undefined;
//             if(!data) {
//                 const error = new Error("File Error");
//                 reject(error);
//             } else {
//                 console.log(`data dari file : ${namaFile} berhasil di baca`);
//                 resolve(data);
//             }
//         }, 1000)
//     })
// }


// const prosesFile = (data) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const hasil = data.toUpperCase();
//             console.log(`memproses data: ${hasil}`);
//             resolve(hasil);
//         }, 1000)
//     })
// }

// const tampilkanHasil = (hasil) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`hasil pemrosesan : ${hasil}`);
//             resolve();
//         },1000)
//     })
// }

// bacaFile('file.txt')
//     .then(prosesFile)
//     .then(tampilkanHasil)
//     .then(() => {
//         setTimeout(() => {
//             console.log('program selesai')  
//         },1000)
//     })
//     .catch((error) => {
//         console.error("Terjadi Kesalahan :", error);
//     });