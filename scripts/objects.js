function objectMethod() {
    const person = {
        firstName: "Elnur",
        lastName: "Suinov",
        dateOfBirth: "18-01-2005",
        skills: ["Python", "PostgreSQL"],
        getElements: function() {
            return this.firstName + " " + this.lastName + " " +
            this.dateOfBirth + " " + this.skills.join(", ");
        }
    }
    document.getElementById("objectPerson").innerHTML = person.getElements();

    return true;
}

function objectWindow() {
    let x = this;

    document.getElementById('objectWindow').innerHTML = x;

    return true;
}

function objectDisplay() {
    const person = {
        name: "Karl",
        age: 20,
        isGay: true,
    };

    let text = person;

    document.getElementById('objectDisplay').innerHTML = text;

    return true;
}

function objectLoop() {
    const person = {
        name: "Karl",
        age: 20,
        isGay: true,
    };

    let text = "";
    for (let i in person) {
        text += person[i] + "<br>";
    }

    document.getElementById('objectLoop').innerHTML = text;

    return true;
}

function objectValues() {
    const person = {
        name: "Karl",
        age: 20,
        isGay: true,
    };

    const myArray = Object.values(person);

    let text = myArray.toString();

    document.getElementById('objectValues').innerHTML = text;

    return true;
}

function objectEntries() {
    const person = {
        name: "Karl",
        age: 20,
        isGay: true,
    };   

    let text = "";
    for ([character, values] of Object.entries(person)) {
        text += character + ": " + values + "<br>";
    }

    document.getElementById('objectEntries').innerHTML = text;

    return true;
}

function objectJSON() {
    const person = {
        name: "Karl",
        age: 20,
        isGay: true,
    };   
    
    let text = JSON.stringify(person);

    document.getElementById('objectJson').innerHTML = text;

    return true;
}