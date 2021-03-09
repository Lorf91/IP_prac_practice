"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const deadline = '2021-06-01';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)), //получаем количесвто дней необходимых до завершения
              hours = Math.floor((t / (1000 * 60 * 60)) % 24), //получаем количество часов до завершения (но так как их может быть более 24 но необходимо вывести остаток от деления на 24)
              minutes = Math.floor((t / (1000 * 60)) % 60), // get minutes to end
              seconds = Math.floor((t / 1000) % 60); // get seconds to end

        return { //получаем объект из функции
            'total': t,
            'days': days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    function getZero(num) {// проверяет если число 1н значное то добавляет вначало 0
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              second = timer.querySelector('#second'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();//зaпускаем вручную что бы избежать первого мигания(со старыми значениями при запуске, так как функция запустится в коде только через 1 сек)

        function updateClock() {
            const t  = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <=0) {
                clearInreval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
});