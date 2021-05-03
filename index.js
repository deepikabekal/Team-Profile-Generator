//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
var empDesignation = "manager";
var commonAnswer = [];
const exitMessage = `Your Team Profile is generated!
You can find the file in dist folder.`
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
    ]);
};


//array of question if the user chooses engineer
const engineerQuestion = () => {
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
const internQuestion = () => {
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
.then (data => {
    console.log(data);
    commonAnswer.push(data);
    return managerQuestion()
})
.then (managerData => {
    console.log(managerData);
    commonAnswer.push(managerData);
    return menuPrompt();
})
.then (menuData => {
    console.log("menu data", menuData);
    empDesignation = menuData.menu;
    console.log(empDesignation);
    if (empDesignation === 'Engineer' || empDesignation === 'Intern')
    {
        return commonQuestions(empDesignation);
    }
    else
    {
        return "";
    }
    
})
.then ((empDesignation,empCommonData)  => {
    console.log("employee data",empCommonData);
    if (!empDesignation)
    {
        return console.log(exitMessage);    
    }
    else if (empDesignation === 'Engineer')
    {
        return engineerQuestion();
    }
    else 
    {
        return internQuestion();
    }
})
.then (empData => {
    console.log("empData",empData);
})
