export interface IQuizGameState {
  currentQuestionIndex: number;
  selectedOption: string;
  correctAnswer: number;
  isFinished: boolean;
  timeLeft: number;
}
