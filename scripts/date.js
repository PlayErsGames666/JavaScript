function date() {
    const allDate = new Date();

    document.getElementById("allDate").innerHTML = allDate;

    return true;
}

function dateToString() {
    const allDate = new Date();

    document.getElementById("dateToString").innerHTML = allDate.toDateString();

    return true;
}

function dateToUtcSctring() {
    const allDate = new Date();

    document.getElementById("dateToUTC").innerHTML = allDate.toUTCString();

    return true;    
}

function dateToISOSctring() {
    const allDate = new Date();

    document.getElementById("dateToISO").innerHTML = allDate.toISOString();

    return true;    
}