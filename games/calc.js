import { getRandom, game } from '../src/index.js';

const generateQuestionsAndAnswers = () => {
  const result = [];

  for (let i = 0; i < 3; i += 1) {
    let question = '';
    let correctAnswer = '';

    const number1 = getRandom(20, 0);
    const number2 = getRandom(20, 0);
    const operator = getRandom(2, 0);

    if (operator === 0) {
      question = `${number1} + ${number2}`;
      correctAnswer = `${number1 + number2}`;
    } else if (operator === 1) {
      question = `${number1} - ${number2}`;
      correctAnswer = `${number1 - number2}`;
    } else {
      question = `${number1} * ${number2}`;
      correctAnswer = `${number1 * number2}`;
    }

    result.push([question, correctAnswer]);
  }

  return result;
};

const calcGame = () => {
  const startMessage = 'What is the result of the expression?';
  game(startMessage, generateQuestionsAndAnswers());
};

export default calcGame;
