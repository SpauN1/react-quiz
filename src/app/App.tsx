import { QuizPage } from '../pages/QuizPage';

import '@mantine/core/styles.css';
import './styles/global.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <QuizPage />
      </div>
    </div>
  );
}

export default App;
