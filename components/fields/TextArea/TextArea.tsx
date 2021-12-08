import classNames from 'classnames';
import styles from './TextArea.module.scss';

type PropsType = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  className?: string;
};

const TextArea: React.FC<PropsType> = ({
  name,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames(styles.textarea, className)}
    />
  );
};

export default TextArea;
