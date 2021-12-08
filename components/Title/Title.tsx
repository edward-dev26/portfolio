import classNames from 'classnames';
import styles from './Title.module.scss';

type PropsType = {
  highlight?: string;
  text: string;
  className?: string;
};

const Title: React.FC<PropsType> = ({ text, highlight, className }) => {
  if (!highlight)
    return <h2 className={classNames(styles.title, className)}>{text}</h2>;

  const splittedText = text.split(highlight || '');

  return (
    <h2 className={classNames(styles.title, className)}>
      {splittedText[0]} <span>{highlight}</span> {splittedText[1]}
    </h2>
  );
};

export default Title;
