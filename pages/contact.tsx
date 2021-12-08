import styles from '../styles/Contact.module.scss';
import { NextPage } from 'next';
import contactUs from '../public/contact-us.jpeg';
import { getTitle } from '../utils/getTitle';

import Image from 'next/image';
import EmailForm from '../components/EmailForm/EmailForm';
import Head from 'next/head';
import Title from '../components/Title/Title';

const Contact: NextPage = () => {
  const email = 'eshvetsov68@gmail.com';
  const phone = '+38 050 918 3691';
  const address = 'Kharkiv, Ukraine';

  return (
    <div className={styles.contact}>
      <Head>
        <title>{getTitle('Contact')}</title>
      </Head>
      <Title
        text="Interested in working with me? Get in touch"
        highlight="working"
        className={styles.title}
      />
      <div className={styles.form}>
        <EmailForm />
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={contactUs} alt="Contact us" />
        </div>
        <div className={styles.info}>
          <div className={styles.info__section}>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </div>
          <div className={styles.info__section}>
            <h4>Email</h4>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className={styles.info__section}>
            <h4>Address</h4>
            <p>
              <a
                href="https://www.google.com/maps/place/Kharkiv,+Kharkiv+Oblast/@49.994507,36.145742,11z/data=!3m1!4b1!4m5!3m4!1s0x4127a09f63ab0f8b:0x2d4c18681aa4be0a!8m2!3d49.9935!4d36.230383"
                target="_blank"
                rel="noreferrer"
              >
                {address}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
