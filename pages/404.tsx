import styles from '../styles/NotFound.module.scss';
import { NextPage } from 'next';
import { getTitle } from '../utils/getTitle';
import { useRouter } from 'next/dist/client/router';

import Button from '../components/Button/Button';
import Head from 'next/head';

const NotFound404: NextPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.notFound}>
      <Head>
        <title>{getTitle('Page Not Found')}</title>
      </Head>
      <h2>404 Error</h2>
      <h3>
        The page you <span>requested</span> was not found
      </h3>
      <Button onClick={goHome}>Go Home</Button>
    </div>
  );
};

export default NotFound404;
