const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, github) {
      this.github = github;
      super(name, employeeId, email);
    }
    render() {
                    // <a href="https://github.com/${answers.manager_github}">Manager Github</a>            

      return `todo`;
    }
  }
  
  module.exports = Engineer;