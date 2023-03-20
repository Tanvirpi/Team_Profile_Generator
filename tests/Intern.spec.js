const Intern = require('../lib/Intern.js');

describe('Intern', () => {
  test('should throw error if render() is called', () => {
    const name = 'tan';
    const employeeId = 'id';    
    const intern = new Intern(name, employeeId, 'email', 'school');
    expect(intern.name).toBe(name);
    expect(intern.employeeId).toBe(employeeId);
  });
});
