let input;
const numbers = [];
let total = 0;

const mainFunc = function () {
  let i;
  do {
    input = prompt("Another one number");
    numbers.push(Number(input));
  } while (input !== null);
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return alert(`Общая сумма чисел равна ${total}`);
};

mainFunc();