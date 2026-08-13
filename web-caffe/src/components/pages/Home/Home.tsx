import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import styles from "./Home.module.css";
import Input from "../../ui/Input";

// const makanan = [
//         {
//             id: 1,
//             name: "Fried Chicken",
//             price: 10000
//         },
//         {
//             id: 2,
//             name: "Noodle",
//             price: 12000
//         },
//     ]

interface menuTypes {
        id: number,
        image_url: string,
        name: string,
        price: number,
        description: string,
    }

    
const Home = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>('');

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('https://wpu-cafe.vercel.app/api/menu')
            .then((response) => response.json())
            .then((result) => setMenus(result.data));
    }, [])

    const showButton = true;
    return (
        <main className={darkMode ? styles.dark : styles.light}>
           <div>
             <h1>Hello World</h1>
            {showButton === true ? (
                <Button buttonType="submit">Ini Button true</Button>
            ) : <Button buttonType="button">Ini Button false</Button>}

            {showButton && (
                <Button >Ini Button Components 2</Button>
            )}
            
           </div>
           <div className={styles.menu}>
                {menus.map((menu : menuTypes) => (
                    <div className={styles.item} key={menu.id}>
                        <img src={menu.image_url} alt={menu.name} className={styles.image} />
                        <h2>{menu.name}</h2>
                        <p>Price: $.{menu.price}</p>
                        <p>{menu.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <Input 
                    label="Masukkan Kalimat" 
                    id="#" 
                    name="name" 
                    type="text" 
                    onChange={(e) => {
                        setInputSearch(e.target.value);
                        console.log(inputSearch);
                    }}/>
            </div>
            <div>
                <Button onClick={() => setDarkMode(!darkMode)}>
                    {!darkMode ? 'Klik Untuk Mode Gelap' : 'Klik Untuk Mode Terang'}
                </Button>
            </div>
        </main>
    )
}

export default Home;