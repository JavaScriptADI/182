// How to access HTML tags / elements
const myElement = document.getElementById("test");
console.log(document.getElementsByClassName("v"));
console.log(document.getElementsByTagName("meta"));
console.log('query Selector:', document.querySelector('div')); // TAG
console.log('query Selector (id):', document.querySelector('#test')); // ID
console.log('query Selector (class):', document.querySelector('.v')); // Class
console.log('query Selector (class):', document.querySelector('div .v')); // child
console.log('query Selector (class):', document.querySelectorAll('div .v')); // children

console.log(myElement);
console.log(myElement.textContent);
console.log(myElement.innerText);
console.log(myElement.innerHTML);

// Changing HTML elements
myElement.addEventListener('click', () => {
    console.log("I have been clicked");
    myElement.innerText = Math.random();
    myElement.style.background = "green";
    myElement.style.color = "white";
    myElement.style.padding = "5px";
});
// myElement.addEventListener('click', () => {
//     console.log("I have been clicked (2nd event listener)");
// })


const someObject = {
    className: "Hello",
    style: {
        border: "1 px"
    }
}

// Deletion
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        myElement.remove();
    } else if (event.key === 'r') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        myElement.style.background = `rgb(${r}, ${g}, ${b})`;
    } else if (event.key === 'n') {
        // Create new elements
        const div = document.createElement('div');
        div.innerText = "Gamarjoba Zura";
        myElement.appendChild(div);
        console.log(myElement);
    } else if (event.key === 'b') {
        document.body.appendChild(myElement);
    }
    console.log(event.key);
});



