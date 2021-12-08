import classNames from 'classnames';
import styles from './Button.module.scss';

type PropsType = {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<PropsType> = ({
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
