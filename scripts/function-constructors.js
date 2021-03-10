"use strict";

//const num = new Number(3);

//console.log(num);

//ЭТО ВСЕ СТАНДАРТ ES5
//создаем функцию конструктор
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello my name is : ' + this.name);
    };
}

//Добавляем прототип в функцию конструктор User
User.prototype.exit = function() {
    console.log(`User ${this.name} exit`);
}

const ivan = new User('Ivan', 28),
      alex = new User('Alex', 20);

console.log(ivan, alex);


ivan.hello();
alex.hello();
ivan.exit();






