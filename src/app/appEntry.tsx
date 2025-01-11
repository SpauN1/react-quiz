import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './appStore.ts';

import BaseLayout from './layouts/BaseLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </MantineProvider>
);
