const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber) {
        super(name, employeeId, email);
        this.officeNumber = officeNumber;
    }
    render() {
      const html = super.render();
      const managerSection = `<p>${this.officeNumber}</p>`;
      const ret = html.replace(Employee.replaceString, managerSection);
      return ret;
    }
  }
  
  module.exports = Manager;