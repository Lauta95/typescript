// *********type aliases & object types*********
// const add = (a: number, b: number) => {
//     return a + b;
// };
// console.log(add(1, 2));
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('department ' + this.name);
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
var accounting = new Department('Accounting');
accounting.addEmployee('Lautaro');
accounting.addEmployee('Ezequiel');
accounting.describe();
accounting.printEmployeeInfo();
