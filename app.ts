// *********type aliases & object types*********

// const add = (a: number, b: number) => {
//     return a + b;
// };

// console.log(add(1, 2));

class Department {
    name: string;

    constructor(n: string){
        this.name = n;
    }
}

const accounting = new Department('Accounting');

console.log(accounting);
