//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//variables
var empDesignation = "Manager";
var employeeData = []; //array to store each employee data
var employeeObjectArray = []; //array to store each employee object thats created
const exitMessage = `Your Team Profile is generated!
You can find the file in dist folder.`


//array of common quesions
var commonQuestions = (empDesignation) => {
    inquirer.prompt([
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
    ])
    .then ((data) => {
        employeeData = [];
        employeeData.push(data);
        //console.log("employee data", employeeData);    
        checkEmployee(employeeData); 
    });
    
};

//depending on the employee designation appropriate functions are called.
function checkEmployee(employeeData) {
    switch (empDesignation) {
        case "Manager":
            managerQuestion(employeeData);
            break;
        case "Engineer" :
            engineerQuestion(employeeData);
            break;
        case "Intern" : 
            internQuestion(employeeData)
            break;
        default :
            console.log("help");
    } 
}

//array of questions for manager
const managerQuestion = () => {
    inquirer.prompt([
        {
            type : "input",
            name : "phone",
            message : "Enter manager's phone number.",
            validate : phoneInput => {
                if (isNaN(phoneInput))
                {
                    return "Incorrect Entry! Please enter a number.";
                }
                return true;
            }
        }
    ])
    .then (data => {
        employeeData.push(data);
        console.log("employee data with number", employeeData);
        const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.phone);
        employeeObjectArray.push(manager);
        menuPrompt();
    })
};

//prompt menu question
const menuPrompt = () => {
    inquirer.prompt([
        {
            type : "list",
            name : "menu", 
            message : "Choose one of the following : ",
            choices : ["Engineer", "Intern", "Finish Building My Team."] 
        }
    ])
    .then (menuData => {
        empDesignation = menuData.menu;
        console.log(empDesignation);
        if (empDesignation === 'Engineer' || empDesignation === 'Intern')
        {
            return commonQuestions(empDesignation);
        }
        else
        {
            return console.log(exitMessage);
        }

    })
};


//array of question if the user chooses engineer
const engineerQuestion = () => {
    inquirer.prompt([
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
    ])
    .then (data => {
        employeeData.push(data);
        console.log("employee data with number", employeeData);
        const engineer = new Engineer (employeeData.name, employeeData.id, employeeData.email, employeeData.github);
        employeeObjectArray.push(engineer);
        menuPrompt();
    })
};

//array of question if the user choose intern
const internQuestion = () => {
    inquirer.prompt([
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
    ])
    .then (data => {
        employeeData.push(data);
        console.log("employee data with number", employeeData);
        const intern = new Intern (employeeData.name, employeeData.id, employeeData.email, employeeData.school);
        employeeObjectArray.push(intern);
        menuPrompt();
    })
};

 commonQuestions(empDesignation);
