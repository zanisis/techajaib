In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Answer Short Question

1. Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword

```
- this in OOP: this keyword to the newly created object and executes the constructor function
- new in OOP: create a object from a constructor function. The new keyword has to be placed before the constructor function call and following creates new object
```

2. What is the new class syntax and how to create instance metods, class methods ?

```
- class syntax is use the keyword using class and add method constructor()

- create instance method:
class Bird {
  constructor(props) {
    this.name = props
  }

  say() {
    return `hello ${this.name}`
  }
}

new animal =  new Bird('rajawali')
alert(animal.say()) // alert hello rajawali

- class methods:
class Bird {
  constructor() {

  }
  method1() {

  }
}
```

3. Give an example of how to implement inheritance in ES2015 using extends and super

```
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();
```

4. Imagine refactoring an ES5 aplication to ES2015, how would you go about it?

```
example in your code
// ES5
const React = required('react)

convert to ES2015 become :
import React from 'react'

but must include preset babel-presets-2015
to read ES2015 to allow your code latest javascript
```

5. Give an example of how you structure applications with design patterns using closure and modules

```
- closure :
var globalvar = 1; // Global Scope

function outer() {
    var outervar = 2; // Scope is within outer()

    function inner() {
        var innervar = 3; // Scope is within inner()
        console.log(globalvar); // => 1
        console.log(outervar); // => 2
        console.log(innervar); // => 3
    }

    console.log(globalvar); // => 1
    console.log(outervar); // => 2
    console.log(innervar); // => Reference Error;
}

console.log(globalvar); // => 1
console.log(outervar); // => Reference Error
console.log(innervar); // => Reference Error

- modules :
function EmployeeDetails() {
  var name: "Mayank";
  var age = 30;
  var designation = "Developer"

  return {
    name: name,
    age: age,
    designation: designation
  }
}

var newEmployee = EmployeeDetails()

var userName = newEmployee.name;
var userAge = newEmployee.age;
var userDesignation = newEmployee.designation;
```

6. What are your preferred ways of testing your web application ?.

```
- in Functionality and usability
  using jest to make result same expected
- in performance
  using lighthouse to make performance report, seo and etc up above 70%
```

7. Which web server do you use? why? Explain pros and cons of your choice.

```
NGINX
props :
 - resources
 - multifunction
 - security
 - perfomance
cons :
  - compatibility some software as IBM
  - flexibility add ons
```

8. What is your preferred production deployment process?.

```
- pipeline jenkins because can be CI/CD to manage process build in what to do in process pipeline such as test copy .env and etc
- can rollback plan when something error or bugs in new feature
```

9. Give an example of clean README.md documentation.

```
# About this project
  this project for purpose to become tech ajaib

In this project you can run:
  - copy .env.stage for development .env.prod for production to .env in command build or docker instruction
  - `yarn start`
  -- Runs the app in the development mode.\
     Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
     The page will reload if you make edits.\
     You will also see any lint errors in the console.
  - `yarn test`
     Launches the test runner in the interactive watch mode.
  - `yarn build`
     Builds the app for production to the `build` folder.\
     It correctly bundles React in production mode and optimizes the build for the best performance.
```
