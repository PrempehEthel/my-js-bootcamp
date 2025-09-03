// ternary operator: a shortcut for if...else statement helps to assign a value to a variable based on a condition
// syntax: condition ? value1 : value2
// if condition is true, value1 is assigned to the variable, otherwise value2 is assigned

let age = 12;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

let isStudent = false;
let messages = isStudent
  ? "You get a student discount."
  : "You pay full price.";
console.log(messages);

let purchaseAmount = 150;
let discount = purchaseAmount >= 100 ? 20 : 5;
console.log(
  `you get a total of $${purchaseAmount - purchaseAmount * (discount / 100)}`
);

// nested ternary operator
// syntax: condition1 ? value1 : condition2 ? value2 : value3
// if condition1 is true, value1 is assigned to the variable
// if condition1 is false and condition2 is true, value2 is assigned to the variable
// if both condition1 and condition2 are false, value3 is assigned to the variable

let time = 1;
let greeting =
  time < 12 ? "Good morning!" : time < 16 ? "Good afternoon!" : "Good evening!";
console.log(greeting);
