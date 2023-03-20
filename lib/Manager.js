const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, employeeId, email, officeNumber) {
    super(name, employeeId, email);
    this.officeNumber = officeNumber;
  }
  render() {
    return `
      <div class="card bg-danger" style="width: 18rem;">
      <h3 class="card-title">Manager
   </h3>
  <div class="card-body">
    <p class="card-text">Name: ${this.name}</p>
    <p class="card-text">Employee_Id: ${this.employeeId}</p>
    <p class="card-text">Email: ${this.email}</p>
    <p class="card-text">Office Number: ${this.officeNumber}</p>
  </div>
</div>
      `
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;