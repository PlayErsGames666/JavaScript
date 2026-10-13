function scopeInit() {
    let x = 6;
    let y = 7;

    const elem = document.getElementById("scopeInit");
    elem.innerHTML = x + " " + y;

    return true;
}

function scopeStrictMode() {
    "use strict"
    let x = 7;
    
    const output = document.getElementById("strictMode");
    output.innerHTML = x;
    
    return true;
}
