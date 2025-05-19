import styles from './Layout.module.scss';
import { useMediaQuery } from 'react-responsive';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout: React.FC = ({ children }) => {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1500px)',
  });

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
      {isBigScreen && (
        <div className={styles.label}>
          <p>Professional Software Engineer since 2019</p>
        </div>
      )}
    </div>
  );
};

export default Layout;
