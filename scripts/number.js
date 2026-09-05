function numberCheck() {
    let text = "JavaScript Number Check not always 100% accurate due to floating point precision issues.";
    let x = 0.2 + 0.1;

    document.getElementById("number").innerHTML += "0.2 + 0.1 = " + x + " <small>(" + text + ")</small> <br>";

    return true;
} 

function numberToString() {
    let x = 123
    let y = 500

    document.getElementById('numberToString').innerHTML = x + y + " is a number. <br>";
    document.getElementById('numberToString').innerHTML += x.toString() + ' ' + x + " now is string. <br>";
    document.getElementById('numberToString').innerHTML += y.toString() + ' ' + y + " now is string. <br>";

    return true
}