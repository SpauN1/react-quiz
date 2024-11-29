import { FC } from 'react';

import { CustomRadioButton } from '@/shared/ui/CustomRadioButton/CustomRadioButton';

interface IQuizQuestion {
  question: { text: string; options: { text: string; isCorrect: boolean }[] };
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

export const QuizQuestion: FC<IQuizQuestion> = ({
  question,
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <div>
      <div>{question.text}</div>
      <CustomRadioButton
        options={question.options.map((option) => option.text)}
        selectedOption={selectedOption}
        onOptionSelect={onOptionSelect}
      />
    </div>
  );
};
