import { FC } from 'react';

import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
interface IGameResults {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const GameResults: FC<IGameResults> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  return (
    <div>
      <h2>Игра окончена!</h2>
      <p>
        Вы ответили на {score} из {totalQuestions} вопросов.
      </p>
      <CustomButton handleAnswerClick={onRestart}>
        Попробовать снова
      </CustomButton>
    </div>
  );
};
