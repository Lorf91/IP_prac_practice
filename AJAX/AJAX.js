"use strict";

const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector("#usd");

//СТАРЫЙ МЕТОД
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); //конструктор который создает новый объект

    //request.open(method, url, async, login, password) //собирает настройки которые помогают в будущем настроить запрос 
    // аргументы :
    // 1) method - могут быть GET, POST
    // 2) url - может быть файл, путь ... 
    // 3) async - отвечает за асинхронность изнгачально по умолчанию стоит в поз true можно поставить false и в этом случае пока нам сервер не ответит код дальше работать не будет
    // 4) login - Логин
    // 5) password - пароль

    request.open('GET', 'current.json'); //собирает настройки которые помогают в будущем настроить запрос 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //донастраиваем файл 
    request.send(); //Запрашиваем данные

    function runReadyStateChange () {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                //console.log(request.response);
                const data = JSON.parse(request.response);
                //console.log(data);
                inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUSD.value = "Что-то пошло не так !";
            }
        });
    }
    
    //runReadyStateChange ();

    function runLoad() {
        request.addEventListener('load', () => { //load - событие срабатывает 1н раз когда запрос уже полностью готов, при этом это не значит что запрос выполнен успешно
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                
                inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUSD.value = "Что-то пошло не так !";
            }
        });
    }

    runLoad();

    // status статус запроса (коды состояния) (https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP)
    // statusText текстовое описание от сервера
    // response - ответ от сервера который нам заложил разработчик
    // readyState - текущие состояние запроса (https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState)
});