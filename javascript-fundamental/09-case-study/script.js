let allMenu = [];
// fetch('https://wpu-cafe.vercel.app/api/menu')
//     .then((res) => res.json())
//     .then((data) => {
//         const result = data.data;
//         allMenu = result;
//         displayMenu(allMenu);
//     });
const getMenuData = async () => {
    try {
        const response = await fetch('https://wpu-cafe.vercel.app/api/menu');
        const result = await response.json();
        const data = result.data;
        allMenu = data;
        displayMenu(allMenu);
    } catch (error) {
        console.error(error);
    }
} 


function displayMenu(menu) {
    const menuList = document.querySelector('.menu-grid');
    menuList.innerHTML = '';

    menu.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const image = document.createElement('img');
        image.src = item.image_url;
        image.alt = item.name;
        card.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = item.name;
        card.appendChild(name);

        menuList.appendChild(card);
    })
}

getMenuData()
    