// function begin() {
//   var $boxMovie = $('.list-movie');
//   var listMovie = '';
//   var arrMovie = [];
//
//   var dataMovie = {
//     'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
//   };
//
//   var listGender = {
//     'url': 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
//   };
//
//   $.ajax(listGender).always(function(dataGender) {
//     var idGender = dataGender['id'];
//     var arrGender = dataGender;
//     var listGender = '';
//     for (var i = 0; i < 11; i++) {
//       var cboxGender = '<p>' +
//          '<input type="checkbox" data-id="' + arrGender.genres[i]['id'] + '" id="test' + (i + 1) + '" />' +
//         '<label  for="test' + (i + 1) + '">' + arrGender.genres[i]['name'] + '</label>' +
//        '</p>';
//       listGender += cboxGender;
//     };
//     $('.cbx-general').html(listGender);
//   });
//
//   function dataVideo(idMovie) {
//     var dataVideo = {
//       'url': 'https://api.themoviedb.org/3/movie/' + idMovie + '/videos?api_key=33b84274e7334de2052cae93842e7f67&language=en-US',
//     };
//   }
//   $.ajax(dataMovie).done(function(data) {
//     var arrData = data.results;
//     var title = '';
//     for (var i = 0; i < arrData.length; i++) {
//       title = arrData[i]['title'];
//       var score = arrData[i]['vote_average'];
//       var overview = arrData[i]['overview'];
//       var releaseDate = arrData[i]['release_date'];
//       var photo = arrData[i]['poster_path'];
//       var releaseDate = arrData[i]['release_date'];
//       var releaseDate = arrData[i]['release_date'];
//       var idMovie = arrData[i]['id'];
//       var idGender = arrData[i]['genre_ids'][0];
//       if (photo) {
//         var movie = '<div class="col s4" data-gender="' + idGender + '">' +
//           '<div class="card">' +
//           '<div class="card-image waves-effect waves-block waves-light" >' +
//           '<img class="activator" src="https://image.tmdb.org/t/p/w185' + photo + '">' +
//           '</div>' +
//           '<div class="card-content data-movie">' +
//           '<p class="card-title activator text-darken-4 tea title-movie mb-0"><span class="text-uppercase">' + title +
//           ' </span> <i class="fa fa-ellipsis-h"></i>  </p>' +
//           '<p class="text-color-date mb-10"><i class="fa fa-calendar"></i><span> ' + releaseDate + ' </span></p>' +
//           '<button class=""><span class="like"><i class="fa fa-thumbs-o-up "></i> 2 </span></button>' +
//           '<button class=""><span><i class="fa fa-heart "></i> 1 </span></button>' +
//           // '<button class="btn-trailer"><a href="#"><i class="fa fa-play "></i> ver trailer </a></button>' +
//           '</div>' +
//           '<div class="card-reveal">' +
//           '<span class="card-title grey-text text-darken-4">Resumen<i class="material-icons right">close</i></span>' +
//           '<p>' + overview + '</p>' +
//           '</div>' +
//           '</div>' +
//           '<p>Director : <span>name-director</span></p>' +
//           '</div>' +
//           '</div>' +
//           '</div>';
//         if (idGender) {
//           arrMovie.push(idGender);
//         }
//         listMovie += movie;
//       }
//     }
//     $boxMovie.html(listMovie);
//
//     $('[type=checkbox]').click(function(event) {
//       var idGender = $(this).data('id');
//       if ($('[type=checkbox]').is(':checked')) {
//         $('.list-movie > div').each(function(index) {
//           if ($(this).data('gender') !== idGender) {
//             $(this).css('display', 'none');
//           }
//         });
//       } else {
//         $('.list-movie > div').each(function(index) {
//           $(this).css('display', 'block');
//         });
//       }
//     });
//   });
// }
function begin() {
  $('.collapsible').collapsible();

  var $listMovie = $('.list-movie');

  var url = 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-21&page=1%2C2&include_video=true&include_adult=false&sort_by=popularity.desc&language=es-US&api_key=33b84274e7334de2052cae93842e7f67';
  $.getJSON(url, function(results) {
    var arrData = results.results;
    var listRandomMovie = '';
    // var index = Math.floor(Math.random() * arrData.length) + 1; // 3,5,7
    // const ELEMENT = 9;
    for (var i = 0; i < arrData.length; i++) {
      var id = arrData[i].id;
      var title = arrData[i].title;
      var overview = arrData[i].overview;
      var releaseDate = arrData[i].release_date;
      var generals = arrData[i].genre_ids;
      var voteCount = arrData[i].vote_count;
      var photo = arrData[i].poster_path;
      if (photo) {
        var movie =
        '<div class="col l3">' +
          '<div class="card">' +
             '<div class="card-image waves-effect waves-block waves-light sticky-action">' +
               '<img class="activator" src="http://image.tmdb.org/t/p/w154/' + photo + '">' +
               '<span class="card-title text-date">' + releaseDate + '</span>' +
             '</div>' +
             '<div class="card-action">' +
                // '<span><a class="waves-effect waves-light btn-floating left"><i class="material-icons">add</i></a></span>'+
                // '<a class="waves-effect waves-light btn-floating right"><i class="material-icons">add</i></a>' +
               '<a class="waves-effect waves-light btn-floating right"><i class="material-icons">add</i></a>' +
               '<p><i class="material-icons">thumb_up</i><span>1  </span>  <i class="material-icons">favorite </i><span>1</span></p>' +
             '</div>' +
             '<div class="card-reveal">' +
               '<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>' +
               '<p>' + overview + '</p>' +
             '</div>' +
           '</div>' +
        '</div>' ;
        listRandomMovie += movie;
      }
      $listMovie.html(listRandomMovie);
    }
  });
}
$(document).ready(begin);
