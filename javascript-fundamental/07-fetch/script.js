const user = fetch("https://api.github.com/users/rifkiramadani ");
user.then((res) => 
    res.json()
)
.then((data) => {
    console.log(`Nama  : `, data.name)
    console.log(`Followers : `, data.followers)
})
.catch((error) => {
    console.error(`Error: `, error)
})
// .then((data) => {
//     console.log(data);
// })