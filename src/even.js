import readlineSync from 'readline-sync';

const greetingWithNameReturn = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandom = (endNum, startNum = 1) => {
  const result = Math.round(startNum + Math.random() * (endNum - startNum));
  return result;
};

const evenGame = () => {
  const name = greetingWithNameReturn();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numberToGuess = getRandom(50);
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
