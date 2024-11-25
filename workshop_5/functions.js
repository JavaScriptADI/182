function greetUser(user) {
    console.log(`Hello ${user}`);
}

function registerUser(firstName, age, user) {
    console.log(`${user} created successfully with name of ${firstName} and ${age} years old`);
}

// Call / Invoke
greetUser("Gia");
greetUser("Luka");
greetUser("Gigi");
greetUser("Zura");
greetUser();
// console.log(user);
registerUser("Luka", 22, "Test");
registerUser("Test", 23, "Luka");
// registerUser("Luka", "Test", 27);

console.log(greetUser("givi"));

