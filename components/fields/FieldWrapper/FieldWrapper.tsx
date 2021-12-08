import classNames from 'classnames';
import styles from './FieldWrapper.module.scss';

type PropsType = {
  invalid?: boolean;
  invalidText?: string;
  className?: string;
};

const FieldWrapper: React.FC<PropsType> = ({
  children,
  invalid,
  invalidText,
  className,
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {children}
      {invalid && <div className={styles.invalidText}>{invalidText}</div>}
    </div>
  );
};

export default FieldWrapper;
