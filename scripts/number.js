function numberCheck() {
    let text = "JavaScript Number Check not always 100% accurate due to floating point precision issues.";
    let x = 0.2 + 0.1;

    document.getElementById("number").innerHTML += "0.2 + 0.1 = " + x + " <small>(" + text + ")</small> <br>";

    return true;
} 

function numberToString() {
    let x = 123
    let y = 500
    let text = x.toString(2);

    document.getElementById('numberToString').innerHTML = 'x = ' + x + '<br>';
    document.getElementById('numberToString').innerHTML += 'y = ' + y + '<br>';
    document.getElementById('numberToString').innerHTML += x + y + " is a number. <br>";
    document.getElementById('numberToString').innerHTML += x.toString() + " x now is string. <br>";
    document.getElementById('numberToString').innerHTML += y.toString() + " y now is string. <br>";
    document.getElementById('numberToString').innerHTML += text + " now x which is 123 converted into 0/1 system. <br>";

    return true
}

function numberExponential() {
    let x = 200;
    let y = 5000;

    document.getElementById('numberExpo').innerHTML = x.toExponential(2) + " now x have exponent in 2. <br>" + y.toExponential(6) + " now y have exponent in 6. <br>" + "The parameter is optional. If you don't specify it, JavaScript will not round the number. <br>" ;

    return true
}

function numberToFix() {
    let x = 1.241;

    document.getElementById('numberToFix').innerHTML = 'x = ' + x + '<br>';
    document.getElementById('numberToFix').innerHTML += x.toFixed(2) + " Round the number. Now parameter 2. <br>";
    document.getElementById('numberToFix').innerHTML += x.toFixed(3) + " Round the number. Now parameter 3. <br>";
    document.getElementById('numberToFix').innerHTML += x.toFixed(4) + " Round the number. Now parameter 4. <br>";

    return true
}

function numberToPrecision() {
    let x = 2.1252;
    
    document.getElementById('numberToPrecision').innerHTML = 'x = ' + x + '<br>';
    document.getElementById('numberToPrecision').innerHTML += x.toPrecision(2) + " Round the number after . Now parameter 2. <br>";
    document.getElementById('numberToPrecision').innerHTML += x.toPrecision(3) + " Round the number after . Now parameter 3. <br>";
    document.getElementById('numberToPrecision').innerHTML += x.toPrecision(4) + " Round the number after . Now parameter 4. <br>";

    return true
}

function numberValueOf() {
    let x = 2.124124;

    document.getElementById('numberValuesOf').innerHTML = 'x = ' + x + '<br>';
    document.getElementById('numberValuesOf').innerHTML += x.valueOf() + " Shows the number as the number. <br>";

    return true
}

function numberMethod() {
    let a = 410;
    let boolt = true;
    let boolf = false;
    let float = 10.05;
    let name = 'Jon';

    document.getElementById('numberMeth').innerHTML = a + " = " + Number(a) + "<br>" + boolt + " = " + Number(boolt) + "<br>" + boolf + " = " + Number(boolf) + "<br>" + float + " = " + Number(float) + "<br>" + name + ' = ' + Number(name);

    return true
}

function numberParseInt() {
    let a = 410;
    let boolt = true;
    let boolf = false;
    let float = 10.05;
    let name = 'Jon';

    document.getElementById('numberParseInt').innerHTML = a + " = " + parseInt(a) + "<br>" + boolt + " = " + parseInt(boolt) + "<br>" + boolf + " = " + parseInt(boolf) + "<br>" + float + " = " + parseInt(float) + "<br>" + name + ' = ' + parseInt(name);

    return true
}

function numberParseFloat() {
    let a = 410;
    let boolt = true;
    let boolf = false;
    let float = 10.05;
    let name = 'Jon';

    document.getElementById('numberParseFloat').innerHTML = a + " = " + parseFloat(a) + "<br>" + boolt + " = " + parseFloat(boolt) + "<br>" + boolf + " = " + parseFloat(boolf) + "<br>" + float + " = " + parseFloat(float) + "<br>" + name + ' = ' + parseFloat(name);

    return true
}

function numberIs() {
    return {
        integer: function() {
                let number = 101;
                let infnumber = 1241215125242;

                document.getElementById('numberIsInteger').innerHTML = Number.isInteger(number) + " = Number: " + number + "<br>" + Number.isInteger(infnumber) + " = " + infnumber + "<br>";

                return true
            },
        finite: function() {
                let number = 101;

                document.getElementById('numberIsFinite').innerHTML = Number.isFinite(number) + " = Number: " + number + "<br>";

                return true        
            },
        nan: function() {
                let number = 101;

                document.getElementById('numberIsNaN').innerHTML = Number.isNaN(number) + " = Number: " + number + "<br>";

                return true
            },
        safeInteger: function safeInteger() {
                let number = 101;

                document.getElementById('numberIsSafeInteger').innerHTML = Number.isSafeInteger(number) + " = Number: " + number + "<br>";

                return true
            }     
    }
}