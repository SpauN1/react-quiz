import { FC } from 'react';

import styles from './Timer.module.scss';

interface ITimer {
  timeLeft: number;
}

export const Timer: FC<ITimer> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.timer}>
      <div className={styles.time}>
        {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </div>
    </div>
  );
};
