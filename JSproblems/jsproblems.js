'use strict';

// Task 1
let arr = ['banana', 'lemon', 'watermelon', 'apple', 'mango'];
for (let element of arr) {
  console.log(element);
}

// Task2
arr.unshift('kiwi');
arr.push('watermelon');
console.log(arr);

// Task3
arr.shift();
arr.pop();
console.log(arr);

// Task4
let newArr = [];
for (let i = arr.length - 1; i > 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);

// Task5
let i = 2;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Task6
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Task7
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((el) => el * 2);
console.log(newNums);

// Task8
const nums2 = [10, 20, 3, 40, 5, 150, -1, 0, -25];
const filterNums = nums2.filter((item) => item > 10);
console.log(filterNums);

// Task9
const numbers = [1, 2, 3, 4, 5];
const reducedNums = numbers.reduce((curr, acc) => curr + acc);
console.log(reducedNums);

// Task 10
const numbers2 = [10, 20, 3, 40, 5, 150, -1, 0, -25];
const findNum = nums2.find((n) => n > 10);
console.log(findNum);

// Task11
const toSort = [10, 20, 3, 40, 5, 150, -1, 0, -25];
const arrSorted = toSort.sort((a, b) => a - b);
console.log(arrSorted);

// Task12
const toDestr = [10, 20, 3, 40, 5, 150, -1, 0, -25];
const [num1, num2] = toDestr;
console.log(num1, num2);

// Task13
const profile = {
  name: 'Linda',
  age: 32,
};
const { name, age } = profile;
console.log(`${name}is ${age} year old`);

// Task14
const names = ['Linda', 'Maeve', 'Meredith', 'Kelly', 'Jessica'];
const [name1, ...otherNames] = names;
console.log(otherNames);

// Task15
const userProfile = {
  name: 'Adam',
  age: 32,
  address: {
    country: 'USA',
    state: 'Georgia',
    city: 'Atlanta',
  },
  postalCode: '0025',
};
const {
  address: { city },
} = userProfile;
console.log(city);

// Task16
const arr1 = ['Melinda', 'Bridget', 'Alexandra'];
const arr2 = ['Brad', 'Josh', 'Peter', 'Miguel'];

const newArray = [...arr1, ...arr2];
console.log(newArray);

// Task17
const newUserProfile = {
  ...userProfile,
  address: {
    ...userProfile.address,
  },
};

newUserProfile.name = 'Paul';
newUserProfile.address.city = 'Dalas';
console.log(newUserProfile);
console.log(userProfile);

// Task18 Create an array of 5 random numbers and find their average.
const randomNumArray = [25, 85, 130, 5, 75];
let summary = 0;
for (let num of randomNumArray) {
  summary += num;
}
let average = summary / randomNumArray.length;
console.log(average);

// Task19
const numberS = [10, 45, 78, 99, 34, 67];
const findNumber = (n) => {
  numberS.sort((a, b) => b - a); //Descending order
  console.log(numberS[1]); //acces second element
};
findNumber();

// Task 20 Remove duplicate elements from an array.
const arrayNames = ['Brad', 'Josh', 'Miguel', 'Brad', 'Peter', 'Miguel'];
const uniqueValues = [...new Set(arrayNames)];

console.log(uniqueValues);


// Task 21Find the most frequent element in an array. 
const colors = ["red", "blue", "red", "green", "blue", "blue"]
const repeat = ()=>{

}


// Task22
const address = {
  country: 'usa',
  city: 'atlanta',
  street: 'st.peter avenue #5',
};


const createObj =(obj) =>{
  let address2 ={}
for(let key in obj){
if(typeof obj[key] === 'string') {
  address2[key]=obj[key].toUpperCase()
}
else { return 'Sorry, no conversion has happened'}
}
return address2
}
let returnedObj = createObj(address)
console.log(address)
console.log(returnedObj )


// Task23 Create a function that checks if two objects have the same properties and values.
const object1 = { name: 'Andreas', age: 28 };
const object2 = { name: 'Paul', age: 28 };

const checkObj = (obj1, obj2) => {
  const object1Length = Object.keys(obj1).length;
  const object2Length = Object.keys(obj2).length;

  if (object1Length === object2Length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};


console.log(checkObj(object1, object2));

// Task24 Find if a number is prime or not, using a loop.

const numberPrime = 13;
function isPrime(num) {

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));

// Task25 Create a multiplication table for a given number using a loop.
const myNumber = 4;

for (let i = 1; i <= 10; i++) {
  console.log(`${myNumber}*${i}=${myNumber * i}`);
}


// Task 27 
// Swap two variables using array destructuring.
const fruits = ['banana', 'mango']
let [fruit1,  fruit2] = fruits;
[fruit1, fruit2] = [fruit2, fruit1]
console.log(fruit1, fruit2)


