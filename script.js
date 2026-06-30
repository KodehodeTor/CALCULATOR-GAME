// Calculator program

// Variable for display
const display = document.getElementById("display");

// Function accepts parameter input and whatever value is passed into the function will be stored in input.
function appendToDisplay(input) {
  display.value += input;
}

// Function clears the display by adding nothing to it.
function clearDisplay() {
  display.value = "";
}
// Function calculates the inputs by using eval,
function calculate() {
  const expression = display.value; // Save the expression before eval()

  try {
    const result = eval(expression);
    display.value = result;

    //Variable for win condictions int he game, all operators have to be used.
    const usedPlus = expression.includes("+");
    const usedMinus = expression.includes("-");
    const usedMultiply = expression.includes("*");
    const usedDivide = expression.includes("/");

    // If the number in the calculator is the same as RNG / targetNUmber and all operators have been used you win the game. If not error message is given on win conditions. Catches any error if input is wrong. For example by using a operator after a number without following it.
    if (
      Number(result) === targetNumber &&
      usedPlus &&
      usedMinus &&
      usedMultiply &&
      usedDivide
    ) {
      stop();
      alert("🎉 You win!");
    } else if (Number(result) !== targetNumber) {
      alert("Wrong answer!");
    } else {
      alert("Correct number, but you must use +, -, * and /.");
    }
  } catch (error) {
    display.value = "Error";
  }
}
// NOTES FOR MEG SELV - ta data fra kalkulator og bruke det i en annen funksjon:

//Psuedo koding:

// Math game:

// Math.random lager et tall på XX,XXX, når XX,XXX er laget start timeren. function start()
// Deretter når man har kalkulert seg frem til nøyaktig XX,XXX stop timer. function stop()
// Om man har brukt kun + og - så trekkes det 20% av scoren.
// For hvert sekund man bruker trekkes 1% av scoren.
// Pluss poeng for å bruke /  og * med 20%

// Hvordan kalkuleres highscoren? XX,XXX Orginal sum, delt ned på 1000 så man får 99, deretter trekk ned vilkår. Siste sum = highscore?

// Highscore liste?

// Ha en knapp til å resette spill etter highscore er oppført

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
    //Run the stopwatch
    isRunning = true;
  }
}

// Need to check if our program is running, if true, then stop the stopwatch
function stop() {
  if (isRunning) {
    //Stops the stopwatch from running
    clearInterval(timer);
    //Calculates the elapsed time
    elapsedTime = Date.now() - startTime;
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
  // Resets the time to 00:00:00:00
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

// RNG

//Cache DOM element reference:

const generateBtn = document.getElementById(`generate-btn`);
const numberDisplay = document.getElementById(`number-display`);

// Function to calculate a random number between 100,000-999,999
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (99999 - 10000 + 1) + min);
}

//Attach event listener to handle interaction
generateBtn.addEventListener(`click`, () => {
  const minRange = 10000;
  const maxRange = 99999;

  //Adds targetNumber to be the same as randomNumber
  const randomNumber = getRandomNumber(minRange, maxRange);
  targetNumber = randomNumber;

  //Displays randomnumber in textContent on display.
  numberDisplay.textContent = randomNumber;

  //Start timer when "Start Game on RNG has been clicked"
  start();
});
