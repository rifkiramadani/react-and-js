import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface PropTypes {
    children : ReactNode,
    type? : 'button' | 'submit',
    onClick? : () => void
}

const Button = (props : PropTypes) => {
    const {children, type = 'button', onClick} = props;
    return (
        <button
            className={styles.button} 
            // style={{backgroundColor: "salmon", padding: 5, borderRadius: 5, color: "white"}} 
            type={type}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button;