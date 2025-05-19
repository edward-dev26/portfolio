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
  const phone = '+48 881 533 716';
  const address = 'Warsaw, Poland';

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
                href="https://maps.app.goo.gl/iBXNn4gSEHuyufsH6"
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
