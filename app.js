var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Lautaro",
    age: 28,
    role: 7
};
console.log(person.name);
console.log(person.age);
if (person.role == 5) {
    console.log('THIS IS THE ADMIN');
}
else if (person.role == 6) {
    console.log('THIS USER IS CAN ONLY READ');
}
else if (person.role == 7) {
    console.log('THIS USER IS THE AUTHOR');
}
