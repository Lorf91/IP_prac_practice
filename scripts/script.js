"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('How much film do you see?', '');

        while (this.count == '' ||  this.count == null || isNaN(this.count)) {
            alert('Нужно ввести числовое значение !');
            this.count = +prompt('How much film do you see?', '');
        }
        return this.count;
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('What film do see last?', '');
            const b = prompt('Yor mark :', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                alert('Error! "Нужно заполнить поле !" ');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count <= 10) {
            console.log('Вы посмотрели мало фильмов');
        } else if (this.count > 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (this.genres[i] === '' || this.genres[i] === null) {
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр ${i + 1} и это ${item}`)
        });
    },
    toogleVisibleMyDB: function() {
        if(this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};
    
    




