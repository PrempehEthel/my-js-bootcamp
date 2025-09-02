// How to accept user input
// window prompt

/* let username;
username = window.prompt("What's your name?");
console.log(username);
 */

// Professional way {HTML }

/* let username;

document.getElementById("MySubmit").onclick = function () {
  username = document.getElementById("MyText").value;
  //console.log(username);
  document.getElementById("myh1").textContent = `Hello ${username}`;
}; */

// Type conversion = change the datatype of a value is another (strings, numbers, booleans)

/* let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age); */

/* let x = `pizza`;
let y = `pizza`;
let z = `pizza`;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

// const = variable that can not b changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};
