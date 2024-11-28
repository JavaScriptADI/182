function sumOfOdd(numbers) {
    let s = 0;
    for (const num of numbers) {
        if (num % 2 === 1) {
            s += num;
        }
    }
    return s;
}

console.log(sumOfOdd([0, 3, 2, 2, 25, 60, 60]))
