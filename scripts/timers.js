setTimeout(timer, 5000);

function timer() {
    let result = "Hello with delay in 5 seconds";
    
    document.getElementById('timer').innerHTML = result + '<br>';

    return true
}