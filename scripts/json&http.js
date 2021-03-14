"use strict";

console.log("JSON"); //javascript object natation

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); 
//подговтовка данных к передаче на сервер

console.log(JSON.parse(JSON.stringify(persone))); 
//при возврате данных с сервера переводим их в обычный объект для работы с ними

//ДО ПОЯВЛЕНИЕ JSON БЫЛ ФОРМАТ XML получили бы 
        //JSON    
    //{"name":"Alex","tel":"+74444444"}

        //XML
    // <?xml version="1.0" encoding="UTF-8"?>
    // <root>
    //     <name>Alex</name>
    //     <tel>+74444444</tel>
    // </root>

const clone = JSON.parse(JSON.stringify(persone)); //выполняем глубокое клонирование объекта persone

clone.parents.mom = 'Anna';
console.log(persone);
console.log(clone);



