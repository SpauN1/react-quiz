import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Button } from '@mantine/core';

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

export const CustomButton: FC<ICustomButton> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      size="sm"
      onClick={onClick}
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
