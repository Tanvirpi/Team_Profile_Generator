const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { Hmac } = require("crypto");

let employees_data = [];

const questions = [{
    type: 'input',
    message: "what is the employee's name?",
    name: 'name'
},
{
    type: 'input',
    message: "what is the employee's employeeId?",
    name: 'employeeId'
},
{
    type: 'input',
    message: "what is the employee's email address?",
    name: 'email'
},
{
    type: 'list',
    message: "what type of employee are you?",
    name: 'employee_type',
    choices: ["Manager", "Intern", "Engineer"],
},
{
    type: "input",
    name: "github",
    message: "Enter Engineer's Github username",
    when: (answers) => answers.employee_type == "Engineer"
},
{
    type: "input",
    name: "school",
    message: "Enter Intern's school name",
    when: (answers) => answers.employee_type == "Intern"
},
{
    type: "input",
    name: "officeNumber",
    message: "Enter Manager's Office Number",
    when: (answers) => answers.employee_type == "Manager"
},
];

const writeHTML = () => {
    var html =  employees_data[0].getbeginninghtml();
    for (let i=0; i < employees_data.length; i++) {
        html += employees_data[i].render()
    }
    html += employees_data[0].getendHTML();
    console.log(html);
    try {
        fs.writeFileSync('output.html',html,function(err){
            if(err) throw err;
        });
    } catch (err) {
        console.error(err);
    }
}

// const getEmployeeInfo = (employeeType) => {
//     let questionsForEmployee = questions;
//     if (employeeType === 'manager') {
//         const managerQuestion = {
//             type: 'input',
//             message: "what is the manager's office number?",
//             name: 'officeNumber'
//         };
//         questionsForEmployee.push(managerQuestion);
//         inquirer.prompt(questionsForEmployee).then((answers) => {
//             const manager = new Manager(
//                 answers.name, answers.employeeId,
//                 answers.email, answers.officeNumber);
//             console.log(`manager: ${JSON.stringify(manager)}`);
//             writeHtmlFile(manager);
//         });
//     } else if (employeeType === 'engineer') {
//         const engineerQuestion = {
//             type: 'input',
//             message: "what is the engineer's github?",
//             name: 'github'
//         };
//         questionsForEmployee.push(engineerQuestion);
//         inquirer.prompt(questionsForEmployee).then((answers) => {
//             const employee = new Engineer(
//                 answers.name, answers.employeeId,
//                 answers.email, answers.github);
//             writeHtmlFile(engineer);
//         });
//     }
//         else if (employeeType === 'intern') {
//             const engineerQuestion = {
//                 type: 'input',
//                 message: "what is the intern's school?",
//                 name: 'github'
//             };
//             questionsForEmployee.push(engineerQuestion);
//             inquirer.prompt(questionsForEmployee).then((answers) => {
//                 const employee = new Intern(
//                     answers.name, answers.employeeId,
//                     answers.email, answers.school);
//                 writeHtmlFile(intern);
//             });
//     }
// }


const main = async () => {
    inquirer.prompt(questions)
        .then(answers => {
            switch (answers.employee_type) {
                case "Manager":
                    let myManager = new Manager(answers.name, answers.email, answers.employeeId, answers.officeNumber)
                    employees_data.push(myManager)
                    continueAdd();
                    break;
                case "Intern":
                    let myIntern = new Intern(answers.name, answers.email, answers.employeeId, answers.school)
                    employees_data.push(myIntern)
                    continueAdd();
                    break;

                case "Engineer":
                    let myEngineer = new Engineer(answers.name, answers.email, answers.employeeId, answers.github)
                    employees_data.push(myEngineer)
                    continueAdd();
                    break;
            }
        })
};

const continueAdd = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "Do you want to add more employee",
            name: 'addEmployee',
            choices: ["Yes - add More Employee", "No - Generate Team HMTL & exit",],
        },

    ])
        .then(answers => {
            switch (answers.addEmployee) {
                case "Yes - add More Employee":
                    main()
                    break;
                default:
                    writeHTML();
            }

        })
}

main();


// writeHTML ();