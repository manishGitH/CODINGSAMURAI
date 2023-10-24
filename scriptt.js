function addToDisplay(value) {
  document.getElementById("display").value += value;
}
function calculate() {
  try {
    const expression = document.getElementById("display").value;
    const divide = new Function("return " + expression);

    document.getElementById("display").value = divide();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
function clearDisplay() {
  document.getElementById("display").value = "";
}

 const deletekey = function (){
 const display = document.querySelector("#display");  
 const newVal =  display.value.slice(0,-1);
 display.value = newVal; 
 }

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const percentButton = document.getElementById("percent");
  percentButton.addEventListener("click", function () {
    // Get the current value from the display
    const currentValue = parseFloat(display.value);
    // Check if the current value is a valid number
    if (!isNaN(currentValue)) {
      // Convert the current value to a percentage (e.g., 20% becomes 0.2)
      display.value = (currentValue / 100).toString();
    }
  });
});







 