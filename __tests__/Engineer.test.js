const Engineer = require('../lib/Engineer');

//test to check if the engineer object is created
test('create engineer object', () => {
    const engineer = new Engineer('Jane', 1, 'email','janehub');

    expect(engineer.github).toEqual(expect.any(String));
});

