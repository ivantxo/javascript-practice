import React, { Component } from 'react';
import './App.css';

//----------------------------- Arrow functions -----------------------------//
// ES5
function arrowFunc(name) {
  return 'Hello ' + name;
}

// ES6
const arrowFuncEs6 = name => {
  return `Hello ${name}`;
}

const arrowFuncEs62 = name => `Hello ${name}`;


//----------------------------- Arrow functions with built-in functions -----------------------------//
const builtArray = ['Hau', 'Pradeep', 'Ivan', 5];

// ES5
let builtArr1 = builtArray.map(function(item) {
  return item + ', ';
});

// ES6
let builtArr2 = builtArray.map(item => item + ', ');


//----------------------------- Template literals -----------------------------//

// ES5
function literals(name, age) {
  return 'Hello ' + name + '. Your age is ' + age + ' years old.';
}

// ES6
const literalsES6 = (name, age) => `Hello ${name}. Your age is ${age} years old.`;


//----------------------------- Default parameters -----------------------------//

const defaultParamsES6 = (name, age = 22) => `Hello ${name}. Your age is ${age} years old`;


//----------------------------- Object and Array constructing -----------------------------//

// ES5
const contact = {
  name: 'Ivan',
  surname: 'Ramirez',
  age: 26,
}
let name = contact.name;
let surname = contact.surname;
let age = contact.age;

// ES6
let {name: name2, surname: surname2, age: age2} = contact;

const players = ['Lionel', 'Roman', 'James', 3];
let [value1, value2, value3] = players;


//----------------------------- Promises -----------------------------//

// const getData = () => {
//   const url='https://jsonplaceholder.typicode.com/posts';
//   return fetch(url).then(data=> data.json()).then(result=> console.log(result));
// }
// getData();


//----------------------------- Rest parameters -----------------------------//

// ES5
function addNumbersES5() {
  const myNumbers = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return myNumbers.reduce(reducer);
}

// ES6
function addNumbers() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

/**
 * This function produces an error because arguments is not an array and reduce is an array function.
 */
// function addWithReduce() {
//   return arguments.reduce((sum, next) => sum + next);
// }

// The solution to the above error is to use rest parameters
const addNumbersWithReduceES6 = ([...numbers]) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue);


//----------------------------- Spread Operator -----------------------------//

const spreadOperatorES6 = () => {
  const myArray = [1, 2, 3, 4, 5];
  let [first, second, ...remaining] = myArray;
  console.log('first', first);
  console.log('second', second);
  console.log('remaining', remaining);
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Arrow Functions ES5: {arrowFunc('Sonia')}</p>
        <p>Arrow Functions ES6 1: {arrowFuncEs6('Ivan')}</p>
        <p>Arrow Functions ES6 2: {arrowFuncEs62('Sonia')}</p>
        <p>Built-in ES5: {builtArr1}</p>
        <p>Built-in ES6: {builtArr2}</p>
        <p>Template Literals ES5: {literals('Ivan', 20)}</p>
        <p>Template Literals ES6: {literalsES6('Sonia', 22)}</p>
        <p>Default parameters ES6: {defaultParamsES6('Sonia')}</p>
        <p>Structures ES5: {`Contact: ${name}, ${surname}, ${age}`}</p>
        <p>Structures ES6: {`Contact: ${name2}, ${surname2}, ${age2}`}</p>
        <p>Arrays ES6: {`Contact: ${value1}, ${value2}, ${value3}`}</p>
        <p>Reduce function ES5: {addNumbersES5()}</p>
        <p>Adding numbers without Reduce function: {addNumbers(1, 2)}</p>
        <p>Adding numbers with Reduce function ES6: {addNumbersWithReduceES6([1, 2, 3, 4])}</p>
        <p>Spread Operator ES6: {spreadOperatorES6()}</p>
        </header>
      </div>
    );
  }
}

export default App;
