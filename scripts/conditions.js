function conditionDateHours() {
    let time = new Date().getHours();
    let greeting;
    
    if (time <= 11) {
        greeting = "Good morning"; 
    }
    else if (time < 17) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }

    document.getElementById('conditionDateHours').innerHTML = greeting;

    return true
}

function conditionTernary() {
    let age = 18;
    let text = (age >= 18) ? "Minor" : "Adult";

    document.getElementById('conditionTernary').innerHTML = "You are " + text + '.';

    return true
}

function conditionTernarySub() {
    let price = 10;
    let isMember = true;
    let discount = isMember ? 0.2 : 0;
    let total = 10 - (price * discount);

    document.getElementById('conditionTernarySub').innerHTML = "Price of product: " + price + "<br> Check the membershit: " + isMember + "<br> Discount is 20%<br> Total: " + total;

    return true
}

function conditionSwitch() {
    let text;
    let date = new Date().getDay();

    switch(date) {
        case 0:
            text = "Sunday";
            break;
        case 1: 
            text = "Monday";
            break;
        default:
            text = 'There is no case which match the day.'
    }

    document.getElementById('conditionSwitch').innerHTML = "Today is: " + text;

    return true
}