"use strict";

window.addEventListener('DOMContentLoaded', () => {
   //ИСПОЛЬЗУЕМ КЛАССЫ ДЛЯ КАРТОЧЕК
    
   class MenuCard {
        constructor(src, alt, title, desription, price, parenSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title =title;
            this.desription = desription;
            this.price= price;
            this.classes = classes;
            this.parent = document.querySelector(parenSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        
        //метод конвертации валюты в гривну
        changeToUAH() {
            this.price *= this.transfer;
        }

        render() {
            const element = document.createElement('div')
            
            //вся конструкция if служит для установления значения по умолчанию для рест оператора
            // rest оператор передает масив
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));//используя рест оператор мы теперь можем добавлять сколько нам нужно классов к нашему элементу
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desription}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
   }
    //такой вызов без переменных будет вызываться только 1н раз тут и сейчас без возможности вызвать его еще раз
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        15,
        ".menu .container",
        "menu__item"
    ).render();
});