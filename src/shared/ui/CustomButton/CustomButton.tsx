import { FC } from 'react';
import { Button } from '@mantine/core';

export const CustomButton: FC = () => {
  return (
    <Button
      style={{
        '--button-padding-x': '2.5rem',
      }}
      variant="filled"
      color="teal"
      size="sm"
      radius="lg"
    >
      Button
    </Button>
  );
};
