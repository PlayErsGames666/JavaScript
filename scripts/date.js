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

function dateISO() {
    const date = new Date("2015-03-25");
    
    document.getElementById("dateISO").innerHTML = date; 
    
    return true;
}

function dateParse() {
    const msec = Date.parse("March 21, 2012");

    document.getElementById('dateParse').innerHTML = msec + " ms.";

    return true;
}

function dateFullYear() {
    const year = new Date();

    document.getElementById('dateFullYear').innerHTML = year.getFullYear();
    
    return true;
}

function dateGetMonth() {
    const month = new Date();

    document.getElementById('dateGetMonth').innerHTML = month.getMonth() + 1;
    
    return true;
}

function dateGetMonthEach() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m = new Date();

    let month = months[m.getMonth()];

    document.getElementById('dateGetMonthEach').innerHTML = month;
    
    return true;
}

function dateGetDate() {
    const day = new Date();

    document.getElementById('dateGetDate').innerHTML = day.getDate();
    
    return true;
}


