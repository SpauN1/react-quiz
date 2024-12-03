import { FC } from 'react';
import { Progress } from '@mantine/core';

interface IProgressBar {
  value: number;
}

export const ProgressBar: FC<IProgressBar> = ({ value }) => {
  return <Progress radius="xl" size="lg" mb="lg" value={value} />;
};
