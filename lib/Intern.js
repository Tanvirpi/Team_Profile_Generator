const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeId, email, school) {
      super(name, employeeId, email);
      this.school = school;
    }
    render() {
      return `<div class="card bg-success" style="width: 18rem;">
      <h3 class="card-title">Intern
   </h3>
      <div class="card-body">
        <p class="card-text">Name: ${this.name}</p>
        <p class="card-text">Employee_Id: ${this.employeeId}</p>
        <p class="card-text">Email: ${this.email}</p>
        <p class="card-text">School: ${this.school}</p>
      </div>
    </div>`;
    }

    getRole(){
      return "Intern"
    }
  }
  
  module.exports = Intern;