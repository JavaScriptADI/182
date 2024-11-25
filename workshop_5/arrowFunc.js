const greet = (age = 27, user = "Legend") => { // function body
    console.log(`Hello ${user} age: ${age}`);
}

greet(25, "Nick");
greet(25);

console.log(greet());
