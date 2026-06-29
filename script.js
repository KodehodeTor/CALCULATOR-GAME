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

// Initial variables
const timerDisplay = document.getElementById("timer-display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

//If our stopWatch isnt running, then start the stopwatch.
function start() {
  if (!isRunning) {
    //Set the startTime
    startTime = Date.now() - elapsedTime;
    //Update every 10 milisecond.
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

// Need to check if our program is running, if true, then stop the stopwatch
function stop() {
  if (isRunning) {
    //Stops the stopwatch from running
    clearInterval(timer);
    //Calculates the elapsed time
    elaspedTime = Date.now() - startTime;
    // Stops the stopwatch
    isRunning = false;
  }
}

// Reset the stopwatch
function reset() {
  //Stops the stopwatch from running
  clearInterval(timer);
  // Sets the stopwatch back to initial variables
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  // Resets the time to 0
  timerDisplay.textContent = "00:00:00:00";
}

// Function sets current time to now, then uses currentTime - startTime to give us elapsed time.
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  // Converting elapsed time to a readable format.

  // Elapsed time / 1000 ms * 60 seconds * 60 minutes
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  // Elapsed time / 1000 ms * 60 seconds, then modulus 60 which gives us remainers to not hit anything over 60.
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  // Elasped time / 1000 ms to convert ms to seconds
  let seconds = Math.floor((elapsedTime / 1000) % 60);

  // Elapsed time (already in ms) modulus 1000, divide by 10 to get two first digits
  let miliseconds = Math.floor((elapsedTime % 1000) / 10);

  //Converting hours, minutes, seconds and miliseconds to a string before displaying it
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2, "0");

  //Access our display with the readable time format set over:

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
