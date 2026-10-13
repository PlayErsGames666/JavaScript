setTimeout(timers, 5000);

function timers() {
    let result = "Hello with delay in 5 seconds";
    
    document.getElementById('timers').innerHTML = result + '<br>';

    return true
}


function startTimer() {
    let timer;
    let result = "Finished";
    let start = "Start Timer";

    document.getElementById('timer').innerHTML = start; 

    timer = setTimeout(function() {
        document.getElementById('timer').innerHTML = result;
    }, 5000);
}

function stopTimer() {
    let timer;
    let result = "Timer stopped";

    clearTimeout(timer);

    document.getElementById('timer').innerHTML = result; 
}

function myDisplayer(text) {
    let timer = document.getElementById('timer');
    timer.innerHTML += text + '<br>';

}

function showTime() {
    const date = new Date();

    setInterval(showTime, 1000);

    document.getElementById('showTimer').innerHTML = date.toLocaleTimeString(); 

    return true;
}