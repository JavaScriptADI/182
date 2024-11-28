// 0 1 1 2 3 5 8 13 21 34

function fib(n) {
    // base case 
    if (n === 1 || n === 0) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(40)); // fib(3) + fib(2)
// fib(2) + fib(1)


