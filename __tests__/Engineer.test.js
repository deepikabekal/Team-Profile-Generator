const Engineer = require('../lib/Engineer');

//test to check if the engineer object is created
test('create engineer object', () => {
    const engineer = new Engineer('Jane', 1, 'email','janehub');

    expect(engineer.name).toEqual('Jane');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('email');
    expect(engineer.github).toEqual('janehub');
});


//test to check if the method gets the github username 
test('get the github user name', () => {
    const engineer = new Engineer('Jane', 1, 'email', 'janehub');

    expect(engineer.getGithub()).toEqual('janehub');
});

//test to check if the method gets the employee role
test('get employee role', () => {
    const engineer = new Engineer('Jane', 1, 'email', 'janehub');

    expect(engineer.getRole()).toEqual('Engineer');

});