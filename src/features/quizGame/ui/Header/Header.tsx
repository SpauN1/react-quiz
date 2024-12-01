import { FC } from 'react';

import { Timer } from '../Timer/Timer';

import styles from './Header.module.scss';

interface IHeader {
  timeLeft: number;
}

const Header: FC<IHeader> = ({ timeLeft }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ТЕСТИРОВАНИЕ</h1>
      <Timer timeLeft={timeLeft} />
    </header>
  );
};

export default Header;
