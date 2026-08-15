import styles from "./Select.module.css";

interface Option {
  value: string;
  label: string;
}

interface PropTypes {
  label?: string;
  name: string;
  id: string;
  required?: boolean;
  className?: string;
  options: Option[];
}

const Select = (props: PropTypes) => {
  const { label, name, id, required = false, className, options } = props;
  return (
    <label htmlFor={label} className={styles.label}>
      {label}
      <select
        name={name}
        id={id}
        required={required}
        className={`${styles.select} ${className}`}
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
