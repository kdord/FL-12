let totalPrize = 0;
let maxNum = 8;
let counter = 1;
let prize;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const MAX_NUM_DELTA = 4;

let doYouWant = confirm('Do you want to play a game?');
if (!doYouWant) {
  alert('You did not become a billionaire, but can');
}
do {
  if (counter !== 1) {
    firstPrize *= TWO;
    secondPrize *= TWO;
    thirdPrize *= TWO;
  }
  let rightAnswer = Math.round(Math.random() * maxNum);
  let attemptsLeft = 3;
  let game = true;
  do {
    switch (attemptsLeft) {
      case THREE: {
        prize = firstPrize;
        break;
      }
      case TWO: {
        prize = secondPrize;
        break;
      }
      case ONE: {
        prize = thirdPrize;
        break;
      }
      default:
        break;
    }

    let answer = prompt(
      `Choose a roulette pocket number from 0 to ${maxNum}\n` +
        `Attempts left: ${attemptsLeft}\n` +
        `Total prize: ${totalPrize}\n` +
        `Possible prize on current attempt: ${prize}
     `
    );
    if (answer === null) {
      game = false;
      doYouWant = false;
    } else if (Number(answer) === rightAnswer) {
      totalPrize += prize;

      maxNum += MAX_NUM_DELTA;
      counter += ONE;
      game = false;
      doYouWant = confirm(
        `Congratulation, you won! Your prize is ${totalPrize}$. Do you want continue?`
      );
    } else {
      attemptsLeft -= ONE;
    }

    if (attemptsLeft === 0) {
      game = false;
      doYouWant = confirm(
        `Thank you for your participation. Your prize is: ${totalPrize}$. Do you want to play again? `
      );
    }
  } while (game);
} while (doYouWant);
