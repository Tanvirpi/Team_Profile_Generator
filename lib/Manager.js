const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, employeeId, email, officeNumber) {
    super(name, employeeId, email);
    this.officeNumber = officeNumber;
  }
  render() {
    return `
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${this.name}</p>;
    <p class="card-text">${this.employeeId}</p>;
    <p class="card-text">${this.email}</p>;
    <p class="card-text">${this.officeNumber}</p>
  </div>
</div>
      `
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;