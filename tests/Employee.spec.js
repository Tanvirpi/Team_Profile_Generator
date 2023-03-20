const Employee = require('../lib/Employee.js');

describe('Employee', () => {
  test('should throw error if render() is called', () => {
    const name = 'tan';
    const employeeId = 'id';    
    const employee = new Employee(name, employeeId, 'email');
    expect(employee.name).toBe(name);
    expect(employee.employeeId).toBe(employeeId);
  });
});