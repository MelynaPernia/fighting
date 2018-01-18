function begin() {
  var $boxMovie = $('.list-movie');
  var listMovie = '';
  var dataMovie = {
    'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
  };

  $.ajax(dataMovie).done(function(data) {
    // console.log(data.results);

    var arrData = data.results;
    var title = '';
    for (var i = 0; i < arrData.length; i++) {
      title = arrData[i]['title'];
      // console
      console.log(arrData);
      var score = arrData[i]['vote_average'];
      var overview = arrData[i]['overview'];
      var releaseDate = arrData[i]['release_date'];
      var photo = arrData[i]['backdrop_path'];
      var movie = '<div class="col s4">' +
        '<div class="card">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="https://image.tmdb.org/t/p/w185'+ photo +'">' +
          '</div>' +
          '<div class="card-content data-movie">' +
            '<p class="card-title activator text-darken-4 tea"><span>' + title + ' <i class="fa fa-ellipsis-h" aria-hidden="true"></i></span> </p>' +
            '<p><span class="like"><i class="fa fa-thumbs-o-up "></i> 2 </span>' +
              '<span><i class="fa fa-heart "></i> 1 </span>' +
            '</p>' +
          '</div>' +
          '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">Resumen<i class="material-icons right">close</i></span>' +
            '<p>' + overview + '</p>' +
            '<span class="grey-text text-darken-4">Actors</span>' +
            '<div class="list-actors">' +
                '<div class="actor">' +
                  '<p class="title">Title</p>' +
                  '<img src="../assets/images/pelicula.jpg" alt="" class="circle">' +
                '</div>' +
            '</div>' +
            '<p>Director : <span>name-director</span></p>' +
          '</div>' +
        '</div>' +
      '</div>';
      listMovie += movie;
      // console.log(listMovie);
    }
    $boxMovie.html(listMovie);
  });
}
$(document).ready(begin);


// console.log(data);
// function begin() {
// var dataMovie = {
//   'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
// };
// $.ajax(dataMovie).done(function(data) {
//   console.log(data);
// });
// }
// $(document).ready(begin);

  /*
function begin() {
  var $boxMove = $('.list-movie');
  var dataMovie = {
    'url': 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22'
  };

  // function listMovie(data) {
  //
  // }
  $.ajax(dataMovie).done(function(data) {
    // console.log(data);
    // listMovie(data);
    var arrData = data;
    console.log(arrData);
    /*
    var listMovie = '';
    for (var i = 0; i < arrData.length; i++) {
      var title = arrData[i]['title'];
      var score = arrData[i]['vote_average'];
      var overview = arrData[i]['overview'];
      var releaseDate = arrData[i]['release_date'];
      var movie = '<div class="col s4">' +
        '<div class="card">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="../assets/images/pelicula.jpg">' +
          '</div>' +
          '<div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">Película<i class="material-icons' + 'right">more_vert</i></span>' +
            '<p><span class="like"><i class="fa fa-thumbs-o-up "></i> 2 </span>' +
              '<span><i class="fa fa-heart "></i> 1 </span>' +
            '</p>' +
          '</div>' +
          '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">Resumen<i class="material-icons right">close</i></span>' +
            '<p>Here is some more information about this product that is only revealed once clicked on.</p>' +
            '<span class="grey-text text-darken-4">Actors</span>' +
            '<div class="list-actors">' +
                '<div class="actor">' +
                  '<p class="title">Title</p>' +
                  '<img src="../assets/images/pelicula.jpg" alt="" class="circle">' +
                '</div>' +
            '</div>' +
            '<p>Director : <span>name-director</span></p>' +
          '</div>' +
        '</div>' +
      '</div>';
      listMovie += movie;
    }
    $boxMovie.html(listMovie);
*/
//});
//};
