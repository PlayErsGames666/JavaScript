function sumALL() {
    let sum = 0;
    const massive = [123, 124, 325, 1253];

    for (let i = 0; i < massive.length; i++) {
        sum += massive[i];
    }
    
    document.getElementById('sumAll').innerHTML = massive.join(' + ') + " = " + sum;
    
    return true
}

function multiplyAll() {
    let mutiply = 1;
    const massiv = [125, 122, 124];

    for (let i = 0; i < massiv.length; i++) {
        mutiply *= massiv[i];
    }
    
    document.getElementById('multiplyAll').innerHTML = massiv.join(' * ') + " = " + mutiply;

    return true
}


function getPositiveStats() {
    const numbers = [10, -5, 3, -8, 2, 0];

    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        
        if (num > 0) {
            sum += num;
            count++;
        }
    }

    document.getElementById('getPositiveStats').innerHTML = "count: " + count + '<br>';
    document.getElementById('getPositiveStats').innerHTML += "sum: " + sum;

    return true
}

function getEvenStats() {
    const numbers = [4, 7, 12, 19, 2, 5, 0, 8];

    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num % 2 === 0) {
            sum += num;
            count++;
        }
    }

    document.getElementById('getEvenStats').innerHTML = "Чётных чисел: " + count + "<br>";
    document.getElementById('getEvenStats').innerHTML += "Сумма чётных чисел: " + sum;

    return true
}

function getStats() {
    const numbers = [12, 5, 8, 19, 3, 24, 7, 2];

    let count = 0;
    let maxOdd = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num % 2 !== 0) {
            count++;
            
            if (num > maxOdd) {
                maxOdd = num;
            }
        }
    }

    document.getElementById('getStats').innerHTML = "Нечётных чисел: " + count + '<br>';
    document.getElementById('getStats').innerHTML += "Максимальное нечётное число: " + maxOdd;
    
    return true
}

