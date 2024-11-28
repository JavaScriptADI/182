// abba
//  ^^
// abbcbba
//   
// cdec


/*
1. left = 1st and  right = last character in string
2. while (midlde is not reached)
3.      compare left to right
4.      if (left != right) 
5.      { return false; }
6. end while
7. this string is palindrome so return true
*/


function isPlanidrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


console.log('Zura: ', isPlanidrome("Zura"));
console.log('zemotadidatomez: ', isPlanidrome("zemotadidatomez"));
console.log('abba: ', isPlanidrome("abba"));
console.log('abbcbba: ', isPlanidrome("abbcbba"));
console.log('cdec: ', isPlanidrome("cdec"));


