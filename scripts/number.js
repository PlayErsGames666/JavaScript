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

function numberEpsilon() {
    let x = Number.EPSILON;

    document.getElementById('numberEpsilon').innerHTML = "Number EPSILON = " + x;

    return true
}

function numberMaxValue() {
    let x = Number.MAX_VALUE;

    document.getElementById('numberMaxValue').innerHTML = "Number Max Value = " + x;

    return true
}

function numberMinValue() {
    let x = Number.MIN_VALUE;

    document.getElementById('numberMinValue').innerHTML = "Number Min Value = " + x;

    return true
}

function numberMinSafeInteger() {
    let x = Number.MIN_SAFE_INTEGER;

    document.getElementById('numberMinSafeInteger').innerHTML = "Number Min Safe Integer = " + x;

    return true
}

function numberMaxSafeInteger() {
    let x = Number.MAX_SAFE_INTEGER;

    document.getElementById('numberMaxSafeInteger').innerHTML = "Number Max Safe Integer = " + x;

    return true
}

function numberPositiveInfinity() {
    let x = Number.POSITIVE_INFINITY

    document.getElementById('numberPositiveInfinity').innerHTML = "Number Positive Infinity = " + x;

    return true
}

function numberNegativenfinity() {
    let x = Number.NEGATIVE_INFINITY

    document.getElementById('numberNegativeInfinity').innerHTML = "Number Negative Infinity = " + x;

    return true
}

function numberNaN() {
    let x = 101;
    let text = 'Jon';
    let result = x / text;

    document.getElementById('numberNaN').innerHTML = "Not a Number = " + "101 / 'Jon' = " + result;

    return true
}

function numberBigInt() {
    let x = 1249712701578912591695210n;
    let y = BigInt('1294125728701249020471');

    document.getElementById('numberBigInt').innerHTML = x + " = If it ends with n, this number world be more then JavaScript is represented in MAX_SAFE_VALUE <br>" + y + " = Also in JavaScript could write it with Bigint() data type in string cases.";

    return true
}