'use strict';

const dateInfo = document.querySelector('.DateInfo');
const userDay = document.querySelector('input[name= "day"]');
const userMonth = document.querySelector('input[name= "month"]');
const userYear = document.querySelector('input[name= "year"]');
const ageBtn = document.querySelector('.ageBtn');

let errorMesage = {};
// Prevent non-digit Input to allInput boxes
userDay.addEventListener('keydown', (e) => {
  // Allow backspace, delete, tab, and arrow keys

  if (
    ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)
  ) {
    return;
  }

  // If not a digit, prevent input
  if (!/^\d$/.test(e.key)) {
    e.preventDefault();
  }
  errorMesage.day = '';
});

userMonth.addEventListener('keydown', (e) => {
  // Allow backspace, delete, tab, and arrow keys
  if (
    ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)
  ) {
    return;
  }

  // If not a digit, prevent input
  if (!/^\d$/.test(e.key)) {
    e.preventDefault();
  }

  errorMesage.month = '';
});

userYear.addEventListener('keydown', (e) => {
  // Allow backspace, delete, tab, and arrow keys
  if (
    ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)
  ) {
    return;
  }

  // If not a digit, prevent input
  if (!/^\d$/.test(e.key)) {
    e.preventDefault();
  }

  errorMesage.year = '';
});

// Validation on Submit event

dateInfo.addEventListener('submit', function (e) {
  e.preventDefault();

  // Check the leap year
  let currentDate = new Date();

  let currD = currentDate.getDate();
  let currM = currentDate.getMonth() + 1;
  let currY = currentDate.getFullYear();

  let userDayValue = parseInt(userDay.value);
  let userMonthValue = parseInt(userMonth.value);
  let userYearValue = parseInt(userYear.value);

  let ageYears = currY - userYearValue;
  let ageMonths = currM - userMonthValue;
  let ageDays = currD - userDayValue;

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths = (ageMonths + 12) % 12;
  }
  if (ageDays < 0) {
    const daysInPreviousMonth = new Date(currY, currM - 1, 0).getDate();
    ageDays = daysInPreviousMonth + ageDays;
  }

  function isLeapYear(birthYear) {
    return (
      (userYearValue % 4 === 0 && userYearValue % 100 !== 0) ||
      userYearValue % 400 === 0
    );
  }

  if (
    userMonthValue === 2 &&
    userDayValue === 29 &&
    !isLeapYear(userYearValue)
  ) {
    console.log('it was not a leap year, enter valid date');
    return;
  }

  // check day input
  if (!userDay.value) {
    errorMesage.day = 'Day field is required';
  } else if (userDay.value > 31 || userDay.value < 1) {
    errorMesage.day = 'Must be a valid day';
  }

  if (userDay.value.length === 1) {
    userDay.value = '0' + userDay.value;
  }

  // Check month input
  if (!userMonth.value) {
    errorMesage.month = 'Month field is required';
  } else if (userMonth.value > 12) {
    errorMesage.month = 'Must be a valid month';
  }
  // Check Year input
  if (!userYear.value) {
    errorMesage.year = 'Year field is required';
  } else if (userYear.value > currentDate.getFullYear()) {
    errorMesage.year = 'Mast be in the past';
  }

  for (let key in errorMesage) {
    let errText = document.getElementById('error-' + key);
    errText.innerText = errorMesage[key];
    // console.log(errText);
    // if (errorMesage[key] === '') {
    //   console.log('Data submitted, thank you!');
    // }
  }

  if (userYearValue && userYearValue < currentDate.getFullYear()) {
    const birthYear = document.getElementById('useryear');
    birthYear.innerHTML = `${ageYears} years`;
  }
  if (userMonthValue && userMonthValue <= 12) {
    const birthMonth = document.getElementById('usermonth');
    birthMonth.innerHTML = `${ageMonths} months`;
  }
  if (userDayValue <= 31) {
    const birthDay = document.getElementById('userday');
    birthDay.innerHTML = `${ageDays} days`;
  }
});
