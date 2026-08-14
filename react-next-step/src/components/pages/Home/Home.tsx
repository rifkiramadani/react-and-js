// import React, { useEffect, useState } from "react";
import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./Home.module.css";
import Input from "../../ui/Input";
import { useQuery } from "@tanstack/react-query";

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

interface itemTypes {
        id: number,
        image_url: string,
        name: string,
        price: number,
        description: string,
    }

    
const Home = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>('');

     const showButton = true;

    // const [menus, setMenus] = useState([]);
    // const [isLoading, setIsLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     fetch('https://wpu-cafe.vercel.app/api/menu')
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setMenus(result.data);
    //             setIsLoading(false);
    //         });
    // }, [])

    const {data, isLoading } = useQuery({
        queryKey: ['dataMenu'],
        queryFn: async () => {
           return await fetch('https://wpu-cafe.vercel.app/api/menu')
            .then((response) => response.json())
        }
    })

    // console.log(data);

    return (
        <main className={darkMode ? styles.dark : styles.light}>
           <div>
             <h1>Hello World</h1>
            {showButton === true ? (
                <Button type="submit">Ini Button true</Button>
            ) : <Button type="button">Ini Button false</Button>}

            {showButton && (
                <Button >Ini Button Components 2</Button>
            )}
            
           </div>
           {!isLoading ? (
                <div className={styles.menu}>
                {data?.data.map((item : itemTypes) => (
                    <div className={styles.item} key={item.id}>
                        <img src={item.image_url} alt={item.name} className={styles.image} />
                        <h2>{item.name}</h2>
                        <p>Price: $.{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
           ) : 'Loading...'}


           <br />
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