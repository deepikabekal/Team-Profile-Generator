const Employee = require('./Employee');

//inherit the properties from the Employee object and add new properties and methods
class Engineer extends Employee {
    constructor(github){
        this.github = github;
    }
    
}

