***PROGRAMM 1: RECHNER***

Das Programm Rechner stellt einen simplen Taschenrechner dar, der die Rechenoperationen von einem zweiten ausgelagerten Thread ausf�hren l�sst. In der Konsole l�sst sich die Arbeitsweise des Workers und dessen Kommunikation mit dem Main-Thread verfolgen.

Die Konsole sollte bei der Ausf�hrung ge�ffnet sein (F12 -> Console -> Seite neu Laden)

Lokal gespeicherte Worker k�nnen m�ssen auf Chrome und im Internet Explorer explizit zugelassen werden. Chrome muss dar�ber hinaus mit Hile der Flag gestartet werden. 

Flag f�r Chrome: (Pfad von Chrome) --allow-file-access-from-files (Pfad der .js Datei) 

**********************************************************

***PROGRAMM 2: SERVERZUGRIFF***

Das Programm Serverzugriff ist das Beispiel f�r die asynchrone Programmierung aus der Ausarbeitung.

In diesem Programm werden Pfeilfunktionen verwendet. Dies ist eine kurze Schreibweise f�r anonyme Funktionen (Lamda Funktionen), die an Stellen verwendet werden, an denen die Syntax eine Funktion erfordert. Bsp: (resolve, reject) => {...} ist die Kurzschreibweise von function(resolve, reject){...} dabei schreibt man _ => bzw () => wenn es keine �bergabeparameter gibt. Dieses Feature funktioniert nur bei neueren Browsern (Chrome unterst�tzt Pfeilfunktionen)

**********************************************************

 




