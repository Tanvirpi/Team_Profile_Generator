const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, github) {
      super(name, employeeId, email);
      this.github = github;
    }
    render() {
         
    return `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${this.name}</p>;
      <p class="card-text">${this.employeeId}</p>;
      <p class="card-text">${this.email}</p>;
      <p class="card-text">${this.github}</p>
    </div>
  </div>`;
    }

    getRole(){
      return "Engineer"
    }
  }
  
  module.exports = Engineer;