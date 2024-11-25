const waldo1 = ["Alice", "Bob", "Waldo", "Winston"];
const waldo2 = ["Alice", "Bob", "Winston", "Waldo"];
const waldo3 = ["Alice", "Bob", "Waldo", "Gia", "Winston"];
const waldo4 = ["Alice", "Bob", "Nick", "Guram", "Waldo", "Winston"];

// function definition / declaration

function add(a, b) {
    return a * b + 8;

}
// findSomeone("Name", [1, 2, 3,]);

function findSomeone(name, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return i;
        }
    }
    return -1;
}

function findWaldo(waldoArr) {
    const indexOfWaldo = findSomeone("Waldo", waldoArr);
    if (indexOfWaldo === -1) {
        console.log("We could not find him :(");
    } else {
        console.log(`We foudn you at ${indexOfWaldo} index`);

    }
}



findWaldo(waldo1);
findWaldo(waldo2);
findWaldo(waldo3);
findWaldo(waldo4);

console.log(findSomeone("Nick", waldo4));
console.log(findSomeone("Nick", ["Jojo", "Zura", "Givi"]));

// findSomeone(30, [5, 7, 8, 30]);


const firstCalc = add(2, 8);
console.log(firstCalc + add(9, 3));


// for (let i = 0; i < waldo1.length; i++) {
//     if (waldo1[i] === "Waldo") {
//         console.log(`We found waldo at ${i} index`);
//         break;
//     }
// }


// for (let i = 0; i < waldo2.length; i++) {
//     if (waldo2[i] === "Waldo") {
//         console.log(`We found waldo at ${i} index`);
//         break;
//     }
// }


// for (let i = 0; i < waldo3.length; i++) {
//     if (waldo3[i] === "Waldo") {
//         console.log(`We found waldo at ${i} index`);
//         break;
//     }
// }

// for (let i = 0; i < waldo2.length; i++) {
//     if (waldo2[i] === "Waldo") {
//         console.log(`We found waldo at ${i} index`);
//         break;
//     }
// }

