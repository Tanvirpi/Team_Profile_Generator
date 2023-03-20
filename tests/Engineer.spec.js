const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
  test('should throw error if render() is called', () => {
    const name = 'tan';
    const employeeId = 'id';    
    const engineer = new Engineer(name, employeeId, 'email', 'github');
    expect(engineer.name).toBe(name);
    expect(engineer.employeeId).toBe(employeeId);
  });
});