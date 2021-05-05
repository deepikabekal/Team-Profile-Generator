var callFuntion = "";

function generatePage (employeeArray) {
    initialSection();
    employeeArray.filter(item => item.getRole() === 'Manager')
        .map(item => managerCard(manager))
        .join("");
    employeeArray.filter(item => item.getRole() === 'Engineer')
        .map(item => engineerCard(engineer))
        .join("");
    employeeArray.filter(item => item.getRole() === 'Intern')
        .map(item => internCard(intern))
        .join("");
    lastSection();
}


function initialSection(employeeArray) 
    {
        console.log(employeeArray);
        return`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile Generator</title>
                <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
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

function managerCard(manager) {
    return `<div class = "col-sm-3" id = "emp-container">
        <div class = "row" id="emp-heading-row">
            <!-- name of the employee -->
                <h3>${manager.name}</h3>
                <!-- employee designation -->
                <h4>${manager.getRole()}</h4>
        </div>
        <div class="row">
            <div>
                <p>ID : ${manager.id}</p>
                <p>Email : ${manager.email}</p>
                <!-- office number for manager, github for engineer and school for intern -->
                <p>Phone Number : ${manager.email}</p>
            </div>
        </div>
    </div>`
}

function engineerCard(engineer) {
    return `<div class = "col-sm-3" id = "emp-container">
        <div class = "row" id="emp-heading-row">
            <!-- name of the employee -->
                <h3>${engineer.name}</h3>
                <!-- employee designation -->
                <h4>${engineer.getRole()}</h4>
        </div>
        <div class="row">
            <div>
                <p>ID : ${engineer.id}</p>
                <p>Email : ${engineer.email}</p>
                <!-- office number for manager, github for engineer and school for intern -->
                <p>Github : ${engineer.github}</p>
            </div>
        </div>
    </div>`
}

function internCard(intern) {
    return `<div class = "col-sm-3" id = "emp-container">
        <div class = "row" id="emp-heading-row">
            <!-- name of the employee -->
                <h3>${intern.name}</h3>
                <!-- employee designation -->
                <h4>${intern.getRole()}</h4>
        </div>
        <div class="row">
            <div>
                <p>ID : ${intern.id}</p>
                <p>Email : ${intern.email}</p>
                <!-- office number for manager, github for engineer and school for intern -->
                <p>School : ${intern.school}</p>
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