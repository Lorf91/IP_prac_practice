"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button'),
        btns = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');


    function beginUseOnclick() {

        btn.onclick = function(){
            console.log('You click on button');
        };

        btns.forEach(btn => {
            btn.onclick = function() {
                console.log('You click !');
            };
        });


        //В реальных проэктах в таком виде onclick используется редко
        //ПРИ ПОВТОРНОМ ВЫЗОВЕ onclick ОТРАБОТАЕТ ТОЛЬКО ПОСЛЕДНИЙ onclick
    }

    //beginUseOnclick();

    btn.addEventListener('mouseenter', () => {
        console.log('Hover!');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('CLICK !');
        });
    });


    // btns[1].addEventListener('click', (e) => {
    //     console.log(e.target);
    //     e.target.style.backgroundColor = 'red';

    // });


    // тоже что и выше только с вложением в переменню что нам позвоит удалять 

    // let i = 0;
    // const changeColorElem = (e) => {
    //     e.target.style.backgroundColor = 'red'; 
    //     console.log('color is red');
    //     i++;
    //     if (i == 1) {
    //         btns[1].removeEventListener('click', changeColorElem);
    //     }
    // };

    // btns[1].addEventListener('click', changeColorElem); // добавляем событие
    //btns[1].removeEventListener('click', changeColorElem); // удаляем событие

    /////////////////////////////////////////////////////////////
    //всплытие событий
    const changeColorElem = (e) => { 
        //console.log(e.target); 
        // в таком виде у нас срабатывают два обработчика
        // сначала на элементе потом по иерархии в верх

        console.log(e.currentTarget);
        //в таком виде событие срабатывают последовательно 
        console.log(e.type);
    };

    //btns[0].addEventListener('click', changeColorElem);
    btns[0].addEventListener('click', changeColorElem, {once: true});
    //{once: true} - третий аргумент метода addEventListener который говорит что событие выполнится только один раз
    overlay.addEventListener('click', changeColorElem);


    const link = document.querySelector('a');

    link.addEventListener('click', function(event) {
        event.preventDefault(); //отменяет стандартное поведение браузера, в данном случае отменяет переход по ссылке
        //всегда помещается в начало нашего кода

        console.log(event.target);
    });
  

    /////////////////////////////////////////////////////////
    // EVENT LICTENER ON MOBILE

    //start - возникает при косании
    //touchmove - движении при косании
    //touchend - собитие прекращает выполняться как только наш палец отрвался от элемента
    //touchenter - срабатывает как только палец зашел в пределы элемента
    //touchleave - когда палец не именно оторвался от элемента  апродолжил куда-то скользить и покинул пределы элементы
    //touchcancel - возникает тогда когда точка соприксоновения не регистрируется на поверхности

    const box = document.querySelector('.box');

    function useTouchStartr(elem, text) {
        elem.addEventListener('touchstart', (e) => {
            e.preventDefault();
    
            console.log(`${text}`);
            console.log(e.touches);
            console.log(e.targetTouches);
        });
    }

    function useTouchMove(elem, text) {
        elem.addEventListener('touchmove', (e) => {
            e.preventDefault();
    
            console.log(`${text}`);
        });
    }

    function useTouchEnd(elem, text) {
        elem.addEventListener('touchend', (e) => {
            e.preventDefault();
    
            console.log(`${text}`);
        });
    }

    useTouchStartr(box, 'start');
    //useTouchMove(box, 'move');
    //useTouchMove(box, 'End');

    //Свойства объекта event для мобильных устройств
    //tauches - выводит объект (количество пальцев на экране)
    //targetTauches - выводит количество пальцев на таргете
    //changedTouches - cписок пальцев участвующих в текущем событии т.е пальцы которые совершили уже действия
    
});



