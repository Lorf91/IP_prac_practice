"use strict";

console.log("КОНТЕНТ ВЫЗОВА this");

function runTask1() {
    function showThis(a, b) {
        console.log(this);//получаем underfined, а в ES5 Обьект window
        function sum() {
            console.log(this);//получаем underfined, а в ES5 Обьект window
            //return this.a + this.b; //error, in ES5 NaN
            return a + b; //сработает замыкание функции
        }
    
        console.log(sum());
    }
    
    showThis(4, 5);
}

//runTask1();

function runTask2() {
    const obj = {
        a: 20,
        b: 15,
        sum: function() {
            console.log(this);
    
            function shout() { //данная функция не является методом она является функцией в методе поэтому контент вызова она теряет и получем underfined
                console.log(this);
            }
    
            shout();
        }
    };
    
    obj.sum();
}

//runTask2();

function task3() {
    function User(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        this.hello = function() {
            console.log("Hello! " + this.name);
        };
    
    }
    
    let ivan = new User('Ivan', 29);
    console.log(ivan);
}

//task3();

function runTask4() {
    function sayName(surname) {
        console.log(this);
        console.log(this.name + surname);
    }
    
    const user = {
        name: 'John '
    };
    
    //РУЧНОЕ ПРИСВОЕНИЕ КОНТЕКСТА
    sayName.call(user, 'Smith'); // передаем во внутрь функции sayName() контекст вызова функции User()
    sayName.apply(user, ['Smith']);// передаем во внутрь функции sayName() контекст вызова функции User()
    //Разница между методами .call() and .apply() заключается в синтаксисе передаваемых аргументов

    function count(num) {//(1)
        return this * num;//(2)
    }
    //помещаем в переменную double новую функцию 
    const double = count.bind(2); //(3) метод bind() создает новую функцию связанную с определенным контекстом
    console.log(double(11));//(4)
    //в строке (3) двойка передается в строку(2) в качестве this как контекст вызова а num(1) будет передаваться в (4)
}

runTask4();


//1)Обычная функция:  this = window, но если стоит strict - то получим underfined
//2)Контекст у методов объекта будет сам объект
//3)this в конструкторах и классах - это новый экземпляр объекта
//4)Ручная привязка rhis: call, apply, bind


