"use strict";
// ARRAYS

function doSomeArray() {
    const arr = [1, 2, 3, 4, 5, 21, 7, 11, 14];

    arr.pop(); //удаляет последний елемент с массива

    console.log(arr);

    arr.push(100); //добавляет элемент в конец массива

    console.log(arr);

    arr.shift(); //удаляет элемент в начало массива

    console.log(arr); 

    arr.unshift(99); //добавляет элемент в начало массива

    console.log(arr);
    
    
    // Перебор массива
    console.log('method 1');

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i}: ${arr[i]}`);
    }

    console.log('method 2'); 
    
    let i = 0;

    for (let value of arr) {
        console.log(`${i}: ${value}`);
        i++;
    }

    // arr[99] = 0; //[99, 2, 3, 4, 5, 21, 7, 11, 100, empty × 90, 0]

    console.log(arr);

    arr.forEach(function(item, i, arr) {
        // item - аргумент беребора элемента может быть любым по необходимости item, button, img ...
        // i - номер по порядку
        // arr - массив который мы перебераем в некоторых случаях он нам просто необходим

        console.log(`${i}: ${item} inside array = [${arr}]`);

        //BREAK and CONTINUE not working in forEach !!!!!
    });

    const str = 'dog, cat, animals, potato, orange, car';
    const products = str.split(", "); // превращает строку в массив через разделитель ( , )

    console.log(products); //=> ["dog", "cat", "animals", "potato", "orange", "car"]

    console.log(products.join(" + ")); //превращает массив в строку через разделитель ( + )

    console.log(products.sort()); //["animals", "car", "cat", "dog", "orange", "potato"] 

    console.log(arr.sort());//[100, 11, 2, 21, 3, 4, 5, 7, 99] сортирует масив как строки

    console.log(arr.sort(compareNum)); // принимает в аргумент функцию которая работает как callback
    //[2, 3, 4, 5, 7, 11, 21, 99, 100]
    function compareNum(a, b) {
        return a - b;
    }
}

doSomeArray();

