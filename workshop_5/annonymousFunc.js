// function compareFn(a, b) {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }

//     return 0;
// }

// const compareFn = function(a, b) {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }

//     return 0;
// }

const nums = [1, 2, 3, 4, -10, 10, -1000, 1000, 1, 1,];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//         console.log(nums[i]);
//     }
// }


// nums.sort(compareFn);
nums.sort(function(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }

    return 0;
});
console.log(nums);

// nums.sort(function(a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }

//     return 0;
// });
nums.sort(function(a, b) {
    return a - b;
})

nums.sort((a, b) => a - b);
nums.sort((a, b) => b - a);

console.log(nums.findIndex((value) => value === -1000));

function predicate(value) {
    if (value === -1000) {
        return true
    }
    return false;
}

for (const i in nums) {
    if (predicate(nums[i])) {
        console.log(`found at ${i}`);
    }
}
console.log(nums);