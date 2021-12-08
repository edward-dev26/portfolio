import { useRouter } from 'next/dist/client/router';
import styles from './Header.module.scss';
import { ILink } from '../../interfaces';
import classNames from 'classnames';

import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const router = useRouter();

  const links: Array<ILink> = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  const isLinkActive = (href: string) => router.pathname === href;

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">Shvetsov.</Link>
      </h1>
      <ul className={styles.navbar}>
        {links.map((link) => (
          <li
            key={link.href}
            className={classNames({
              [styles.active]: isLinkActive(link.href),
            })}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <MobileMenu links={links} />
    </div>
  );
};

export default Header;
