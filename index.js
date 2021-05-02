//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
var empDesignation = "";
//array of common quesions
const commonQ = [
    {
        type : 'input',
        name : 'name', 
        message  : `Enter ${empDesignation}'s name.`,
        validate : nameInput => {
            if (nameInput)
            {
                return true;
            }
            else
            {
                console.log("Incorrect Enter! Try Again");
                return false;
            }
        }
        
    },
    {
        type : 'input',
        name : 'id', 
        message : `Enter ${empDesignation}'s employee ID.`,
        validate : idInput => {
            if (idInput)
            {
                return true;
            }
            else
            {
                console.log("Incorrect Entry! Try Again!");
                return false;
            }
        }, 
    },
    {
        type : "input",
        name : "email",
        message : `Enter ${empDesignation}'s email id`,
        validate : emailInput => {
            if(emailInput)
            {
                return true;
            }
            else 
            {
                console.log("Incorrect Entry! Try again!");
                return false;
            }
        }
    }
];

//array of questions for manager
const managerQ = [
    {
        type : "number",
        name : "phone",
        message : "Enter manager's phone number.",
        validate : phoneInput => {
            if (phoneInput)
            {
                return true;
            }
            else
            {
                console.log('Incorrect Entry! Try Again!');
                return false;
            }
        }
    }
];

//prompt menu question
const menuPrompt = [
    {
        type : "list",
        name : "menu", 
        message : "Choose one of the following : ",
        choices : ["Engineer", "Intern", "Finish Building My Team."] 
    }
];

//array of question if the user chooses engineer
const engineerQuestions = [
    {
        type : "input",
        name : "github",
        message : "Enter GitHub username.",
        validate : githubInput => {
            if (githubInput)
            {
                return true;
            }
            else
            {
                console.log("Invalid Entry! Try again!");
                return false;
            }
        }
    }
];

//array of question if the user choose intern
const internQ = [
    {
        type : "input",
        name : "school", 
        message : "Enter school name.",
        validate : schoolInput => {
            if (schoolInput)
            {
                return true;
            }
            else
            {
                console.log("Invalid Entry! Try again!");
                return false;
            }
        }
            
    }
];