function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  
  if (temp === "") {
    result.innerText ="Please enter a number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    fahrenheit = (temp * 9/5) + 32;
    kelvin = parseFloat(temp) + 273.15;
    result.innerText = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
  } 
  else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    kelvin = celsius + 273.15;
    result.innerText = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
  } 
  else {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    result.innerText = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
  }
}
