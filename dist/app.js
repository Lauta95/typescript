"use strict";
// *********type aliases & object types*********
// const add = (a: number, b: number) => {
//     return a + b;
// };
// console.log(add(1, 2));
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // public name: string;
        this.employees = [];
    }
    describe() {
        console.log(`department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Lautaro');
accounting.addEmployee('Ezequiel');
accounting.describe();
accounting.printEmployeeInfo();
