// interface Greetable {
//     name: string;

//     greet(phrase: string): void;
// }

// class Person implements Greetable {
//     name: string;
//     age = 30;

//     constructor(n: string) {
//         this.name = n;
//     }

//     greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// let user1: Greetable;

// user1 = new Person('Lautaaa');

// user1.greet('Hola, soy');

// console.log(user1);

// ----

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('hi thereeeee!'));
