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

function arrayIsArray() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = Array.isArray(heroes);

    document.getElementById('arrayIsArray').innerHTML = heroes + " <br> = " + long;

    return true;
}

function arrayIsArray() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = Array.isArray(heroes);

    document.getElementById('arrayIsArray').innerHTML = heroes + " <br> = " + long;

    return true;
}  

function arrayDelete() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = delete heroes[0];

    document.getElementById('arrayDelete').innerHTML = heroes + " <br> = " + long;

    return true;
} 

function arrayConcat() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];
    const myHero = ["Godkiller"]

    let long = heroes.concat(myHero);

    document.getElementById('arrayConcat').innerHTML = heroes + " <br> = " + long;

    return true;
} 

function arrayCopyWithin() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.copyWithin(2, 0);

    document.getElementById('arrayCopyWithin').innerHTML = heroes + " <br> = " + long;

    return true;
} 

function arrayFlat() {
    const heroes = [["Deadpool", "Wolverine"] , ["Iron Man", "Spider Man"]];

    let long = heroes.flat();

    document.getElementById('arrayFlat').innerHTML = heroes + " <br> = " + long;

    return true;
} 

function arraySplice() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.splice(3, 0, "Adam", "Ghost Rider", "Frost");

    document.getElementById('arraySplice').innerHTML = heroes + " <br> = " + long;

    return true;
} 

function arrayToSpliced() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.toSpliced(0, 1);

    document.getElementById('arrayToSpliced').innerHTML = heroes + " <br> = " + long;

    return true;
}

function arraySlice() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.slice(2);

    document.getElementById('arraySlice').innerHTML = heroes + " <br>first 2 slised = " + long;

    return true;
}

function arrayToString() {
    const heroes = ["Deadpool", "Wolverine", "Iron Man", "Spider Man"];

    let long = heroes.toString();

    document.getElementById('arrayToString').innerHTML = heroes + " <br> = " + long;

    return true;
}




