import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { GetStaticProps } from 'next';
import { IProject } from '../interfaces';
import { projects } from '../data/projects';
import { getTitle } from '../utils/getTitle';

import Banner from '../components/Banner/Banner';
import Portfolio from '../components/Portfolio/Portfolio';
import Email from '../components/Email/Email';
import Head from 'next/head';

type PropsType = {
  projects: Array<IProject>;
};

const Home: NextPage<PropsType> = ({ projects }) => {
  return (
    <div className={styles.home}>
      <Head>
        <title>{getTitle('Home')}</title>
      </Head>
      <Banner />
      <Portfolio projects={projects} />
      <Email />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      projects,
    },
  };
};

export default Home;
