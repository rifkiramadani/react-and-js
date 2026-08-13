//first class function
//function expression
// let helo = function () {
//     console.log('hi!');
// }
// helo();

//function dikirim sebagai argument (callback)
// function sapa(nama, sapaan) {
//     sapaan(nama);
// }
// function salam(nama) {
//     console.log('halo ' + nama + '!');
// } 
// sapa('Rifky', salam);

//function dikembalikan dari function lain
// function buatPengali(pengali) {
//     return function (angka) {
//         return angka * pengali
//     }
// }

// const pengaliDua = buatPengali(2);
// console.log(pengaliDua(5));

//function declaration
// function validasiPassword(password) {
//     return password.length > 8
// }

//function expression
// const validasiPassword = function(password) {
//     return password.length > 8;
// }

//arrow function
// const validasiPassword = (password) => {
//     return password.length > 8;
// }

// console.log(validasiPassword("123456789"));

 