"use strict";

//выводим  в консоль глобальный объект document
console.dir(document);

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//Получаем ширину элемента но нужно понимать ч то в style.css у нас ширина 400, получаем 383 это из-за свойства box-sizing: border-box и вычетом ширины полоски скрола
const width = box.clientWidth;

//высота в данном случае без изменнений 400 как и в style.css 
const height = box.clientHeight;

console.log(width, height);

//при помощи offset мы получаем полное значение ширины и высоты блока с учтом всех элементов и отступов
console.log(box.offsetWidth, box.offsetHeight);

//scroll показывает полную высоту со скролом (можно применять и для ширины)
console.log(box.scrollHeight);


// раскрывает скрол по клику на кнопку
function fullCont() {
    btn.addEventListener('click', () => {
        box.style.height = box.scrollHeight + 'px';
    });
}

//fullCont();


//получаем сколько пикселей пользователь уже отлистал
function getHowMuchRead() {
    btn.addEventListener('click', () => {
        console.log(box.scrollTop);
    });
}

//getHowMuchRead();

//получаем все координаты элемента
console.log(box.getBoundingClientRect());

//получаем все координаты top элемента
console.log(box.getBoundingClientRect().top);


const style = window.getComputedStyle(box);

//получаем все применные стили элемента
console.log(style);

//получаем все применные стили элемента для display
console.log(style.display);

//получаем текущую ширину экрана
console.log(document.documentElement.clientWidth);

//получаем сколько эл мы пролистали
console.log(document.documentElement.scrollTop);

//устанавливаем значение 0 и таким образом станица устанавливается в начало
//document.documentElement.scrollTop = 0);

//пролистывает страницу (х=0, у=400) на 400 пикселей по оси У
window.scrollBy(0, 400);