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

function dateGetHour() {
    const hour = new Date();

    document.getElementById('dateGetHour').innerHTML = hour.getHours();
    
    return true;
}

function dateGetMinutes() {
    const minutes = new Date();

    document.getElementById('dateGetMinute').innerHTML = minutes.getMinutes();
    
    return true;
}

function dateGetSeconds() {
    const seconds = new Date();

    document.getElementById('dateGetSecond').innerHTML = seconds.getSeconds();
    
    return true;
}

function dateGetMilliseconds() {
    const milliseconds = new Date();

    document.getElementById('dateGetMillisecond').innerHTML = milliseconds.getMilliseconds();
    
    return true;
}

function dateGetDay() {
    const day = new Date();

    document.getElementById('dateGetDay').innerHTML = day.getDay();
    
    return true;
}

function dateGetDayWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();

    let day = daysOfWeek[d.getDay()];

    document.getElementById('dateGetDayWeek').innerHTML = day;
    
    return true;
}

function dateGetTime() {
    const time = new Date();

    document.getElementById('dateGetTime').innerHTML = time.getTime();
    
    return true;
}

function dateGetTimezone() {
    const timezone = new Date();

    document.getElementById('dateGetTimezoneOffset').innerHTML = timezone.getTimezoneOffset();
    
    return true;
}

// Also the same things in set methodologies.