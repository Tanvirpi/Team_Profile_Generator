const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


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
}
];

const writeHtmlFile = (employee) => {
    try {
        console.log(`foo: ${typeof employee}`);
        console.log(`bar: ${employee}`);
        fs.writeFileSync('output.html', employee.html);
      } catch (err) {
        console.error(err);
      }
    // console.log(`answers: ${JSON.stringify(answers)}`);
}

const getEmployeeInfo = (employeeType) => {
    let questionsForEmployee = questions;
    if (employeeType === 'manager') {
        const managerQuestion = {
            type: 'input',
            message: "what is the manager's office number?",
            name: 'officeNumber'
        };
        questionsForEmployee.push(managerQuestion);
        inquirer.prompt(questionsForEmployee).then((answers) => {
            const manager = new Manager(
                answers.name, answers.employeeId, 
                answers.email, answers.officeNumber);
            console.log(`manager: ${JSON.stringify(manager)}`);
            writeHtmlFile(manager);
        });
    } else if (employeeType === 'engineer') {
        const engineerQuestion = {
            type: 'input',
            message: "what is the engineer's github?",
            name: 'github'
        };
        questionsForEmployee.push(engineerQuestion);
        inquirer.prompt(questionsForEmployee).then((answers) => {
            const employee = new Engineer(
                answers.name, answers.employeeId, 
                answers.email, answers.github);
            writeHtmlFile(employee);
        });
    }
}

const main = async () => {
    let employees = [];
    const managerInfo = getEmployeeInfo('manager');
    employees.push(managerInfo);

    // const otherEmployees = displayMenu();
    // employees = employees.concat(employees, otherEmployees);
    // writeHtmlFile(employees);
};

main();