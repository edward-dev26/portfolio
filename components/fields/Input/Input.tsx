import { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.scss';

type PropsType = {
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
};

const Input: React.FC<PropsType> = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
