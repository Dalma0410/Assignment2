taschenrechner.ts

var zahl1;
var operator;
var zahl2;

function eingabe(x) {
    var eingabeFeld = document.getElementById("Display");
    var lastChar = eingabeFeld.nodeValue.slice(-1);

    if (!Number.isInteger(x) && operator) {
        alert ("Not possible");
        return;
    }

    if (x == '+' || x == '-' || x == '*' || x == '/') {
        if (lastChar)
        operator = x;
    }

    document.getElementById("Display").nodeValue += x;
}


