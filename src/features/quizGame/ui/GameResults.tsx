import { FC } from 'react';

import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
interface IGameResults {
  correctAnswer: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const GameResults: FC<IGameResults> = ({
  correctAnswer,
  totalQuestions,
  onRestart,
}) => {
  return (
    <div>
      <h2>Игра окончена!</h2>
      <p>
        Вы ответили на {correctAnswer} из {totalQuestions} вопросов.
      </p>
      <CustomButton onClick={onRestart}>Попробовать снова</CustomButton>
    </div>
  );
};
