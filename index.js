const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");


function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    } , {
        type: "list",
        message: "Would you like to stop the program? (Select 'No' if you just started.) Note: This program can only hold 8 Employees",
        choices: ["Yes", "No"],
        name: "stop"
    }];

    return inquirer.prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}

let employeeArray = [];

function run() {
    runInquirer().then(function ({ stop, name, id, email, title }) {

        if (stop == "No" && title == "Manager") {
            runInquirerManager().then(function ({ officeNumber }) {
                this.employee = new Manager(name, id, email, officeNumber, title);
                console.log(officeNumber);
                employeeArray.push(employee);
                console.log("Employee Added");
                run();
            });

        } else if (stop == "No" && title == "Engineer") {
            runInquirerEngineer().then(function ({ github }) {
                this.employee = new Engineer(name, id, email, github, title);
                employeeArray.push(employee);
                console.log("Employee Added");
                run();
            });

        } else if (stop == "No" && title == "Intern") {
            runInquirerIntern().then(function ({ school }) {
                this.employee = new Intern(name, id, email, school, title);
                employeeArray.push(employee);
                console.log("Employee Added");
                run();
            });
        } else {
            console.log("Program ended")
            generateHTML();
        }

        }).catch(function (err) {
            console.log("There was an error.");
            console.log(err);
        });
}

function generateHTML() {

function displayTitle(employee) {
    if (employee.title === "Manager") {
        console.log(employee.officeNumber);
        return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
        return `school: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
        return `gitHub: ${employee.github}`;
    }

}
function getCardHtml() {
    let html = "";
    for (i = 0; i < employeeArray.length; i++) {
        console.log(employeeArray[i])
        html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${employeeArray[i].name}</h4>
            </div>
            <div class="col card-header">
                <h4>${employeeArray[i].title}</h4 >
            </div >
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                <li class="list-group-item">Email: ${employeeArray[i].email}</li>
                <li class="list-group-item"> ${displayTitle(employeeArray[i])}</li>
            </ul>
        </div > `;
    }
    return html;
}

fs.writeFile('./dist/sample.html', `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                        <title>Document</title>
                        <style>
                            .row {
                                display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;
}
.card {
                                padding: 15px;
border-radius: 6px;
background-color: white;
color: lightskyblue;
margin: 15px;
}
.text {
                                padding: 15px;
border-radius: 6px;
background-color: lightskyblue;
color: black;
margin: 15px;
}
.col {
                                flex: 1;
text-align: center;
}
</style>
</head>
                    <body>
                        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                            <span class="navbar-brand mb-0 h1">
                                <h1>My Team</h1>
                            </span>
                        </nav>
                        <div class="row">
                            ${getCardHtml()}
                        </div>
                    </body>

</html>`, (err) => err ? console.error(err) : console.log('Successfully saved to file!'));
}

run();