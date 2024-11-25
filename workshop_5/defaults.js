// function greet(user) {
//     if (user === undefined) {
//         user = "Annonymous";
//     }
//     console.log(`Hello ${user}`);
// }
prompt

function greet(user = "Annonymous") {
    // local Scope
    // user parameter shadows global user variable
    let a = 28; // a shadows global a variable
    let x = 15;
    console.log(`Hello ${user} a = ${a}`);
}

// global
const user = "Nick";
const a = 7;

greet();
greet("Gia");
greet(user);
// console.log(x);