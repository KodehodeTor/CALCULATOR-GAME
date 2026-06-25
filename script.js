// Calculator program

// Variable for display to use under
const display = document.getElementById("display");

// Function accepts parameter input and whatever value is passed into the function will be stored in input.
function appendToDisplay(input) {
  display.value += input;
}

// Function clears the display by adding nothing to it.
function clearDisplay() {
  display.value = "";
}
// Function calculates the inputs by using eval, then catches any error if input is wrong. For example by using a operator after a number without following it, or adding two operators after eachother.
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
