//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
var empDesignation = "manager";
var commonAnswer = [];
//array of common quesions
const commonQuestions = (empDesignation) => {
    return inquirer.prompt([
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
    ]);
};

//prompt menu question
const menuPrompt = () => {
    return inquirer.prompt([
        {
            type : "list",
            name : "menu", 
            message : "Choose one of the following : ",
            choices : ["Engineer", "Intern", "Finish Building My Team."] 
        }
    ]);
};

//array of questions for manager
const managerQuestion = () => {
    return inquirer.prompt([
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
    ]);
};


//array of question if the user chooses engineer
const engineerQ = () => {
    return inquirer.prompt([
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
    ]);
};

//array of question if the user choose intern
const internQ = () => {
    return inquirer.prompt([
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
    ]);
};

commonQuestions(empDesignation)
.then(data => {
    console.log(data);
    commonAnswer.push(data);
    managerQuestion();
})
.then(managerData => {
    console.log(managerData);
})