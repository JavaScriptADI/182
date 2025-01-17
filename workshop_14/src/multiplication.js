// import { add } from "./functions.js";
import add from "./functions.js";

export function multiply(a, b) {
    let s = 0;
    for (let i = 0; i < b; i++){
        s = add(s, a);
    }
    return s;
}
