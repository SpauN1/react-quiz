import { FC } from 'react';
import { Radio, Stack } from '@mantine/core';

interface ICustomRadioButton {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

export const CustomRadioButton: FC<ICustomRadioButton> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <Radio.Group size="xl" aria-label="Выберите вариант" value={selectedOption}>
      <Stack mt="lg" mb="lg">
        {options.map((option) => (
          <Radio
            size="md"
            color="teal"
            tabIndex={0}
            key={option}
            value={option}
            label={option}
            checked={selectedOption === option}
            onChange={() => onOptionSelect(option)}
          />
        ))}
      </Stack>
    </Radio.Group>
  );
};
