class Employee {
    constructor(name, employeeId, email) {
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
    }
    static replaceString = '$$CHILD_SECTION$$';
    render() {
        const html = `<html>
        <head>
        </head>
        <body>
            <p>Employee Name: ${this.name}</p>
            <p>Employee Id: ${this.employeeId}</p>
            <a href="mailto:${this.email}">Send email to employee</a>
            ${Employee.replaceString}
        </body>
        </html>`;
        return html;
    }
    get html() {
        return this.render();
    }
  }
  
  module.exports = Employee;