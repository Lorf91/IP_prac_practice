"use strict";

window.addEventListener('DOMContentLoaded', () => {
    console.log('REST OPERATOR'); //соберает отдельные сущности в массив
    //аргументы a, b, это те аргументы которые должны быть обязательно далее указывается рест оператор который может быть а может и не быть
    const log =function(a, b, ...rest) {
        console.log(a, b, rest);
    };

    log('basic', 'rest', 'operator', 'usage');

    function calcOrDouble(number, basis = 2) { //basis = 2 параметр по умолчанию
        //basis = basis || 2; 
        //применялся до ES6 чтобы передать значение по умолчанию т.е basis или 2 а || запинается на правде

        console.log(number * basis);
    }

    calcOrDouble(3);

    
});