function arrayLength() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.length;

    document.getElementById('arrayLength').innerHTML = heroes + ". <br> Lengh of Heroes Names = " + long;

    return true;
}

function arrayAt() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.at(2);

    document.getElementById('arrayAt').innerHTML = heroes + ". <br> At chooser of Heroes Names = " + long;

    return true;
}

function arrayJoin() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.join(" / ");

    document.getElementById('arrayJoin').innerHTML = heroes + ". <br> Join of Heroes Names creates / between the array = " + long;

    return true;
}

function arrayPop() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.pop();

    document.getElementById('arrayPop').innerHTML = heroes + " <br> = " + long;

    return true;
}

function arrayPush() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.push("Capitan America");

    document.getElementById('arrayPush').innerHTML = heroes + " <br> = " + long;

    return true;
}

function arrayShift() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.shift();

    document.getElementById('arrayShift').innerHTML = heroes + " <br> = " + long;

    return true;
}

function arrayUnshift() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.unshift("Black Knight");

    document.getElementById('arrayUnshift').innerHTML = heroes + " <br> = " + long;

    return true;
}

