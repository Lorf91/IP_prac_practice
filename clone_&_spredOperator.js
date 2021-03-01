"use strict";

function doSomeOperations() {
    let a = 5,
        b = a;

    b = b + 5;

    console.log(b);
    console.log(a);

    const obj = {
        a: 5,
        b: 1
    };

    const copy = obj;

    copy.a = 10;

    console.log(copy);
    console.log(obj);


    //Поверхностная копия Объекта
    function copies(mainObj) {
        let objCopy = {};

        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }

        return objCopy;
    }

    const numbers = {
        a: 2,
        b: 1,
        c: 10,
        d: {
            x: 11,
            z: 21
        }
    };

    const newNumbers = copies(numbers);

    newNumbers.a = 10;
    newNumbers.d.x = 111;

    console.log(newNumbers);
    console.log(numbers);


    //Соединение несколько объектов

    const add = {
        u: 17,
        p: 20,
        l: {
            g:1
        }
    };

    console.log(Object.assign(numbers, add)); 
    //Соединение несколько объектов при этом создается независимая 
    //копия обьектов кроме вложенной структуры что видно ниже

    const cloneAdd = (Object.assign({}, add));

    add.l.g = 21;
    add.p = 99;
    cloneAdd.p = 88;
    cloneAdd.l['j'] = 77;

    console.log(add);
    console.log(cloneAdd);


    //Поверхностная копия массивов
    const oldArray = ['a', 'b', 'c', [1, 2, 3]];
    const newArray = oldArray.slice();
    
    oldArray[2] = 'X';
    newArray[1] = "y";
    oldArray[3][2] = 0;
    newArray[3][1] = "y"

    console.log(oldArray); //["a", "b", "X", Array(3)]
    console.log(newArray); //["a", "y", "c", Array(3)]
    console.log(oldArray[3]); //[1, "y", 0]
    console.log(newArray[3]); //[1, "y", 0]


    //Оператор Разворота spread operator (...) только поверхностное 'копирование'
    const video = ['youtube', 'vimeo', 'rutube',[1, 2, 3]],
          blogs = ['wordpress', 'livejournal', 'blogger'],
          internet = [...video, ...blogs, 'vk', 'instagram'];

    internet[3][1] = 99;

    console.log(internet);
    console.log(internet[3]);
    console.log(video[3]);

    const num = [2, 33, 4];

    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    log(...num); // разварачивает масив по элементам 
    //может пригодиться при получении данных от пользователя напримаер:
    // а - названия фильма; в - год; с - страна
    // данные приходят в виде массива поэтому для использовании егодалее в функции в качестве
    // аргументов его необходимо разложить на элементы

    const numArr = [[11,22],1, 2, 3, 4];

    const newNumArr = [...numArr]; //поверхностное копирование

    newNumArr[0][1] = 111;
    newNumArr[4] = 999;

    console.log(newNumArr);
    console.log(numArr);
    console.log(newNumArr[0]);
    console.log(numArr[0]);


    const q = {
        one: 1,
        two: 2,
        three: {
            a: 1
        }
    };

    const newObj = {...q}; //поверхностное копирование

    newObj.three.a = 5;
    newObj.two = 44;

    console.log(q);
    console.log(newObj);
}

doSomeOperations();


