function permute(array, current = []) {
    if (array.length === 0) {
        console.log(current); // Output one permutation
        return;
    }
    for (let i = 0; i < array.length; i++) {
        const newArray = array.slice(0, i).concat(array.slice(i + 1)); // Exclude current element
        permute(newArray, current.concat(array[i])); // Recursively permute the rest
    }
}

// Example usage
permute([0, 1, 2]); 
