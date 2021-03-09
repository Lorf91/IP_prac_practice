"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabcontainer');

    function hideContent() {
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

        tabContent.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide', "fade");
        }); 
    }

    function showContent(i = 0) {
        tabContent[i].classList.remove("hide");
        tabContent[i].classList.add("show", "fade");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideContent();
    showContent();

    tabParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    hideContent();
                    showContent(i);
                }
            })
        }
    });


});