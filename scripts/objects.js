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