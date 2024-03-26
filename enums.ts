// ***********enums y custom types:*********
enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person: {
    name: string;
    age: number;
    role: number;
} = {
    name: "Lautaro",
    age: 28,
    role: 7
};

console.log(person.name);
console.log(person.age);

if (person.role == 5) {
    console.log('THIS IS THE ADMIN');
} else if (person.role == 6) {
    console.log('THIS USER IS CAN ONLY READ');
} else if (person.role == 7) {
    console.log('THIS USER IS THE AUTHOR');
}
