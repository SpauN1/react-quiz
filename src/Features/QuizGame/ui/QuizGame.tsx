import { FC } from 'react';

import { CustomButton } from '../../../shared/ui/CustomButton/CustomButton';
import { CustomRadioButton } from '../../../shared/ui/CustomRadioButton/CustomRadioButton';
import { ProgressBar } from './ProgressBar';
import Header from './Header/Header';

export const QuizGame: FC = () => {
  return (
    <>
      <Header />
      <ProgressBar />
      <CustomRadioButton />
      <CustomButton />
    </>
  );
};
