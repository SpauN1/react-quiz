import { FC } from 'react';

import { Timer } from '../Timer/Timer';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ИГРА</h1>
      <Timer />
    </header>
  );
};

export default Header;
