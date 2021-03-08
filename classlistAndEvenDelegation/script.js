"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

function getClassLength (elem) {
    console.log(elem.classList.length);
    //Получам количество классов у элемента
}

const getClassByIndex = (elem, index) => {
    console.log(elem.classList.item(index));
    //получаем клас элемнта с индексом [index]
};

function addClassToElem (elem, text) {
    elem.classList.add(text);
    //add to elem  class  = 'text'
}

const removeClass = (elem, className) => {
    elem.classList.remove(className);
    //удаляет класс className у элемента elem
}

const toggleClass = (item, className) => {
    item.classList.toggle(className);
    //toggle class in element 
}

const checkClass = (elem, className) => {
    //проверяет наличие клаccа у элемента
    if (elem.classList.contains(className)) {
        console.log(true);
    }
};


const changeColorOfBotton = (elem1, elem2, className) => {
//меняет класс className у элемента elem2 при нажатии на элемент elem1  
    elem1.addEventListener('click', () => {
        // if (!elem2.classList.contains(className)) {
        //     elem2.classList.add(className);
        // } else  {
        //     elem2.classList.remove(className);
        // }

        elem2.classList.toggle(className);
    }); 


};


btns[0].addEventListener('click', () => {
//меняет класс 'red' у элемента btns[3] при нажатии на элемент btns[0] 
    if (!btns[3].classList.contains('red')) {
        btns[3].classList.add('red');
    } else  {
        btns[3].classList.remove('red');
    }
});


// getClassLength(btns[0]);
// getClassByIndex (btns[0], 1); 
// addClassToElem (btns[1], 'red');
// removeClass(btns[2], 'red');
// toggleClass(btns[0], 'blue');
// checkClass(btns[1], 'red');
//changeColorOfBotton(btns[1], btns[5], 'green');


// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
wrapper.addEventListener('click', (event) => {
    //if (event.target && event.target.classList.contains('blue'))
    //if (event.target && event.target.tagName == "BUTTON")
    if (event.target && event.target.matches('button')) {
        console.log('hello');
    }
});


const toogleBntColorOnClick = (elem, color) => {
    // при данном виде делегирования новые елементы довлены динамически не убудyт наследовать 
    elem.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle(color);
        });
    });
};

toogleBntColorOnClick(btns, 'blue');

const btn = document.createElement('button');

btn.classList.add('green');
wrapper.append(btn);


     


