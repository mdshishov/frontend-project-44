import { getRandom, game } from '../src/index.js';

const getGreatestCommonDivisor = (number1, number2) => {
  let result = 1;
  for (let i = 2; i <= Math.min(number1, number2); i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      result = i;
    }
  }

  return result;
};

const generateQuestionAndAnswer = () => {
  const number1 = getRandom(50);
  const number2 = getRandom(50);

  const question = `${number1} ${number2}`;
  const correctAnswer = `${getGreatestCommonDivisor(number1, number2)}`;

  return [question, correctAnswer];
};

const gcdGame = () => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  game(startMessage, generateQuestionAndAnswer);
};

export default gcdGame;
