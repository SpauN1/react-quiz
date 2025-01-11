import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quizQuestionsData } from '@/entities/quizQuestionsData/quizQuestionsData';
import { getFromLocalStorage, saveToLocalStorage } from '@/shared/lib';
import { CustomButton, ProgressBar } from '@/shared/ui';
import { GameResults } from '../GameResults';
import { QuizQuestion } from '../QuizQuestion';
import { Timer } from '../Timer/Timer';

import { selectedQuizGame } from '../../model/selectors';
import {
  decrementTime,
  finishGame,
  incrementCorrectAnswer,
  restartGame,
  setCurrentQuestionIndex,
  setSelectedOption,
  setTimeLeft,
} from '../../model/slice';

import styles from './QuizGame.module.scss';

const totalQuestions = quizQuestionsData.length;

export const QuizGame: FC = () => {
  const dispatch = useDispatch();
  const {
    currentQuestionIndex,
    selectedOption,
    isFinished,
    correctAnswer,
    timeLeft,
  } = useSelector(selectedQuizGame);

  useEffect(() => {
    const savedData = getFromLocalStorage('quizData');

    if (savedData) {
      dispatch(setCurrentQuestionIndex(savedData.currentQuestionIndex));
      dispatch(setSelectedOption(savedData.selectedOption));
      dispatch(incrementCorrectAnswer(savedData.correctAnswer));
      dispatch(finishGame(savedData.isFinished));
      dispatch(setTimeLeft(savedData.timeLeft));
    }
  }, [dispatch]);

  useEffect(() => {
    const dataToSave = {
      currentQuestionIndex,
      selectedOption,
      correctAnswer,
      isFinished,
      timeLeft,
    };

    saveToLocalStorage('quizData', dataToSave);
  }, [
    currentQuestionIndex,
    isFinished,
    correctAnswer,
    selectedOption,
    timeLeft,
  ]);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timerId = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      dispatch(finishGame());
    }
  }, [timeLeft, isFinished, dispatch]);

  const handleAnswerClick = () => {
    const currentQuestion = quizQuestionsData[currentQuestionIndex];
    const correctOption = currentQuestion.options.find(
      (option) => option.isCorrect
    );

    if (selectedOption === correctOption?.text) {
      dispatch(incrementCorrectAnswer());
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      dispatch(setSelectedOption(''));
    } else {
      dispatch(setCurrentQuestionIndex(totalQuestions));
      dispatch(finishGame());
    }
  };

  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOption(option));
  };

  const handleRestart = () => {
    dispatch(restartGame());
  };

  const progressValue = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>ТЕСТИРОВАНИЕ</h1>
        <Timer timeLeft={timeLeft} />
      </header>

      <ProgressBar value={progressValue} />
      {!isFinished ? (
        <>
          <QuizQuestion
            question={quizQuestionsData[currentQuestionIndex]}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
          />
          <CustomButton onClick={handleAnswerClick} disabled={!selectedOption}>
            Ответить
          </CustomButton>
        </>
      ) : (
        <GameResults
          correctAnswer={correctAnswer}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};
