import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const evenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numberToGuess = Math.round(1 + Math.random() * 49);
    console.log(`Question: ${numberToGuess}`);
    const answer = readlineSync.question('Your answer: ');
    
    const correctAnswer = numberToGuess % 2 === 0 ? 'yes' : 'no';
    if (answer !== correctAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;