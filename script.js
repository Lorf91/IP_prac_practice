"use strict";

function runFirstProgram() {
    let i, a, b, numberOfFilms;
    
    numberOfFilms = +prompt('How much film do you see?', '');

    while (numberOfFilms == '' ||  numberOfFilms == null || numberOfFilms.lenth > 50) {
        console.log('Нужно ввести значение не более 50 символов !');
        numberOfFilms = +prompt('How much film do you see?', '');
    }

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };
    
    
    for(i = 0; i < 2; i++) {
        a = prompt('What film do see last?', '');
        b = prompt('Yor mark :', '');
        
        personalMovieDB.movies[a] = b;
    }

    if (personalMovieDB.count <= 10) {
        console.log('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    
    console.log(personalMovieDB);
}

// runFirstProgram();



