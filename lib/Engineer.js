const Employee = require('./Employee');

//inherit the properties from the Employee object and add new properties and methods
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    
}

module.exports = Engineer;