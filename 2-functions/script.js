//2.1 Fonctions simples
const sayHello = () => console.log("Hello");
const sayMyName = (first, last) => console.log(first, last)
const sayMyAge = (age) => console.log('Your are' + ' ' +age + ' ' + 'years old')

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);
/*
const sayHello = function() {
    console.log('Hello')
};

const sayMyName = function(first, last) {
    console.log(first, last)
};


const sayMyAge = function(age) {
    console.log('You are ' + age + ' years old')
};
*/

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: () => console.log(object),
    /*
    showThis: function() {
        console.log(this)
    }
    */
};

object.showThis();
//on doit remplacer le this par object sinon rien ne s'affiche dans la console

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    showThis: () => console.log(odile),
    //sayHello: ...
    //sayMyName:...
    //sayMyAge:...
};
odile.showThis();
//odile.sayHello()
//odile.sayMyName()
//odile.sayMyAge()
