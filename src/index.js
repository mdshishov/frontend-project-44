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

const game = (startMessage, questionsAndAnswers) => {
  const name = greetingWithNameReturn();
  console.log(startMessage);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = questionsAndAnswers[i];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export { greetingWithNameReturn, getRandom, game };
