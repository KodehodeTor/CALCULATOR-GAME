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
// NOTES FOR MEG SELV - ta data fra kalkulator og bruke det i en annen funksjon:

// // Step 1: Add a click event listener to the button
// document.getElementById('actionButton').addEventListener('click', function() {

//     // Step 2: Grab the raw string value from the input field
//     let rawInput = document.getElementById('calcInput').value;

//     // Step 3: Convert the string into a usable number
//     let processedNumber = Number(rawInput);

//     // Step 4: Validate that the user actually entered a number
//     if (isNaN(processedNumber) || rawInput === '') {
//         alert('Please enter a valid number');
//         return;
//     }

//     // Step 5: Pass the data onwards to another function
//     useDataOnwards(processedNumber);
// });

// // Step 6: Define the next function to receive and use the data
// function useDataOnwards(value) {
//     console.log("Data received for next steps:", value);

//     // Example onwards actions:
//     let tax = value * 0.15;                 // 1. Math calculations
//     document.body.style.fontSize = value + 'px'; // 2. Update UI styling
//     // sendDataToServer(value);             // 3. Send to a database API
// }

// TIMER

const timerDisplay = document.getElementById("timer-display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
  console.log(startTime);
}

function stop() {}

function reset() {}

// Function sets current time to now, then uses currentTime and startTime to set elapsed time.
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  //
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = (elaspedTime / (1000 * 60)) % 60;
}
