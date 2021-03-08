"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabcontainer');
          
    function hideTabContent() { //скрывает tabsContent 
        tabsContent.forEach(item => {
            //item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => { //удаляет клас активности
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { // показывает tabsContent(по умолчанию стоит первый[0] элемент)
        //tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('swow', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target; // создаем константу для оптимизациию кода
        
        if (target && target.classList.contains('tabheader__item')) { 
        // проверяем что выбранный элемент является элементом, а не узлом и имеет класс tabheader__item
            tabs.forEach((tab, i) => {
                if ( target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}); 

