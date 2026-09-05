function functionToChangeText() {
    document.getElementById('demo').innerHTML="This is a new text which is changed by JavaScript";
}

function functionToChangeText2() {
    document.getElementById('demo').innerHTML = 'Script Function is working';
}

function CheckNewFile() {
    document.getElementById("result").innerHTML = "Checking for new results in new script file";
}

function innerFunction() {
    document.getElementById('result').innerHTML = '<h2>Script Function is working</h2>';
}

function functionToChangeText3() {
    document.getElementById('text').innerText = 'Script Function Text is working';
}

function write(a, b) {
    document.write(a, b);
}

function windowAlert() {
    window.alert("This is a window alert");
}

function alertFunction() {
    alert(5 + 6);
}