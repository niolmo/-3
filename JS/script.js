"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// Создаём объект

const personalMovieDB = {
	count: numberOfFilms,
	movies: {}, //пустой объект
  actors: {},
  genres: [],
  privat: false

};
	
// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			b = prompt('На сколько оцените его?', ''),
// 			c = prompt('Один из последних просмотренных фильмов?', ''),
// 			d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
		
				if(a != null && b != null && a != '' && b != '' && a.length < 50) {
					personalMovieDB.movies[a] = b;
					console.log('done');
				} else {
					console.log('error');
					i--;
				}
}

console.log(personalMovieDB);