/*
there won't a simultanious character sequence more than 9
ABC 

*/
// compresss this string
let text = "AAAAAAAAABBBCCCCCAAAACCCCCBBBBCCAAABCA";
// 9A3B5C4A

// console.log(text.length);
// console.log("9A3B5C4A".length);

function compressString(text) {
    let counter = 0;
    let letter = text[0];
    let compressedString = "";

    for (let i = 0; i < text.length; i++) { 
        while (letter === text[i]) {
            i++;
            counter++;
        }
        compressedString += `${counter}${letter}`;
        letter = text[i];
        counter = 1;
        if (i === text.length - 1) {
            compressedString += `${counter}${letter}`;
        }
    }

    // AABBCCAABB
    // AABCD
    console.log(`${text.length} -> ${compressedString.length}`)
    console.log(`${(1 - (compressedString.length / text.length)) * 100}% reduced`);

    return compressedString;
}

function decompress(compressedText) {
    let originalText = "";
    for (let i = 0; i < compressedText.length; i += 2) {
        const repeatCount = compressedText[i]
        const letter = compressedText[i + 1];
        originalText += letter.repeat(repeatCount);
    }
    return originalText;
}

console.log(compressString(text));
console.log(compressString("A"));
console.log(compressString("AB"));
console.log(compressString("AAAAABBBBCCCCDDDDDEEEEVVVV"));


// console.log(decompress(compressString("A")));
// console.log(decompress(compressString("AB")));
// console.log(decompress(compressString("ABBAAAAC")));




