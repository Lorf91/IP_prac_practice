"use strict";

function runFirstProgram() {
    let i, a, b, numberOfFilms;

    function start() {
        numberOfFilms = +prompt('How much film do you see?', '');

        while (numberOfFilms == '' ||  numberOfFilms == null || isNaN(numberOfFilms)) {
            alert('Нужно ввести числовое значение !');
            numberOfFilms = +prompt('How much film do you see?', '');
        }
    }
    
    // start();
    
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function rememberMyFilms() {
        for(i = 0; i < 2; i++) {
            a = prompt('What film do see last?', '');
            b = prompt('Yor mark :', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                alert('Error! "Нужно заполнить поле !" ');
                i--;
            }
        }
    }
    
    // rememberMyFilms();

    function detectPersonalLevel() {
        if (personalMovieDB.count <= 10) {
            console.log('Вы посмотрели мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    }

    // detectPersonalLevel();

    function writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        }
    }

    // writeYourGenres();

    // function showMyDB() {
    //     if (personalMovieDB.privat !== true) {
    //         console.log(personalMovieDB);
    //     }
    // }

    
}

// runFirstProgram();



