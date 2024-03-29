// *********type aliases & object types*********

// const add = (a: number, b: number) => {
//     return a + b;
// };

// console.log(add(1, 2));

class Department {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('department ' + this.name);
    }

    addEmployee(employee: string) {
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
