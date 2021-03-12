"use strict";

window.addEventListener("DOMContentLoaded", () => {

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        //modal.style.display = 'block';
        //modal.classList.toggle('show');
        modal.classList.add('show');
        modal.classList.remove('hide');
        //убераем возможность скролить подложку при открытии модельного окна
        document.body.style.overflow = 'hidden';

        //убераем интервал для автоматического открытия модельного окна, если мы зашли туда раньше
        clearInterval(modalTimerId);
    }

    function closeModal() {
        //modal.style.display = 'none';
        //modal.classList.toggle('show');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    //открываем модельное окно при клике на кнопку
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //закрываем модельное окно при клике на крестик
    modalCloseBtn.addEventListener('click', closeModal);

    //закрываем модельное окно при клике на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    //закрываем модельное окно при нажатие Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // вызываем модельное окно спустя 
    //const modalTimerId = setTimeout(openModal, 10000);
    

    //вызываем модельное окно при скроле в самый низ
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
    
});

