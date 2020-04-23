taschenrechner.ts

var zahl1;
var operator;
var zahl2;

function eingabe(x) {
    var eingabeFeld = document.getElementById("Display");
    var lastChar = eingabeFeld.value.slice(-1);

    if (!Number.isInteger(x) && operator) {
        alert ("Not possible");
        return;
    }

    if (x == '+' || x == '-' || x == '*' || x == '/') {
        if (lastChar)
        operator = x;
    }

    document.getElementById("Display").value += x;
}

function calculate() {
    var eingabeFeld = document.getElementById ("Display");
    var eingabe = eingabeFeld.value;

    var operatorIndex = eingabe.indexOf(operator);

    zahl1 = eingabe.substring(0, operatorIndex);
    zahl2 = einhabe.substring(operatorIndex + 1);
    console.log("ZAHL1: " + zahl1);
    console.log("ZAHL2: " + zahl2);
    
    var ergebnis;
}


