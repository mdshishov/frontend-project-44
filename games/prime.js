import { getRandom, game } from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionsAndAnswers = () => {
  const result = [];

  for (let i = 0; i < 3; i += 1) {
    const question = getRandom(50);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    result.push([question, correctAnswer]);
  }

  return result;
};

const primeGame = () => {
  const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(startMessage, generateQuestionsAndAnswers());
};

export default primeGame;
