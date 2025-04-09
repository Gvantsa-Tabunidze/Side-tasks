// Task 1
const arrayOfNames = ['Alice', 'Bob', 'Charlie', 'David'];
const mainDiv = document.getElementById('names');

function DisplayNames() {
  arrayOfNames.map((element) => {
    const nameP = document.createElement('p');
    nameP.innerText = element;
    mainDiv.appendChild(nameP);
  });
}
DisplayNames();

// Task2
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

function Show_Key_Value_Pairs() {
  const newArray = users.map((el) => {
    const objectEl = document.createElement('p');
    objectEl.innerText = `${el.id} ${el.name}`;
    mainDiv.appendChild(objectEl);
  });
}
Show_Key_Value_Pairs();

// Task3
const numbersArray = [15, 36, 85, 123, 98, 20, 78, 100, 48, 95];
function checkNumber() {
  for (let num of numbersArray) {
    if (num % 2 === 0) {
      const evenNumber = document.createElement('p');
      evenNumber.innerText = num;
      evenNumber.style.color = 'green';
      mainDiv.appendChild(evenNumber);
    } else {
      const oddNumber = document.createElement('p');
      oddNumber.innerText = num;
      oddNumber.style.color = 'red';
      mainDiv.appendChild(oddNumber);
    }
  }
}
checkNumber();

//Task 4
const animalS = ['Cat', 'Dog', 'Cheetah', 'Elephant', 'Camel'];
const newAnimals = animalS.filter((animal) => {
  if (animal.toLowerCase().startsWith('c')) {
    const animalsP = document.createElement('p');
    animalsP.innerText = animal;
    mainDiv.appendChild(animalsP);
  }
});
