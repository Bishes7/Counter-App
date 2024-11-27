// Select all the counter display and buttons
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

// Initialize the counter value

let counterValue = 0;

// Function to update the counter display
const updateCounter = () => {
  counterDisplay.innerText = counterValue;
  // change the color of the counter based on its value

  if (counterValue > 0) {
    counterDisplay.style.color = "green";
  } else if (counterValue < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
};

// Event Listeners for buttons
increaseBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});
