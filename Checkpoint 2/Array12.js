"use strict";
const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// Given the array above,
// wwrite a function that returns only those videos with a rating of 5.0

// write a function using array.filter
const filterFunction = (array) => {
  if (array.rating >= 5.0) {
    return array.title;
  }
};
const videolist = newReleases.filter(filterFunction);
console.log(videolist);
console.log(videolist[0]);

// uisng array.for each
const forEachFunction = (array) => {
  let highlyRatedMovie = [];
  array.forEach((item) => {
    if (item.rating >= 5) {
      highlyRatedMovie.push(item.title);
    }
  });
  return highlyRatedMovie;
};
console.log(forEachFunction(newReleases));
