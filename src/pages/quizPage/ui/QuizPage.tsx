import { FC } from 'react';

import { QuizGame } from '@/features/quizGame';
import { ThemeSwitcher } from '@/features/themeSwitcher';

import styles from './QuizPage.module.scss';

const QuizPage: FC = () => {
  return (
    <main className={styles.main}>
      <ThemeSwitcher />
      <QuizGame />
    </main>
  );
};

export default QuizPage;
