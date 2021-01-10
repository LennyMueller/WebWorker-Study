//Ein Worker wird aus der Datei "worker - rechner.js" instanziiert
var rechner = new Worker("worker - rechner.js");
var active = true;
console.log("Worker wurde erstellt");

//Warte auf die Ergebnisse des Workers
rechner.addEventListener("message", function(event){
  document.getElementById("ergebnis").innerHTML = event.data;
  console.log(". . . Auftrag wurde beendet")
})

//Daten werden an den Worker gesendet
function sendMessage(operation, a, b) {
  var message = [operation, a, b];
  rechner.postMessage(message);
  console.log("Worker wurde gestartet . . .");
  if (!(active)) {
    setTimeout(function () {
      console.log(". . . Auftrag kann nicht engegengenommen werden");
    }, 750);
  }
}

//Beenden des Worker-Threads
function endWorker() {
  rechner.terminate();
  active = false;
  console.log("Worker wurde beendet und wird keine Aufräge mehr entgegennehmen");
}

//Prüfung der User-Eingaben
function calc() {
  var operation = document.getElementById("operation").value;
  if (operation !== "default") {
    var a = document.getElementById("zahl1").value, b = document.getElementById("zahl2").value;
    if(!(isNaN(a)) && !(isNaN(b))) {
      sendMessage(operation, a, b);
      document.getElementById("aufgabe").innerHTML = a + " " + operation + " " + b + " = ";
    } else {
      window.alert("Geben Sie Zahlen ein und verwenden Sie einen Punkt als Komma");
    }
  } else {
    window.alert("Wählen Sie eine Rechenoperation");
  }
}
