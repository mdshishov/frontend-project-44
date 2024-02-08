import readlineSync from 'readline-sync';

const greetingWithNameReturn = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandom = (endNum, startNum = 1) => {
  const result = Math.floor(startNum + Math.random() * (endNum - startNum + 1));
  return result;
};

const runGame = (startMessage, generateQuestionAndAnswer, roundCount = 3) => {
  const userName = greetingWithNameReturn();
  console.log(startMessage);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { greetingWithNameReturn, getRandom, runGame };
