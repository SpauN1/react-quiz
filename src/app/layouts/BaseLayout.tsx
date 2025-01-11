import { createTheme, MantineProvider } from '@mantine/core';

import { QuizPage } from '@/pages/quizPage';

import '@mantine/core/styles.css';
import '../styles/global.scss';

const theme = createTheme({});

function BaseLayout() {
  return (
    <MantineProvider theme={theme}>
      <div className="wrapper">
        <div className="content">
          <QuizPage />
        </div>
      </div>
    </MantineProvider>
  );
}

export default BaseLayout;
