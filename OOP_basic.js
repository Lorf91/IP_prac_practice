"use strict";

function doSomeWithObj() {
    let str = 'some';
    let strObj = new String(str);

    console.log(str);
    console.log(strObj);
    console.log(typeof(str));
    console.log(typeof(strObj));

    let someObg = `hello ${strObj}`;

    console.log(typeof(someObg));

    console.dir([1,2,3]);
    console.dir(true);

}

doSomeWithObj();

const soldier = {
    name: 'Soldier',
    health: 400,
    armor: 200,
    weight: 90,
    sayHello: function() {
        console.log(`Hello ${this.name}`)
    }
};

const jonh = {
    health: 200,
    name: 'John'
};

// 1)jonh.__proto__=soldier; 
// устаревший метод

// 2)
Object.setPrototypeOf(jonh, soldier);
// Случай когда нужно установить в динамике т.е Jonh уже существовал 
// и мы установили ему прототип soldier

console.log(jonh);
console.log(jonh.armor);
console.log(jonh['weight']);

jonh.sayHello();
soldier.sayHello();

// 3)
const Sarah = Object.create(soldier);
//Мы создаем новый объект Sarah который будет прототипно наследоваться 
// от soldier и имепть доступ ко всем методам, свойствам объекта soldier

Sarah.name = 'Sarah';
Sarah.weight = 65;

console.log(Sarah);

Sarah.sayHello();






