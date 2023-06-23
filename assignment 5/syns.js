// Initialize the values and clickedButtons arrays
let values = [0, 0, 0];
let clickedButtons = [];

// Function to increment the value of a button and update its text content
function incrementValue(buttonIndex) {
  // Increment the value at the corresponding index in the values array
  values[buttonIndex - 1]++;
  // Push the buttonIndex to the clickedButtons array
  clickedButtons.push(buttonIndex);
  // Update the text content of the button with the new value
  document.getElementById(`button${buttonIndex}`).textContent = values[buttonIndex - 1];
}

// Function to synchronize and add values based on the clickedButtons array
function syncAndAdd() {
  // Check the length of clickedButtons array to determine the scenario
  if (clickedButtons.length === 0) {
    // Scenario 1: None of the buttons are clicked
    // Increment all values and update button text contents
    for (let i = 0; i < 3; i++) {
      values[i]++;
      document.getElementById(`button${i + 1}`).textContent = values[i];
    }
  } else if (clickedButtons.length === 1 || clickedButtons.length === 2) {
    // Scenario 2: One or two buttons are clicked
    // Find the unclicked buttons and increment their values
    const unclickedButtons = [1, 2, 3].filter(buttonIndex => !clickedButtons.includes(buttonIndex));
    for (let i = 0; i < unclickedButtons.length; i++) {
      const buttonIndex = unclickedButtons[i];
      values[buttonIndex - 1]++;
      document.getElementById(`button${buttonIndex}`).textContent = values[buttonIndex - 1];
    }
  } else if (clickedButtons.length === 3) {
    // Scenario 3: All three buttons are clicked
    // Increment the value of the oldest clicked button and update its text content
    const oldestClickedButtonIndex = clickedButtons[0];
    values[oldestClickedButtonIndex - 1]++;
    document.getElementById(`button${oldestClickedButtonIndex}`).textContent = values[oldestClickedButtonIndex - 1];
  }

  // Reset the clickedButtons array
  clickedButtons = [];
}
