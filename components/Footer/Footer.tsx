import { useMemo } from 'react';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  const socialLinks = [
    {
      title: 'Tel',
      href: 'https://t.me/eshvetsov26',
      icon: faTelegramPlane,
    },
    {
      title: 'Ins',
      href: 'https://www.instagram.com/e.shvetsov_',
      icon: faInstagram,
    },
    {
      title: 'Lin',
      href: 'https://www.linkedin.com/in/ed-shvetsov26',
      icon: faLinkedinIn,
    },
  ];

  return (
    <div className={styles.footer}>
      <ul className={styles.social}>
        {socialLinks.map((link) => (
          <li key={link.href} className={styles.social__link}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <span className={styles.linkTitle}>{link.title}</span>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={link.icon} />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.copyright}>© {year} Eduard Shvetsov </div>
    </div>
  );
};

export default Footer;
