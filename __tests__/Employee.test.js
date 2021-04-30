const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Jane',1,"email");

    expect(employee.name).toBe('Jane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})