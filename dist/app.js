"use strict";
// *********type aliases & object types*********
// const add = (a: number, b: number) => {
//     return a + b;
// };
// console.log(add(1, 2));
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('department ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('Lautaro');
accounting.addEmployee('Ezequiel');
accounting.describe();
accounting.printEmployeeInfo();
