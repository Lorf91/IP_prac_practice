"use strict";

const numberOfFilms = +prompt('How much film do you see?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

const question1 = prompt('What film do see last?', ''),
      question2 = prompt('Yor mark :', ''),
      question3 = prompt('What film do see last?', ''),
      question4 = prompt('Yor mark :', '');

personalMovieDB['movies'][question1] = question2;
personalMovieDB['movies'][question3] = question4;
