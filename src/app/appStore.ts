import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { quizGameSlice } from '@/features/quizGame';

export const store = configureStore({
  reducer: {
    quizGame: quizGameSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
