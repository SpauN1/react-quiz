import { FC, useEffect, useState } from 'react';

import styles from './Timer.module.scss';

export const Timer: FC = () => {
  const [time, setTime] = useState<string>('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer}>
      <div className={styles.time}>{time}</div>
    </div>
  );
};
