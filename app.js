var user1;
user1 = {
    name: 'Lauta',
    age: 28,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hola, soy');
