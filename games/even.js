import { getRandom, game } from '../src/index.js';

const generateQuestionsAndAnswers = () => {
  const result = [];

  for (let i = 0; i < 3; i += 1) {
    const question = getRandom(50);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    result.push([question, correctAnswer]);
  }

  return result;
};

const evenGame = () => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(startMessage, generateQuestionsAndAnswers());
};

export default evenGame;
