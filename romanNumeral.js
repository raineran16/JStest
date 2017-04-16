

function calculateRomanNumeral(decimalValue, currentRomanValue) {

    //todo: 9 should result in IX, not VIIII; 4 should result in IV not IIII, ...
    //todo: replace if ... else if with helper function
    //http://www.mathsisfun.com/roman-numerals.html

    var divValue = 0;
    var modValue = 0;

    if (decimalValue >= 100) {
        divValue = Math.floor(decimalValue/100);
        modValue = decimalValue % 100;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "C";
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 50) {
        divValue = Math.floor(decimalValue/50);
        modValue = decimalValue % 50;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "L";
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 10) {
        divValue = Math.floor(decimalValue/10);
        modValue = decimalValue % 10;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "X";
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 5) {
        divValue = Math.floor(decimalValue/5);
        modValue = decimalValue % 5;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "V";
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if(decimalValue >= 0) {
        for(i=0;i<decimalValue;i++) {
            currentRomanValue += "I";
        }
        return currentRomanValue;
    }
}

function getRomanNumeral() {
    var inputValue = document.getElementById("inputValue").value;
    document.getElementById("resultText").innerHTML = "Result = " + calculateRomanNumeral(inputValue,"");
}

