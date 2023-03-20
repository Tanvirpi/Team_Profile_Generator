const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, github) {
      super(name, employeeId, email);
      this.github = github;
    }
    render() {
         
    return `<div class="card bg-secondary" style="width: 18rem;">
   <h3 class="card-title">Engineer
   </h3>
    <div class="card-body">
      <p class="card-text">Name: ${this.name}</p>;
      <p class="card-text">EmployeeId: ${this.employeeId}</p>;
      <p class="card-text">Email: ${this.email}</p>;
      <p class="card-text">Github: ${this.github}</p>
    </div>
  </div>`;
    }

    getRole(){
      return "Engineer"
    }
  }
  
  module.exports = Engineer;