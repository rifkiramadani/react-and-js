 //memberi delay dengan menggunakan setTimeout
// setTimeout(function() {
//     console.log("proses setelah 5 detik");
// }, 5000)

//event loop
// console.log('mulai');
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log('tombol di klik');
// })
// console.log('selesai');

//simple fetching api 
console.log('mulai');
fetch('https://wpu-cafe.vercel.app/api/menu')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const menu = data.data.map((menu) => menu.name);
        console.log(menu)
    })