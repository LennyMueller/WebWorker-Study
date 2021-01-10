//Dieses sind Möglichkeiten asynchronen Code zu handeln.
//Das Beispiel ist der Zugriff auf einen Server, der eine gewisse Zeit beanspruchen kann.

//Das Programm ist zwar ausführbar, aber es geht nicht darum was passiert, sondern wie es passiert.
//Außerdem sind alle Konsolen-Ausgaben auskommentiert.
//Die entsprechenden Funktionsaufrufe sind mit CAPS beschriftet.
//Um die Möglichkeiten dennoch zu Überprüfen kann der Code in die Console kopiert und dort ausgeführt werden.

//DISCLAIMER
//Pfeilfunktionen (=> ; in der ReadMe Datei erklärt) funktionieren teilweise nicht in älteren Browsern, empfolen wird Chrome


//*******************Deklarationen*******************

//Hier wird das Server-Modell erstellt
var server = {
  //Verzögerungen
  upload: 3000,
  download: 2000,
  //Datenspeicher
  speicher: []
}

//Das Beziehen von Daten dauert 2 Sekunden.
//Der Upload von Daten dauert 3 Sekunden.

//Beispielinhalte werden auf dem Server abgelegt
server.speicher.push({title: "Document 1"}, {title: "Document 2"});

//Upload eines neuen Elements
function upload(element) {
  setTimeout(() => {
    server.speicher.push(element);
    console.log("Upload done");
  }, server.upload);
}

//Download und Ausgabe der Serverdaten
function download() {
  setTimeout(() => {
    server.speicher.forEach((element) => {
      console.log(element.title);
    })
  }, server.download);
}

//Eine dritte Datei soll auf den Server hochgeladen werden.
//Anschließend sollen alle auf dem Server gespeicherten Daten ausgegeben werden.
var neuesDocument = {title: "Document 3"};


//*******************normale Ausführung*******************
function normal() {
  upload(neuesDocument);
  download();
}
//normal(); //NORMALE AUSFÜHRUNG

//Problem: Document 3 wird nicht ausgegeben, da der Upload erst nach der Ausgabe abgeschlossen ist
//Beide Befehle werden gleichzetig gestartet und der Upload beansprucht mehr Zeit


//*******************Verwenden von Callbacks*******************
//Dazu muss die Funktion, die zuerst ausgeführt werden soll modifiziert werden:

function uploadMitCallback(element, callback) {
  setTimeout(() => {
    server.speicher.push(element);
    console.log("Upload done");
    callback();
    //Der Funktion kann nun eine weitere Funktion übergeben werden, die hier ausgeführt wird
  }, server.upload);
}

//uploadMitCallback(neuesDocument, download); //AUSFÜHRUNG MIT CALLBACK

//Die Download Funktion wird nun nach der Upload Funktion ausgeführt.


//*******************Verwenden der Klasse Promise*******************
//Dazu muss erneut die Upload Funktion modifiziert werden

function uploadPromise(element) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      server.speicher.push(element);
      const error = false; //Kann sich aus dem Code ergeben
      if(!error) {
        console.log("Upload done");
        resolve();
      } else {
        reject("Ein Fehler ist aufgetreten");
      }
    }, server.upload);
  });
}

//Funktionsaufruf
/*uploadPromise(neuesDocument) //AUSFÜHRUNG MIT PROMISE
  //resolve
  .then(download)
  //reject für optionales Fehlerhandling
  .catch(error => {console.log(error)});*/

//Nun wird erst die Downloadsfunktion ausgeführt, wenn der Upload erfolgreich war.
//Hier lässt sich durch das .catch ein Error Handling einbauen


//*******************Verwenden von async/await*******************
//Das await erwartet von der Funktion ein resolve
//Deshalb kann man die Funktion aus dem Beispiel "Verwenden der Klasse Promise" Verwenden

async function ausfuerung() {
  await uploadPromise(neuesDocument);
  download();
}

//ausfuerung(); //AUSFÜHRUNG MIT ASYNC/AWAIT

//Durch das await wird gewartet, bis die Funktion durch das resolve aufgelößt wird
