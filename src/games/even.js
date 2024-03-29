import { getRandom, runGame } from '../index.js';

const generateQuestionAndAnswer = () => {
  const question = getRandom(50);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

const evenGame = () => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(startMessage, generateQuestionAndAnswer);
};

export default evenGame;
