// *********type aliases & object types*********
// const add = (a: number, b: number) => {
//     return a + b;
// };
// console.log(add(1, 2));
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting);