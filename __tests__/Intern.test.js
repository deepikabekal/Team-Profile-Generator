const Intern = require ('../lib/Intern');

//test to check if the intern object is created
test('create Intern object', () => {
    const intern = new Intern('Jane', 1, 'email', 'school');

    expect(intern.name).toEqual('Jane');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('email');
    expect(intern.school).toEqual('school');
});

//test to check if the method returns school name
test('gets school name', () => {
    const intern = new Intern('Jane', 1, 'email', 'school');

    expect(intern.getSchool()).toEqual('school');
});

//test to check if the method returns employee role
test('get employee role', () => {
    const intern = new Intern('Jane', 1, 'email', 'school');

    expect(intern.getRole()).toEqual('Intern');
})