"use strict";

function doSomeWidthObj() {
    const options = {
        name: 'test',
        width: 1024,
        height: 740,
        bolt: false,
        color: {
            border: 'black',
            bg: 'red'
        },
        makeTest: function() {
            console.log('Test');
        }
    };
    
    console.log(options);
    console.log(options.width);
    console.log(options.color.bg);
    
    delete options.name; // delete name from options
    
    console.log(options);

    let count = 0;

    for (let key in options) { //перебор значений внутри обьекта
        if(typeof(options[key]) == 'object') {
            for(let i in options[key]) {
                console.log(`Property '${i}' have value : ${options[key][i]} `);
                count++;
            }
        } else {
            console.log(`Property '${key}' have value : ${options[key]} `);
            count++;
        }
        console.log(`Theare ${count} Keys in object options`);
    }

    console.log(Object.keys(options));  //object to Array
    console.log(Object.keys(options).length);  // length obj

    options.makeTest(); // Пример того как делаются методы объекта

    // Деструктуризая объекта

    console.log("Деструктуризая объекта");

    const {border, bg} = options.color;

    console.log(border, bg);
    console.log(bg);
}

doSomeWidthObj();

