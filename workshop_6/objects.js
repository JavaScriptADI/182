const person = {
    "firstName": "Nick",
    "age": 27,
    "car": "Alfa Romeo",
    friends: [
        "Nick", "George", "Zura", "Marry",
    ]
};
const people = [
    {
        firstName: "Nick",
        age: 27,
        car: "Alfa Romeo",
        friends: [
            "Nick", "George", "Zura", "Marry",
        ]
    },
    {
        "firstName": "George",
        "age": 23,
        "car": null,
        friends: [
            "Nick", "George", "Zura", "Marry",
        ]
    },
    {
        "firstName": "Magda",
        "age": 33,
        "car": "Prius",
        friends: [
            "Nick",
        ]
    }
]

console.log(person["firstName"]);
console.log(person["friends"][person["friends"].length - 1]);

console.log(person.firstName);
console.log(person.pet);
person.pet = "Brittish shorthair";
console.log(person);
person.pet = "Doggo";
console.log(person);
delete person.pet;
console.log(person);

for (const person of people) {
    console.log(person.firstName, 'has', person.car);
}

people.push({
    "firstName": "Marry",
    "age": 27,
    "car": "Alfa Romeo",
    friends: [
        "Nick", "George", "Zura", "Marry",
    ]
});

console.log(people[people.length - 1]);
