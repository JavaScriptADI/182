function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    let result = 0;

    for (let i = 0; i < b; i++) {
        // result += a;
        result = add(a, result);
        // result = a + result;
    }
    return result;
}

// console.log(add(7, 6));

console.log(multiply(2, 7));
console.log(multiply(9, 2));
console.log(multiply(7, 2));
 
