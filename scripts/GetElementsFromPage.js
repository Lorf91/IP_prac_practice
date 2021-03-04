"use strict";
function getElemFromPage() {
    const box = document.getElementById('box');

    //console.log(box);

    const btn = document.getElementsByTagName('Button')[1];

    //console.log(btn);

    const circles = document.getElementsByClassName('circle')[2];

    //console.log(circles);

    const Btn = document.querySelectorAll('BUTTON');

    //console.log(Btn);

    Btn.forEach(item =>{
        console.log(`${item}`);
    }); 


    //const Btn_1 = document.querySelector('BUTTON');
    //console.log(Btn_1);

    //console.dir(Btn_1);
}

//getElemFromPage();

const btn = document.querySelectorAll('.btn'),
      div = document.createElement('div'),
      cirleWrapper = document.querySelector('.cirle_wrapper'),
      circle = cirleWrapper.querySelectorAll('.circle'),
      boxKv = document.querySelectorAll('.box_kv'),
      btnWrapper = document.querySelector('.btn_wrapper');

console.dir(btn);

console.log('Hello');

//функция с набором стилей для псевдомасива (с перебором элементов forEach)
function useForEach(elem) {
    elem.forEach(item => {
        item.style.backgroundColor = 'blue';
        item.style.color = 'white';
        item.style.padding = '10px 15px';
        item.style.margin = '10px 20px';
        item.style.width = '200px';
        item.style.fontSize = '24px';
        item.style.borderRadius = '15px'; 
        item.style.cursor = 'pointer';
        item.style.border = "1px solid red";
    });
}

useForEach(btn);

function useForOnElem (elem) {
    for(let i = 0; i < elem.length; i++) {
        elem[i].style.cssText = `background-color: blue; color: white; padding: 10px 15px; margin: 10px auto; width: 200px; font-size: 24px; border-radius: 15px; cursor: pointer;`
    }
}

//useForOnElem (btn);

btnWrapper.style.cssText = "display: flex; justify-content: center;"


// btn.forEach((item, i) => {
//     btn[i].style.backgroundColor = 'blue';
//     btn[i].style.color = 'white';
//     btn[i].style.padding = '10px 15px';
//     btn[i].style.margin = '10px 20px';
//     btn[i].style.width = '200px';
//     btn[i].style.fontSize = '24px';
//     btn[i].style.borderRadius = '15px';
//     btn[i].style.cursor = 'pointer';
// });

// btn[1].style.backgroundColor = 'red';

// btn[2].style.cssText = " background-color: green; color: red; font-style: italic; font-weight: bold; padding: 10px 15px; width: 150px; border-radius: 20px; font-size: 30px;" 

// console.log(btn);

// const div = document.createElement('div');
//Создает елемент div но только внутри без добавления на станицу

const text = document.createTextNode('Тут был я');

div.classList.add('black')
//добавляем класс .black(заранние был создан в style.css) элементу div 

document.body.append(div);
//Добавляет элемент div в конец body

btnWrapper.append(div);
//Добавляет элемент div в конец элемента с классом btn_wrapper при этом он перебивает предыдущие добавление

btnWrapper.prepend(div);
//Добавляет элемент div  в начало элемента btnWrapper

btn[1].prepend(div);

btnWrapper.style.cssText = "display: flex; flex-direction: column;"

btn[2].before(div);
//Добавляет элемент div до элемента btn[2]

btn[2].after(div);
//Добавляет элемент div после элемента btn[2]

btn[1].remove();
//удаляет элемент btn[1]

circle[1].replaceWith(boxKv[2]);
//меняем элемент circle[1] на элемент boxKv[2]


//Устаревшие конструкции

//.appendChild() тоже самое что .append();

//.insertBefore('elem1', 'elem2') тоже что и .before()
// elem1 - элемент который вставляем
// elem2 - элемент перед которым вставляем

//.insertAfter('elem1', 'elem2') тоже что и .after()

//wrapper.removeChild(hearts[1]); стало hearts[1].remove();

//wrapper.replaceChild(circle[1], hearts[2]); стало hearts[2].replace(circle[1]);

function enterYourName() {
    const name = prompt('Enter Your name', '');

    div.innerHTML = `Your name is '${name}'`;
}

// enterYourName();

div.innerHTML = "<h1>Hello World</h1>"; //-позволяет вставлять html теги 

//div.textContent = "Hello"; // only text Для безопасности так как данные получаем от пользователя

div.insertAdjacentHTML("beforebegin", "<h2>beforebegin</h2>");
// вставляет <h2>Hello</h2> до начала(beforebegin) элемента div

div.insertAdjacentHTML("afterbegin", "<h2>afterbegin</h2>");
// вставляет <h2>Hello</h2> после начала(afterbegin) элемента div

div.insertAdjacentHTML("beforeend", "<h2>beforeend</h2>");
// вставляет <h2>Hello</h2> после начала(afterbegin) элемента div

div.insertAdjacentHTML("afterend", "<h2>afterend</h2>");
// вставляет <h2>Hello</h2> после начала(afterbegin) элемента div