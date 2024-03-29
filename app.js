// *********type aliases & object types*********
// const add = (a: number, b: number) => {
//     return a + b;
// };
// console.log(add(1, 2));
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // public name: string;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Lautaro');
accounting.addEmployee('Ezequiel');
accounting.describe();
accounting.printEmployeeInfo();
