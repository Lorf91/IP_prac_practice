"use strict";

console.log('CLASS');

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() { //метод
        return this.height * this.width;
    }
}

//класс ColoredRectangleWithText наследуется от класса Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        //super() всегда идет первой строчкой
        super(height, width); //вызывавет конструктор родителя (параметры нужно указывать)
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Rectangle(6, 8); // создаем константу и помещаем в нее объект который состоит из класса, и помещаем в него 2 аргумента
const long = new Rectangle(20, 111);

console.log(square.calcArea());//вызываем метод calcArea() переменной square
console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hellow world !', 'blue');

div.showMyProps();
console.log(div.calcArea());