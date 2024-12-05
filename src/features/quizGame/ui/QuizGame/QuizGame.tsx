import { FC, useEffect, useState } from 'react';

import { quizQuestionsData } from '@/entities/quizQuestionsData/quizQuestionsData';
import { getFromLocalStorage, saveToLocalStorage } from '@/shared/lib';
import { CustomButton, ProgressBar } from '@/shared/ui';
import { GameResults } from '../GameResults';
import { QuizQuestion } from '../QuizQuestion';
import { Timer } from '../Timer/Timer';

import styles from './QuizGame.module.scss';

const totalQuestions = quizQuestionsData.length;

export const QuizGame: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(600);

  useEffect(() => {
    const savedData = getFromLocalStorage('quizData');

    if (savedData) {
      setCurrentQuestionIndex(savedData.currentQuestionIndex);
      setSelectedOption(savedData.selectedOption);
      setScore(savedData.score);
      setIsFinished(savedData.isFinished);
      setTimeLeft(savedData.timeLeft);
    }
  }, []);

  useEffect(() => {
    const dataToSave = {
      currentQuestionIndex,
      selectedOption,
      score,
      isFinished,
      timeLeft,
    };

    saveToLocalStorage('quizData', dataToSave);
  }, [currentQuestionIndex, isFinished, score, selectedOption, timeLeft]);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished]);

  const handleAnswerClick = () => {
    const currentQuestion = quizQuestionsData[currentQuestionIndex];
    const correctOption = currentQuestion.options.find(
      (option) => option.isCorrect
    );

    if (selectedOption === correctOption?.text) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setCurrentQuestionIndex(totalQuestions);
      setIsFinished(true);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
    setIsFinished(false);
    setTimeLeft(600);
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
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};
