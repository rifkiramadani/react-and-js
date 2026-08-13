//array destructing
// const [hewanPertama] = ["kucing","kuda","ayam"]
// console.log(hewanPertama);
// const [ , , hewanKetiga] = ["kucing","kuda","ayam"]
// console.log(hewanKetiga);

//object destructing
// const {topping, jenisBeras, bumbu} = {
//     topping : "ayam suir",
//     jenisBeras: "beras padi",
//     bumbu :["kecap", "sambal", "saos", "kerupuk"]
// }
// console.log(topping,jenisBeras, bumbu[1]);

//spread operator
// const makanan = ['nasi goreng', 'mie ayam', 'sate padang'];
// const minuman = ['es teh', 'es jeruk'];

// const menu = [...makanan, ...minuman];
// console.log(menu.join(', '));

//mengambuk sisa elemen pada array
// const buahBuahan = ['jeruk', 'mangga', 'pisang', 'alpukat'];
// const [buahPertama, ...buahLainnya] = buahBuahan;
// console.log(buahLainnya.join(', '))

// function rutePerjalanan(...args) {
//     let [kotaAwal, ...kotaLanjutan] = args;
//     let [kotaTujuan, ...kotaSinggahan] = kotaLanjutan.reverse(); //tangerang, bekasi, bandung, bogor --> tangerang --> bekasi, bandung, bogor
//     console.log(`melewati ${args.length} kota`);
//     console.log(`mulai dari ${kotaAwal}`);
//     console.log(`dengan tujuan akhir ke ${kotaTujuan}`);
//     console.log(`singgah ${kotaSinggahan.length} kali diantaranya`);
// }
// rutePerjalanan('Jakarta', 'Bogor', 'Bandung', 'Bekasi', 'Tangerang');

//spread operator pada object
// const makanPagi = {
//     sarapan: 'nasi uduk',
//     makanSiang: 'nasi padang',
// }
// const makanMalam = 'mie ayam';
// const menuMakanan = {
//     ...makanPagi,
//     makanMalam,
// }
// console.log(menuMakanan);

//first class function



