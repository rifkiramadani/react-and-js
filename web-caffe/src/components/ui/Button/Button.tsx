import type { ReactNode } from "react";

interface PropTypes {
    children : ReactNode,
    buttonType? : 'button' | 'submit',
}

const Button = (props : PropTypes) => {
    const {children, buttonType = 'button'} = props;
    return (
        <button type={buttonType}>{children}</button>
    )
}

export default Button;