import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        Delivering high-quality <span>code</span> & real-world <span>results</span>
      </h1>
      <div className={styles.description}>
        <p>
          Always striving to build high-quality products with clean, well-structured, and easily extensible code.
        </p>
        <p>
          I build reliable applications that solve real problems and make life easier for users.
        </p>
      </div>
    </div>
  );
};

export default Banner;
