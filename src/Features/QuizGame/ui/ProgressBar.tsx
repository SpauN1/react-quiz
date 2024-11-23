import { FC } from 'react';
import { Progress } from '@mantine/core';

export const ProgressBar: FC = () => {
  return <Progress radius="xl" size="lg" mb="lg" value={10} />;
};
