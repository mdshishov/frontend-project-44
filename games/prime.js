import { getRandom, game } from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const question = getRandom(50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const primeGame = () => {
  const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(startMessage, generateQuestionAndAnswer);
};

export default primeGame;
