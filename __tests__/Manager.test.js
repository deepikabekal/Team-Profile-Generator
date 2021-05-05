const Manager = require ('../lib/Manager');

//test to check if the manager object is created
test('create engineer object', () => {
    const manager = new Manager('Jane', 1, 'email',1234);

    expect(manager.name).toEqual('Jane');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('email');
    expect(manager.phoneNumber).toEqual(1234);
});

//test to check if the method returns phone number
test('get phone number', () => {
    const manager = new Manager('Jane', 1, 'email',1234);

    expect(manager.getPhoneNumber()).toEqual(1234);
});

//test to check if the method returns employee role
test('get employee role', () => {
    const manager = new Manager('Jane', 1, 'email',1234);

    expect(manager.getRole()).toEqual('Manager');
})