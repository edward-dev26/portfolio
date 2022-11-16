import styles from '../styles/About.module.scss';
import { GetStaticProps, NextPage } from 'next';
import { ISkill } from '../interfaces';
import profilePhoto from '../public/profile-photo.png';
import { skills } from '../data/skills';
import { getTitle } from '../utils/getTitle';

import Image from 'next/image';
import Head from 'next/head';
import Email from '../components/Email/Email';
import Skills from '../components/Skills/Skills';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';

type PropsType = {
  skills: Array<ISkill>;
};

const About: NextPage<PropsType> = ({ skills }) => {
  return (
    <div className={styles.about}>
      <Head>
        <title>{getTitle('About')}</title>
      </Head>
      <Title
        text='Eduard is a professional developer working on modern
        projects'
        highlight='professional'
      />
      <div className={styles.content}>
        <div className={styles.photo}>
          <div className={styles.image}>
            <Image
              src={profilePhoto}
              alt='Profile photo'
              objectFit='fill'
              objectPosition='center'
              priority
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.aboutMe}>
            <h3>About me</h3>
            <p>
              JavaScript Engineer with 3 years of web development experience. Always striving to create a quality
              product and clean and easily extensible code. Worked on different international projects using the SCRUM
              methodology. Can create high-performance single-page applications from scratch, following all stages of
              development such as designing the application&apos;s architecture, unit, and end-to-end test coverage,
              building, and deployment using one of the modern JavaScript frameworks such as React, VueJS, and Angular.
            </p>
            <p>
              Also, have experience in backend development on the NodeJS platform. Developed RestAPIs using ExpressJS
              and AWS serverless approach.
            </p>
            <p>
              I prefer a healthy lifestyle like gym workout, jogging, biking and
              so on. Also I like reading and self-development practices. I love
              traveling and I’m going to visit the most beautiful places on our
              planet.
            </p>
            <p>
              The quality of the work I have done is very important to me, so I
              provide clean code and a high-quality product. My goal is to
              provide the best services on the market and make the life of my
              clients a little easier.
            </p>
          </div>
          <div className={styles.skills}>
            <Skills skills={skills} />
          </div>
          <div className={styles.buttons}>
            <Button>
              <a
                href='https://docs.google.com/document/d/1swRNz8lS-kTUfPgIa2CXltqnbNBBP4indarUwE9mQn0/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                View CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Email />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      skills
    }
  };
};

export default About;
