'use strict';

// Task 1
function checkNumber(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

let result = checkNumber(10);
console.log(result);

// Task2
function createSentence(name) {
  return `Hello dear ${name}, we are glad to see you!`;
}
let greeting = createSentence('Linda');
console.log(greeting);

// Task3
function FizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
}

let newResult = FizzBuzz(15);
console.log(newResult);

// Task4
function factorialize(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
}
let output = factorialize(5);
console.log(output);

// Task5
function checkValues(val) {
  if (val > 0) {
    return 'Positive';
  }
  if (val < 0) {
    return 'Negative';
  }
  if (val === 0) {
    return 'Zero';
  }
}
let receivedValue = checkValues(100);
console.log(receivedValue);

// Task6
let firstName = 'Amanda';
let lastName = 'Johns';
function joinString() {
  return firstName + ' ' + lastName;
}
let newString = joinString();
console.log(newString);

// Task 7
function reminder(x, y) {
  return x % y !== 0;
}

let calculation = reminder(20, 5);
console.log(calculation);

// Task8
let strinG = 'Amarante';
function character() {
  let lastCharacter = strinG[strinG.length - 1];
  return lastCharacter;
}

let stringCharacter = character();
console.log(stringCharacter);

// Task 9
let a = 2;
let b = 12;

function largeNumber() {
  return Math.max(a, b);
}
let lgNumber = largeNumber();
console.log(lgNumber);

// Task 10
function calculateTotal(price) {
  if (price > 100 && price <= 200) {
    let discounted = price - price * 0.1;
    return discounted;
  }

  if (price > 200) {
    let discounted = price - price * 0.2;
    return discounted;
  }
}
let newPrice = calculateTotal(300);
console.log(newPrice);

// Task 11
function square(numbeR) {
  return (numbeR *= numbeR);
}
let newAmount = square(5);
console.log(newAmount);

// Task 12
let word = 'Good job';

function newWord() {
  return word + '!';
}
let neword = newWord();
console.log(neword);

// Task13
let texT = 'Amarante';
function getCharacter() {
  let secondLetter = texT[1];
  return secondLetter;
}

let textNew = getCharacter();
console.log(textNew);

// Task 14
let userName;
function returnBoolean() {
  if (userName === '') {
    return true;
  } else {
    return false;
  }
}
userName = '';
let newRes = returnBoolean();
console.log(newRes);

// Task 15
let wordNew = 'Amarante';
function checkLetter() {
  let firstLetter = wordNew[0].toLocaleLowerCase().toLocaleUpperCase();
  console.log(firstLetter);
  if (firstLetter === 'A') {
    return true;
  } else {
    return false;
  }
}

let frstL = checkLetter();
console.log(frstL);
