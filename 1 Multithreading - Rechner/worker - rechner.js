//Dies ist der Worker Thread der die Berechnungen im Hintergrund ausführt

//Warte auf die Daten des Main-Threads
self.addEventListener("message", function (event) {
  console.log("-Worker hat den Auftrag angenommen-");
  var a = parseFloat(event.data[1]);
  var b = parseFloat(event.data[2]);
  switch (event.data[0]) {
    case "+":
    add(a, b);
      break;
    case "-":
    subtract(a, b);
      break;
    case "*":
    multiply(a, b);
      break;
    case "/":
    divide(a, b);
      break;
  }
})

//Sende die Ergebnisse an den Main-Thread
function add(a, b) {
  self.postMessage(a + b);
}
function subtract(a, b) {
  self.postMessage(a - b);
}
function multiply(a, b) {
  self.postMessage(a * b);
}
function divide(a, b) {
  self.postMessage(a / b);
}
