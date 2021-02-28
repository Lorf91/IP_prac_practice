"use strict";

// console.dir(Number);
// console.dir(String);

function doSomeMethods() {
    const logg = "Hello world";

    console.log("1)=>   " + logg.slice(3,5)); //=> lo
    console.log("2)=>   " + logg.slice(3,4)); //=> l
    console.log("3)=>   " + logg.slice(3,3)); //=> (пусто так как выбор с третьего и по третий)
    console.log("4)=>   " + logg.indexOf('world'));//=> 6
    console.log("5)=>   " + logg.toUpperCase());//=> HELLO WORLD
    console.log("6)=>   " + logg.toLowerCase());//=>hello world
    console.log("7)=>   " + (logg.slice(logg.indexOf('world'))).toUpperCase()); //=> WORLD
    console.log("8)=>   " + logg.substring(3,5));//=> lo
    console.log("8)=>   " + logg.substring(3,4));//=> l

    function toSecondBigLetters() {
        let lOgG = '';

        for (let i = 0; i < logg.length; i++) {
            if ([i + 1] % 2 == 0) {
                lOgG += logg[i].toUpperCase();
            } else {
                lOgG += logg[i].toLowerCase();
            }
        }

        console.log('8)=>   ' + lOgG);
    }

    // toSecondBigLetters();
}

// doSomeMethods();

function doSomeMath() {
    const num = 12.2;

    console.log('num = ' + Math.round(num)); //=> 12

    const test = '25.6px';

    console.log(parseInt(test)); //=> 25
    console.log(parseFloat(test)); //=> 25.6
}

// doSomeMath();




