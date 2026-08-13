import Button from "../../ui/Button";

// type makananProps = {
//         id: number,
//         name: string,
//         price: number,
//     }

const makanan = [
        {
            id: 1,
            name: "Fried Chicken",
            price: 10000
        },
        {
            id: 2,
            name: "Noodle",
            price: 12000
        },
    ]

const Home = () => {
    const showButton = true;
    return (
        <div>
           <div>
             <h1>Hello World</h1>
            {showButton === true ? (
                <Button buttonType="submit">Ini Button true</Button>
            ) : <Button buttonType="button">Ini Button false</Button>}

            {showButton && (
                <Button >Ini Button Components 2</Button>
            )}
            
           </div>
           <div>
                <ul>
                    {makanan.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home;