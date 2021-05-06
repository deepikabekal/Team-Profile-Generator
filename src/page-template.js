//function that will arrange the html page appropriately
function generatePage (employeeArray) {
    return `${initialSection()}
    ${employeeArray.filter(item => item.getRole() === 'Manager')
        .map(item => managerCard(item))
        .join("")}
    ${employeeArray.filter(item => item.getRole() === 'Engineer')
        .map(item => engineerCard(item))
        .join("")}
    ${employeeArray.filter(item => item.getRole() === 'Intern')
        .map(item => internCard(item))
        .join("")}
    ${lastSection()}`
}

//function with initial html code
function initialSection() 
    {
        //console.log(employeeArray);
        return`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile Generator</title>
                <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
                <link rel="stylesheet" href="./style.css">
            </head>
            <body>
                <header>            
                    <h1 id="heading">My Team</h1>
                </header>   
                
                <main class="container">
                    <div class = "row">
                        <!-- dynamic with user input -->
                                           
                    `
    }   
//function with html for manager data display
function managerCard(manager) {
    return `<div class = "col-sm-3" id = "emp-container">
        <div class = "row" id="emp-heading-row">
            <!-- name of the employee -->
                <h3>${manager.getName()}</h3>
                <!-- employee designation -->
                <h4><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h4>
        </div>
        <div class="row">
            <div>
                <p>ID : ${manager.getId()}</p>
                <p>Email : <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <!-- office number for manager, github for engineer and school for intern -->
                <p>Phone Number : ${manager.getPhoneNumber()}</p>
            </div>
        </div>
    </div>`
}

//function with html for engineer data display
function engineerCard(engineer) {
    return `<div class = "col-sm-3" id = "emp-container">
        <div class = "row" id="emp-heading-row">
            <!-- name of the employee -->
                <h3>${engineer.getName()}</h3>
                <!-- employee designation -->
                <h4><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h4>
        </div>
        <div class="row">
            <div>
                <p>ID : ${engineer.getId()}</p>
                <p>Email : <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <!-- office number for manager, github for engineer and school for intern -->
                <p>Github : <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
            </div>
        </div>
    </div>`
}

//function with html for intern data display
function internCard(intern) {
    return `<div class = "col-sm-3" id = "emp-container">
        <div class = "row" id="emp-heading-row">
            <!-- name of the employee -->
                <h3>${intern.getName()}</h3>
                <!-- employee designation -->
                <h4><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h4>
        </div>
        <div class="row">
            <div>
                <p>ID : ${intern.getId()}</p>
                <p>Email : <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <!-- office number for manager, github for engineer and school for intern -->
                <p>School : ${intern.getSchool()}</p>
            </div>
        </div>
    </div>`
}

function lastSection() {
    return `</div>
    </main>
</body>
</html>`
}


module.exports = generatePage;