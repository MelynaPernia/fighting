// var dataMovie = {
//   'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
// };


// var data;




// var movie = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=33b84274e7334de2052cae93842e7f67",
//   "method": "GET",
//   "headers": {},
//   "data": "{}"
// }
//
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=33b84274e7334de2052cae93842e7f67",
//   "method": "GET",
//   "headers": {},
//   "data": "{}"
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
//
//
//
// $.ajax(movie).done(function (response) {
//   console.log(response.results);
//   var arr = response.results;
//   for(var i = 0; i<arr.length;i++){
//     response.results[i];
//     // console.log(arr[i]);
//     console.log(arr[i]['title']);
//     console.log(arr[i]['backdrop_path']);
//     console.log(arr[i]['release_date']);
//     console.log(arr[i]['vote_count']);
//     console.log(arr[i]['overview']);
//
//   }
// });
