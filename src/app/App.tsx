import { createTheme, MantineProvider } from '@mantine/core';

import { QuizPage } from '../pages/quizPage';

import '@mantine/core/styles.css';
import './styles/global.scss';

const theme = createTheme({});

function App() {
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

export default App;
