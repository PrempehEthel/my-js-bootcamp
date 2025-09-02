// IF STATEMENT

/* let age = 2;

if (age >= 18) {
  console.log("You are old enough to enter the club.");
} else {
  console.log("You are not old enough to enter the club.");
}
 */
/* 
let isStudent = false;
if (isStudent) {
  console.log("You are a student");
} else {
  console.log("You are NOT a studen!t");
} */

// NESTED IF STATEMENT

/* let age = 2;
let hasLicense = false;
if (age >= 18) {
  console.log("You are old enough to drive.");
  if (hasLicense) {
    console.log("You have a valid driver's license.");
  } else {
    console.log("You do not have a valid driver's license.");
  }
} else {
  console.log("You are not old enough to drive.");
} */

/* let age = 15;
if (age >= 18) {
  console.log("You are old enough to vote.");
} else if (age >= 16) {
  console.log("You can vote in some countries.");
} else if (age >= 14) {
  console.log("You can vote in some states.");
} else {
  console.log("You are not old enough to vote.");
}
 */

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultText = document.getElementById("resultText");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultText.textContent = "You are too old to enter this site.";
  } else if (age == 0) {
    resultText.textContent = "You are not born yet.";
  } else if (age >= 10) {
    resultText.textContent = "You are old enough to enter this site.";
  } else if (age < 0) {
    resultText.textContent = "Your age cannot be negative.";
  } else {
    resultText.textContent = "You are not old enough to enter this site.";
  }
};
