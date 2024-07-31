let speedValue = 0;
let percentValue = 0;

//Speed value
function updateSpeedValue(event) {
  speedValue = parseFloat(event.target.value) || 0;
  console.log("Speed value: ", speedValue);
}
//Percent value
function updatePercentValue(event) {
  percentValue = parseFloat(event.target.value) || 0;
  console.log("Percent value: ", percentValue);
}

//Result function
function displayResult(event) {
  let resultValue = (speedValue * percentValue) / 100 + speedValue;
  document.getElementById("resultNum").value = resultValue.toFixed(2);
  console.log("Result Value:", resultValue);
}

//Reset button
function valuesReset() {
  document.getElementById("speedNumber").value = "";
  document.getElementById("percentNumber").value = "";
  document.getElementById("resultNum").value = "";

  speedValue = 0;
  percentValue = 0;

  console.log("All values reset.");
}

document
  .getElementById("speedNumber")
  .addEventListener("input", updateSpeedValue);
document
  .getElementById("percentNumber")
  .addEventListener("input", updatePercentValue);

document
  .getElementById("resultButton")
  .addEventListener("click", displayResult);

document.getElementById("reset").addEventListener("click", valuesReset);
