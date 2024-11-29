import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Button } from '@mantine/core';

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  handleAnswerClick: () => void;
}

export const CustomButton: FC<ICustomButton> = ({
  children,
  handleAnswerClick,
  disabled = false,
}) => {
  return (
    <Button
      size="sm"
      onClick={handleAnswerClick}
      disabled={disabled}
      style={{
        '--button-padding-x': '2.5rem',
      }}
      variant="filled"
      color="teal"
      radius="lg"
    >
      {children}
    </Button>
  );
};
