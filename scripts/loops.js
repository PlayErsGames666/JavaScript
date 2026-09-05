function loops() {
    const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
    let anons = "Checking Cars: "
    let text = '';

    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }

    document.getElementById("loopsCheck").innerHTML = anons + "<br>";
    document.getElementById("loopsCheck").innerHTML += text;
    
    return true;
}

function whileCheck(event) {
    let resultText = "";
    let i = 0;

    while (i < 10) {
        resultText += "The number is " + i + "<br>";
        i++;
    }

    document.getElementById("whileCheck").innerHTML = resultText;

    if (event && event.type === "click") {
        console.log("The while loop executed successfully.", event.target);
    }
    else {
        console.log("The while loop executed successfully.");
    }
    
    return true;
}

if (whileCheck == false) {
    console.log('The while loop did not execute.');
} 
else {
    console.log('The while loop executed successfully.');
}

function forCheck(event) {
    const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi']
    let len = cars.length;
    let result = '';

    for (let i = 0; i < len; i++) {
        result += cars[i] + '<br>';
    }

    document.getElementById('forLoops').innerHTML = result;

    if (event && event.type === 'click') {
        console.log("Button executed successfully.", event.target);
    }
    else {
        console.log("Button exucuted unsuccessul.")
    }

    return true
}

if (forCheck == false) {
    console.log("For check not executed normally.")
}
else {
    console.log("For check executed successfuly.")
}

function breakCheck() {
    let text = "";

    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }

    document.getElementById('break').innerHTML = text;

    return true
}

function labelStatementBreak() {
    let text = "";

    loop1: for (let j = 1; j < 5; j++) {
        loop2: for (let i = 0; i < 5; i++) {
            if (i === 3) { break loop1; }
            text += "Label Statement check break loop1. " + i + "<br>";
        }
    }

    document.getElementById("labelState").innerHTML = text;

    return true
}

function continueCheck() {
    let anons = "Checking the 4th iteration: " + "<br>";
    let text = "";

    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "Continue check: " + i*10 + "<br>";
    }

    document.getElementById("continue").innerHTML = anons ;
    document.getElementById("continue").innerHTML += text ;
    
    return true; 
}
