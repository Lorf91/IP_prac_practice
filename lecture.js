'use strict';
///////////////////////////////////////////////////////////////
// Условия
function doConditions() {
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
}

// doConditions()

/////////////////////////////////////////////////////////////////
//Cycles

function doCycles() {
    let num = 1;

    function doFirsWhile() {
        while (num <= 10) {
            console.log(num);
            num++;
        }
    }

    // doFirsWhile();

    function doFirstDoWhile() {
        do {
            console.log(num);
            num++;
        }

        while(num <=5);
    }

    // doFirstDoWhile();

    function doFirstFor() {
        for (let i = 0; i <= 7; i++) {
            console.log(i);
        }
    }

    doFirstFor();
}

// doCycles();

/////////////////////////////////////////////////////////////////
// FUNCTIONS
let num;
console.log('0: ' + num);

function showNum() {
       
    function showNumber_1() {
        num = 20;
        console.log("1: " + num);
    }
    
    showNumber_1();
    
    console.log("2: " + num);
    
    function showNumber_2() {
        let num = 50;
        console.log("3: " + num);
        return num;
    }
    
    showNumber_2();
    
    console.log("4: " + num);
    return showNumber_2();
}

let nextNum = showNum();

let showNumber = (a) => {
    console.log(nextNum + a);
};

showNumber(5);









