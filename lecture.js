'use strict';
///////////////////////////////////////////////////////////////
// Условия


function doFirstIf() {
    let num = +prompt('Угадай число', '');

    if (num < 50) {
        console.log('Too much');
    } else if (num === 50) {
        console.log('It is 50!!!');
    } else {
        console.log('Too few');
    }
}

// doFirstIf();

function doTernOperator() {
    let num = +prompt('Угадай число', '');

    num === 50 ? console.log('It is 50!!!') : console.log('Error !');
}

// doTernOperator();

function doFirsSwithc() {
    let num = +prompt('Угадай число', '');

    switch (num) {
        case 50:
            console.log('It is 50!!!');
            break;
        case 100:
            console.log('Too much');
            break;
        default:
            console.log('Not to day');
            break;
    }

}

// doFirsSwithc();





