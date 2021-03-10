"use strict";

window.addEventListener("DOMContentLoaded", () => {

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

    //открываем модельное окно при клике на кнопку
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            //modal.style.display = 'block';
            //modal.classList.toggle('show');
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        //modal.style.display = 'none';
        //modal.classList.toggle('show');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

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
});

