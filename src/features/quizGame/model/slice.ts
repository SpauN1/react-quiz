// model/slice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuizGameState } from './type';

const initialState: IQuizGameState = {
  currentQuestionIndex: 0,
  selectedOption: '',
  correctAnswer: 0,
  timeLeft: 600,
  isFinished: false,
};

export const quizGameSlice = createSlice({
  name: 'quizGame',
  initialState,
  reducers: {
    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload;
    },
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setTimeLeft(state, action: PayloadAction<number>) {
      state.timeLeft = action.payload;
    },
    incrementCorrectAnswer: (state) => {
      state.correctAnswer += 1;
    },
    finishGame(state) {
      state.isFinished = true;
    },
    decrementTime(state) {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
    restartGame(state) {
      state.currentQuestionIndex = 0;
      state.selectedOption = '';
      state.correctAnswer = 0;
      state.isFinished = false;
      state.timeLeft = 600;
    },
  },
});

export const {
  setCurrentQuestionIndex,
  setSelectedOption,
  restartGame,
  finishGame,
  incrementCorrectAnswer,
  setTimeLeft,
  decrementTime,
} = quizGameSlice.actions;

export default quizGameSlice.reducer;
