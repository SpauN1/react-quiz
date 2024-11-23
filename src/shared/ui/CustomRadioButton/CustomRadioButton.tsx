import { FC } from 'react';
import { Radio, Group } from '@mantine/core';

export const CustomRadioButton: FC = () => {
  return (
    <Radio.Group
      name="favoriteFramework"
      label="Select your favorite framework/library"
      size='xl'

    >
      <Group mt="lg" mb="lg">
        <Radio value="react" label="React" size="md" color="teal" />
        <Radio value="svelte" label="Svelte" size="md" color="teal" />
        <Radio value="ng" label="Angular" size="md" color="teal" />
      </Group>
    </Radio.Group>
  );
};
