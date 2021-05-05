const Employee = require('../lib/Employee');

test('create employee object', () => {
    let employee = new Employee('Jane',1,"email");

    expect(employee.name).toBe('Jane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//test if the method get the name entered by the user
test('gets employee name', () => {
    let employee = new Employee('Jane', 1, "email");

    expect(employee.getName()).toEqual('Jane');
});

//test if the method gets the id entered by the user
test('gets employee id', () => {
    let employee = new Employee('Jane',1,'email');

    expect(employee.getId()).toEqual(1);
});

//test if the method gets email id entered by the user
test('gets employee email', () => {
    let employee = new Employee('Jane', 1, "email")

    expect(employee.getEmail()).toEqual('email');
});

//test if the method gets the role
test('gets employee role', () => {
    let employee = new Employee('Jane', 1, "email");

    expect(employee.getRole()).toEqual('Employee');
});

//test if the method gets the name
test('gets employee name', () => {
    let employee = new Employee('Jane', 1, "email");

    expect(employee.getName()).toEqual('Jane');
});

//test if the method gets the id
test('gets employee id', () => {
    let employee = new Employee('Jane', 1, "email");

    expect(employee.getId()).toEqual(1);
});

//test if the method gets the email
test('gets employee email', () => {
    let employee = new Employee('Jane', 1, "email");

    expect(employee.getEmail()).toEqual('email');
})