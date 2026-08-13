interface PropTypes {
    label: string,
    id: string,
    type: string,
    name: string,
    onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void,
}


const Input = (props : PropTypes) => {
    const {label, id, type = 'text', name, onChange} = props;

    return (
        <div>
            <label htmlFor={id}>
                {label}
                <input type={type} id={id} name={name} onChange={onChange} />
            </label>
        </div>
    )
}

export default Input;