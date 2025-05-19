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
        text="Eduard is a Full Stack Engineer focused on building clean, scalable applications."
        highlight="Full Stack Engineer"
      />
      <div className={styles.content}>
        <div className={styles.photo}>
          <div className={styles.image}>
            <Image
              src={profilePhoto}
              alt="Profile photo"
              objectFit="fill"
              objectPosition="center"
              priority
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.aboutMe}>
            <h3>About me</h3>
            <p>
              Full Stack JavaScript Engineer with 5+ years of experience in building modern web applications.
              Comfortable working with frontend frameworks like React, Vue.js, and Angular, and backend technologies
              such as Express.js, NestJS, MongoDB, and PostgreSQL. Recently expanded my backend expertise by
              transitioning from Node.js to Ruby on Rails on a production project — quickly adapting and continuing to
              deliver full-stack features.
            </p>
            <p>
              Confident in both starting projects from scratch and maintaining existing codebases. Worked in large
              distributed teams as well as independently on full-stack features and applications. Always striving to
              create high-quality products with clean, well-structured, and easily extensible code.
            </p>
          </div>
          <div className={styles.skills}>
            <Skills skills={skills} />
          </div>
          <div className={styles.buttons}>
            <Button>
              <a
                href="https://docs.google.com/document/d/1swRNz8lS-kTUfPgIa2CXltqnbNBBP4indarUwE9mQn0/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
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
