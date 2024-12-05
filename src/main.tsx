import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
