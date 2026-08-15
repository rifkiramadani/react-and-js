import styles from './Button.module.css';

interface PropTypes {
    type?: 'button' | 'submit' | 'reset',
    children: string,
    onClick?: () => void,
    className?: string,
    color?: 'primary' | 'secondary',
}

const Button = (props: PropTypes) => {
    const {type = "button",  children , className, color = 'primary'} = props;

    return (
        <button 
            className={`${styles.button} ${styles[`button-${color}`]} ${className}`}
            type={type}
            color={color}
            {...props}
        >{children}
        </button>
    )
}

export default Button;