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
// write a function that returns an array of videos into an array of just the {id,title} pairs.
// E.g the array should contain objects with just the id and title property.

// write a function that takes in the entire array
const movieId = (array) => {
  // create a new array that will take in the new data
  var movieTitle = [];
  // check the array if it has the key and a property assigned to it.
  array.forEach((item, i) => {
    // push key and property to new array

    if (item.id && item.title) {
      var movie = new Object();
      movie["id"] = item.id;
      movie["title"] = item.title;
      movieTitle.push(movie);
    }
  });
  // return new array of object
  return movieTitle;
};
const answer = movieId(newReleases);
