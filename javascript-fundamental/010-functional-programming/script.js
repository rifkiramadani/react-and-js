// const showGreeting = function(message) {
//     return message;
// }

// const greeting = showGreeting("Selamat Pagi!");

// console.log(greeting);


// const user = {
//     username: "Muhammad Rifky Ramadani",
//     log(message) {
//         return `${this.username} - ${message}`
//     },
//     greeting(greeting) {
//         return greeting;
//     },
//     getUsername(username) {
//         return this.username
//     }
// }

// console.log(user.getUsername());
// console.log(user.greeting('Halo Selamat Pagi!'));
// console.log(user.log('Menyapa Selamat Pagi!'));

// const showMessage = (message) => `Halo ${message}`;
// console.log(showMessage('selamat pagi'));



// const userLogs = function (username) {
//     return (message) => {
//         return `${username} - ${message}`;
//     }
// }

// const log = userLogs('Muhammad Rifky Ramadani')//('learn javascript');
// console.log(log('learn javascript'));

// const color = {
//     color: 'blue',
//     rating: 0,
// }

// console.log('before mutate -> ', color.rating );

// //mutable
// // const rateColor = (color, rating) => {
// //     color.rating = rating
// //     return color;
// // }

// //immutable
// const rateColor = (color, rating) => {
//     //di object yang berbeda (copy paste object rating ke dalam object baru)
//     const newColor = Object.assign({}, {
//         // rating: rating,
//         color,
//         rating
//     })

//     return newColor;
// }

// const rating = rateColor(color, 5).rating;
// console.log('mutate rating : ', rating);
// console.log('after murate -> rating : ', color.rating);

// //pure function
// const userRifky = {
//     name: "rifky",
//     allowWrite: true,
//     allowRead: true,
// }

// // const enablePermission = (user) => {
// //     user.allowWrite = false;
// //     user.allowRead = false;
// //     return user;
// // }

// //spread operator
// const enablePermission = (user) => {
//     return {
//         ...user,
//         allowWrite: false,
//         allowRead: false,
//     }
// }

// console.log('before -> ', userRifky);
// console.log('enable: ',enablePermission(userRifky));
// console.log('after -> ', userRifky);

//data transformation
const products = [
  {
    id: "1",
    name: "shirt",
    price: 1000,
    qty: 3,
  },
  {
    id: "2",
    name: "kemeja",
    price: 1500,
    qty: 5, 
  },
  {
    id: "1",
    name: "celana panjang",
    price: 1800,
    qty: 8,
  }, 
];

//mapping
const productsSummary = products.map((product) => {
    return {
        summary : `${product.name}, harganya ${product.price}, jumlahnya ${product.qty}`
    }
})

console.log('origin', products);
console.log(productsSummary);
console.log('after', products);

//filter  
const filteredProducts = products.filter((product) =>  product.qty > 3);
console.log(filteredProducts);

//reduce
const totalPrice = products.reduce((prev, item) => {
    const total = item.qty * item.price + prev;
    return total;
}, 0)
console.log("total price", totalPrice);