***PROGRAMM 1: RECHNER***

Das Programm Rechner stellt einen simplen Taschenrechner dar, der die Rechenoperationen von einem zweiten ausgelagerten Thread ausführen lässt. In der Konsole lässt sich die Arbeitsweise des Workers und dessen Kommunikation mit dem Main-Thread verfolgen.

Die Konsole sollte bei der Ausführung geöffnet sein (F12 -> Console -> Seite neu Laden)

Lokal gespeicherte Worker können müssen auf Chrome und im Internet Explorer explizit zugelassen werden. Chrome muss darüber hinaus mit Hile der Flag gestartet werden. 

Flag für Chrome: (Pfad von Chrome) --allow-file-access-from-files (Pfad der .js Datei) 

**********************************************************

***PROGRAMM 2: SERVERZUGRIFF***

Das Programm Serverzugriff ist das Beispiel für die asynchrone Programmierung aus der Ausarbeitung.

In diesem Programm werden Pfeilfunktionen verwendet. Dies ist eine kurze Schreibweise für anonyme Funktionen (Lamda Funktionen), die an Stellen verwendet werden, an denen die Syntax eine Funktion erfordert. Bsp: (resolve, reject) => {...} ist die Kurzschreibweise von function(resolve, reject){...} dabei schreibt man _ => bzw () => wenn es keine Übergabeparameter gibt. Dieses Feature funktioniert nur bei neueren Browsern (Chrome unterstützt Pfeilfunktionen)

**********************************************************

 




