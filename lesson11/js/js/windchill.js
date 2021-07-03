let tempF = document.getElementById("tempF").value;
let speed = document.getElementById("speed").value;

let factor = windChill(tempF, speed);

if (tempF <= 50 && speed >= 3) {
  document.getElementById("output").innerHTML = factor;
} else {
  document.getElementById("output").innerHTML = "N/A";
}

/* Output:The function windChill returns the wind chill in faremheit to the
        first function and same is provided as output */

function windChill(tempF, speed) {
  let factor =
    35.74 +
    0.6215 * tempF -
    35.75 * speed ** 0.16 +
    0.4275 * tempF * speed ** 0.16;
  return factor;
}
