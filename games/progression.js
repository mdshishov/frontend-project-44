import { getRandom, game } from '../src/index.js';

const getProgression = () => {
  const progressionLength = getRandom(15, 5);
  const firstElement = getRandom(20);
  const difference = getRandom(10);
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(firstElement + difference * i);
  }

  return result;
};

const generateQuestionAndAnswer = () => {
  const progression = getProgression();

  const positionToGuess = getRandom(progression.length - 1, 0);
  const correctAnswer = `${progression[positionToGuess]}`;

  progression[positionToGuess] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => {
  const startMessage = 'What number is missing in the progression?';
  game(startMessage, generateQuestionAndAnswer);
};

export default progressionGame;
