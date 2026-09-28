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

function objectPerson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

const friend = new objectPerson("Elnur", "Suinov", 21, "White");
const father = new objectPerson("Abay", "Pirnazarov", 55, "Black")

document.getElementById('personProperties').innerHTML = "My friend " + friend.fullName() + ".<br>" + "His age is " + friend.age + ".<br>" + "Eye colour is " + friend.eyeColor + ".<br><br>";
document.getElementById('personProperties').innerHTML += "My father " + father.fullName() + ".<br>" + "His age is " + father.age + ".<br>" + "Eye colour is " + father.eyeColor + ".<br>";
