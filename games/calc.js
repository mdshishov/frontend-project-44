import { getRandom, game } from '../src/index.js';

const generateQuestionsAndAnswers = () => {
  const result = [];

  for (let i = 0; i < 3; i += 1) {
    let question = '';
    let correctAnswer = '';

    const number1 = getRandom(20, 0);
    const number2 = getRandom(20, 0);
    const operator = getRandom(2, 0);

    switch (operator) {
      case 0:
        question = `${number1} + ${number2}`;
        correctAnswer = `${number1 + number2}`;
        break;
      case 1:
        question = `${number1} - ${number2}`;
        correctAnswer = `${number1 - number2}`;
        break;
      case 2:
        question = `${number1} * ${number2}`;
        correctAnswer = `${number1 * number2}`;
        break;
      default:
        throw new Error('Error!');
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
