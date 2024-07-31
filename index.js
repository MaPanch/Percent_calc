//document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");
// }

// document.getElementById("speedText").addEventListener("input", function () {
//   var speedValue = prompt(this.addEventListener, "");
// });

// function returnText() {
//   let speedInput = document.getElementById("speedNumber").value;
//   let percentInput = document.getElementById("percentNumber").value;

//   alert(speedInput);
//   alert(percentInput);
// };

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

// Event listeners

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

document
  .getElementById("calcForm")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission behavior
      displayResult(); // Call the function directly or use button click
    }
  });
