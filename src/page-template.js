`<!DOCTYPE html>
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
            <div class = "col-sm-3" id = "emp-container">
                <div class = "row" id="emp-heading-row">
                    <!-- name of the employee -->
                    <h3>employee name</h3>
                    <!-- employee designation -->
                    <h4>employee designation</h4>
                </div>
                <div class="row">
                    <div>
                        <p>ID : </p>
                        <p>Email : </p>
                        <!-- office number for manager, github for engineer and school for intern -->
                        <p>xyz</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    

</body>
</html>`