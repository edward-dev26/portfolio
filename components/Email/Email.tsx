import styles from './Email.module.scss';

const Email = () => {
  const email = 'eshvetsov@gmail.com';

  return (
    <div className={styles.email}>
      <div className={styles.email__bg}>GET IN TOUCH</div>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default Email;
