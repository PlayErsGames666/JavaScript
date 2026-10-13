
// JavaScript Document of const arrays
// const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi']
// cars[0] = 'Opel' // change the 0 index element of the array
// cars.push('Mercedes') // add new element to the end of the array

// // JavaScript Document of const objects
// const car = {type: 'Fiat', model: '500', color: 'white'}
// car.color = 'red' // change the color property of the object
// car.owner = 'John' // add new property to the object

let x, y, z 
x = 5
y = 10
z = x + y

let year = 20
let a, b

a = 6
b = 10

// JavaScript Document of typeof operator
typeof "Hello" // Returns "string"
typeof 3.14 // Returns "number"
typeof false // Returns "boolean"
typeof [1, 2, 3, 4] // Returns "object"
typeof {name: 'John', age: 34} // Returns "object"
typeof null // Returns "object"
typeof undefined // Returns "undefined"

function Condition() {
    if (10 > 5) {
        console.log('10 is greater than 5')
    }
    else if (10 < 5) {
        console.log('10 is less than 5')
    }
    else {
        console.log('10 is not defined')
    }
    document.getElementById('condition').innerHTML = 'Condition if: 10 is greater than 5'

    return true
}

function scount() {
    let smoke = 2;
    let day = 10;
    let week = day * 7;
    let month = week * 4;

    if (smoke === 2 && day === 10 && week === day * 7 && month === week * 4) {
        document.getElementById('scount').innerHTML = 'Monthly scount: ' + (month / smoke);
    }

    return true
}

function workingTime() {
    let workDay = 9
    let workWeek = workDay * 6
    let workMonthFree = workDay * 2
    let workMonth = (workWeek * 4) + workMonthFree

    document.getElementById('workingTime').innerHTML = 'Monthly working time: ' + workMonth + ' hours';

    return true
}


function textFunction() {
    const fname = 'Jon'

    document.getElementById('age').innerHTML = fname + ' is ' + year + ' years old.'
    document.getElementById('age').style.fontSize = '20px'
    document.getElementById('age').style.color = 'blue'
    document.getElementById('age').style.fontFamily = 'Arial'
    
    return true
}    

function letFunction() {
    document.getElementById('age').innerHTML = x + ' + ' + y + ' = ' + z;

    return true
}   

function SqureFunction(a, b) {
    document.getElementById('squere').innerHTML = 'a = ' + a + ', b = ' + b + '; Squere: ' + (a * b);

    return true
}

function licenseCheck() {
    let age = 20
    let passcar = true
    let name = 'John'

    if (age >= 18 && passcar === true) {
        document.getElementById('condition2').innerHTML = name + ' is ' 
        + age + ' years old and has a driving license.';
    }
    else if (age >= 18 && name == 'John') {
        document.getElementById('condition2').innerHTML = name + ' is ' 
        + age + ' years old and does not have a driving license.';
    }
    else {
        document.getElementById('condition2').innerHTML = name + ' is ' 
        + age + ' years old and does not have a driving license.';
    }
    document.getElementById('condition2').innerHTML = 'Condition if else: ' + name + ' is ' + age + ' years old and has a driving license.'; 
    
    return true
}

function ternaryCheck() {
    let age = 18
    let name = 'John'
    let result = (age >= 18) ? name + ' is valid for drink the beer. ' + 'He/She is ' + age + 'years old.' : name + ' is gay.';

    document.getElementById('ternary').innerHTML = 'Ternary check: ' + result;

    return true
}

function switchDay() {
    let day 
    let date = new Date().getDay();

    switch (date) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
        default:
            day = 'Looking for ur eyes'
    }

    document.getElementById('switch').innerHTML = 'Today is: ' + day

    return true
}

function booleanText() {
    let text = ' '
    let i = 1

    while (i < 10) {
        text += i;
        i++;
    }

    document.getElementById('boolean').innerHTML = text

    document.getElementById('boolean2').innerHTML = '10 more than 9: ' + Boolean(10 > 9)

    return true
}

function dateHoursMinutes() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    document.getElementById('hour').innerHTML = 'Current hour: ' + h + ':' + m;

    return true
}

console.log('Start');
