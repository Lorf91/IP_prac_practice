"use strict";

function doSomeTimeout() {
    const timerId = setTimeout(function(){ //(1)
//(1) выполнится 1м так как время выполнения 2секунды
        console.log('Hello');
    },2000);
    
    const someText = setTimeout(function(text){//(2)
//(2) выполнится 1м так как время выполнения 2секунды
        console.log(text);
    },3000, 'Some text...');
    
    const textLogger = setTimeout(logger, 2500);//(3)
//(3) выполнится 1м так как время выполнения 2секунды
    
    setTimeout(logger, 3500);//(4)

    function logger () {
        console.log('This is logger !!!');
    }

//Присваивают setTimeout идетификатор(константу, переменную) для возвозможности в будущем обратится
// к нему и сбросить его

    clearInterval(textLogger);
    //отменяет выполнения(3) const textLogger = setTimeout(logger, 2500);
    
}

//doSomeTimeout();

const btn = document.querySelector('.btn');
let timerK,
    i = 0;

// btn.addEventListener('click', () => {
//     const timerID = setTimeout(function() {
//         console.log('Text');
//     },1500);
// });

// SetInterval
//SetInterval() Имеет туже запись что и setTimeout()
//если не остановить будет выполняться вечно
function runtimerID(start, stop) {
    btn.addEventListener('click', () => {
        const timerID = setInterval(function() {// запускаем интервал timerID с частотой 1сек
            console.log('Interva');
        },start);
    
        setTimeout(function(){
            clearInterval(timerID);// останавливаем интервал timerID через 4сек
            console.log('stop interval')
        }, stop)
    });
}

runtimerID(1000, 4000);

//еще один пример 
function timerClc() {
    btn.addEventListener('click', () => {
        timerK = setInterval(logger_2, 500);
    });
    
    function logger_2 () {
        if (i === 3) {
            clearInterval(timerK);
        }
        console.log('Run "logger_2"')
        i++;
    }
}

//timerClc();


//Чем рекурсивный setTimeout лучше чем setInterval ? (ВАЖНО!!!)
//НА примере setInterval(logger_2, 500) таймер будет срабатывать каждые 0.5сек 
//независимо от того сколько будет выполнятсья функция logger_2 что может призвести к ошибке 
//в случае когда logger_2 больше чем установленный таймер

function recTimeout() {
//При рекурсивном вызове функция будет выполняться строго после выполнения предыдущей функции    
    let id = setTimeout(function log(){
        console.log('hello');
        id = setTimeout(log, 500)
    },500);
}

//recTimeout();

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 4);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left= pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);










