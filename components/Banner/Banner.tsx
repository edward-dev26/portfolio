import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        Do not focus on <span>numbers</span>. Focus on doing what you do{' '}
        <span>best</span>
      </h1>
      <div className={styles.description}>
        <p>
          The quality of the work I have done is very important to me, so I
          provide clean code and a high-quality product.
        </p>
        <p>
          My goal is to provide the best services on the market and make the
          life of my clients a little easier.
        </p>
      </div>
    </div>
  );
};

export default Banner;
