const Manager = require('../Manager.js');

describe('Manager', () => {
  test('should throw error if render() is called', () => {
    const name = 'tan';
    const employeeId = 'id';    
    const manager = new Manager(name, employeeId, 'email', 'officeNumber');
    expect(manager.name).toBe(name);
    expect(manager.employeeId).toBe(employeeId);
  });
});