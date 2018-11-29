import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//------------ Arrow functions ------------//
// ES5
function arrowFunc(name) {
  return 'Hello ' + name;
}

// ES6
const arrowFuncEs6 = name => {
  return `Hello ${name}`;
}

const arrowFuncEs62 = name => `Hello ${name}`;

//------------ Arrow functions with built-in functions ------------//
const builtArray = ['Hau', 'Pradeep', 'Ivan', 5];

// ES5
let builtArr1 = builtArray.map(function(item) {
  return item + ', ';
});

// ES6
let builtArr2 = builtArray.map(item => item + ', ');

//------------ Template literals ------------//

// ES5
function literals(name, age) {
  return 'Hello ' + name + '. Your age is ' + age + ' years old.';
}

// ES6
const literalsES6 = (name, age) => `Hello ${name}. Your age is ${age} years old.`;




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Arrow Functions 1: {arrowFuncEs6('Ivan')}</p>
        <p>Arrow Functions 2: {arrowFuncEs62('Sonia')}</p>
        <p>Built-in ES5: {builtArr1}</p>
        <p>Built-in ES6: {builtArr2}</p>
        <p>Template Literals ES5: {literals('Ivan', 20)}</p>
        <p>Template Literals ES6: {literalsES6('Sonia', 22)}</p>
        </header>
      </div>
    );
  }
}

export default App;
