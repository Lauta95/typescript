interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Lauta',
    age: 28,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hola, soy')