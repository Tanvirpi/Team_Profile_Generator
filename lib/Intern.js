const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeId, email, school) {
      super(name, employeeId, email);
      this.school = school;
    }
    render() {
      return `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${this.name}</p>;
        <p class="card-text">${this.employeeId}</p>;
        <p class="card-text">${this.email}</p>;
        <p class="card-text">${this.school}</p>
      </div>
    </div>`;
    }

    getRole(){
      return "Intern"
    }
  }
  
  module.exports = Intern;