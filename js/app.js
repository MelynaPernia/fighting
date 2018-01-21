$(document).ready(function() {
  $('.slider').slider();
  $('.modal').modal();
  $('.btn-gender-movie').click(function() {
    $('.slider').attr('hidden','true');
    $('#section-list-gender').removeAttr('hidden');
  });
  $('.btn-start-movie').click(function() {
    $('.slider').removeAttr('hidden', 'true');
    $('#section-list-gender').attr('hidden', 'true');
  });

  $('.sign-up').click(function() {
    $('.login').addClass('hidden');
    $('.confirm-password').removeAttr('hidden');
    $('.btn-sign-up').removeClass('hidden');
  });
});


// $(document).ready(function () {
//   // Creando
//   var $boxMovie = $('.movie-random');
//   var listMovie = '';
//   var dataMovie = {
//     'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
//   };

//   $.ajax(dataMovie).done(function(data) {
//     var arrMovie = data.results;
//     var element = 12;
//     var title = '';
//     var photo = '';
//     for (var i = 0; i < element; i++) {
//       var index = Math.floor(Math.random() * data.results.length) + 1;
//       arrMovie[index];
//       title = arrMovie[index]['title'];
//       photo = arrMovie[index]['backdrop_path'];
//       if (photo) {
//         var movieRandom =
//           '<div class="col s3">' +
//           '<div class="card">' +
//           '<div class="card-image waves-effect waves-block waves-light" >' +
//           '<img class="activator" src="https://image.tmdb.org/t/p/w185' + photo + '">' +
//           '<div class="caption">' +
//           '<h6 class="center-align">' + title + '</h6>' +
//           '</div>' +
//           '</div>' + '</div>' + '</div>';
//         listMovie += movieRandom;
//       }
//     }
//     $boxMovie.html(listMovie);
//   });

//   // vista del carousel
//   $('.slider').slider();
//   $('.carousel').carousel();
//   $('.modal').modal();

//   $('.carousel-item').click(function() {
//     $('#movie-details').modal('open');
//   });
// });

// $('.carousel-item').click(function() {
//   $('#movie-details').modal('open');
// });


