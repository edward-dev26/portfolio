import styles from './MobileMenu.module.scss';
import { SyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { ILink } from '../../interfaces';

import Link from 'next/link';
import BurgerButton from '../BurgerButton/BurgerButton';

type PropsType = {
  links: Array<ILink>;
};

const MobileMenu: React.FC<PropsType> = ({ links }) => {
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive((isActive) => !isActive);

  useEffect(() => {
    const hideMenu = () => setIsMenuActive(false);

    window.addEventListener('click', hideMenu);

    return () => {
      window.removeEventListener('click', hideMenu);
    };
  }, []);

  useEffect(() => {
    setIsMenuActive(false);
  }, [router.pathname]);

  const isLinkActive = (href: string) => router.pathname === href;

  const handleMobileMenuClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.mobileMenu} onClick={handleMobileMenuClick}>
      <BurgerButton isActive={isMenuActive} onClick={toggleMenu} />
      <ul
        className={classNames(styles.menu, {
          [styles.menu_active]: isMenuActive,
        })}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className={classNames({ [styles.active]: isLinkActive(link.href) })}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
