"use strict";

function hello() {
    console.log('hello');
}

hello();

function hi() {
    console.log("Hi");
}

hi();

const arr = [1, 2, 3, 55, 66, 88, 11, 21, 10],
      sorted = arr.sort(compereNum);

function compereNum(a, b) {
    return a - b;
}

console.log(sorted);
