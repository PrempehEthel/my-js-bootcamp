// Body Mass Index (BMI) Calculator
// This script calculates BMI based on user input for weight and height,
// and updates the UI to reflect the BMI category.

// define constants for DOM elements
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const underweight = document.getElementById("underweight");
const normal = document.getElementById("normal");
const overweight = document.getElementById("overweight");
const obesity = document.getElementById("obesity");
const bmiAnswerDiv = document.getElementById("bmiAnswer");

// handle form submission
// start calculation and update UI
document.getElementById("bmi-form").onsubmit = function (event) {
  event.preventDefault();

  // Reset all radio buttons
  underweight.checked = false;
  normal.checked = false;
  overweight.checked = false;
  obesity.checked = false;

  // Calculate BMI
  const w = parseFloat(weight.value);
  const h = parseFloat(height.value) / 100; // convert cm to meters
  let resultText = "";

  // Validate input and compute BMI
  if (!w || !h) {
    resultText = "Please enter valid weight and height.";
  } else {
    const bmi = w / (h * h);
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are: `;
    if (bmi < 18.5) {
      underweight.checked = true;
      resultText += "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      normal.checked = true;
      resultText += "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      overweight.checked = true;
      resultText += "Overweight";
    } else {
      obesity.checked = true;
      resultText += "Obesity";
    }
  }
  // Display the result
  bmiAnswerDiv.textContent = resultText;
};
