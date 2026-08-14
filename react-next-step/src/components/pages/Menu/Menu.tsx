import { useParams,Link } from "react-router-dom";
import useCounterStore from "../../../stores/CounterStore";

const Menu = () => {
    const {id} = useParams();
    const {count, increment, decrement} = useCounterStore();
    return (
        <div>
            <h1>Menu</h1>
            <p>{id}</p>
            <Link to={'/'}>Home</Link>
            <br /> 
            <p>{count}</p>
            <br />
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Menu;