const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeId, email, school) {
      this.school = school;
      super(name, employeeId, email);
    }
    render() {
      return `todo`;
    }
  }
  
  module.exports = Intern;