function begin() {
  var $boxMovie = $('.list-movie');
  var listMovie = '';
  var dataMovie = {
    'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
  };
  function rt(){
  return $.ajax({'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'});
}
console.log(rt());
  // console.log(data);
  function dataVideo(idMovie) {
    var dataVideo = {
      'url': 'https://api.themoviedb.org/3/movie/' + idMovie + '/videos?api_key=33b84274e7334de2052cae93842e7f67&language=en-US',
    };
  }
  $.ajax(dataMovie).done(function(data) {
    var arrData = data.results;
    var title = '';
    for (var i = 0; i < arrData.length; i++) {
      title = arrData[i]['title'];
      // console
      // console.log(arrData);
      var score = arrData[i]['vote_average'];
      var overview = arrData[i]['overview'];
      var releaseDate = arrData[i]['release_date'];
      var photo = arrData[i]['poster_path'];
      var releaseDate = arrData[i]['release_date'];
      var releaseDate = arrData[i]['release_date'];
      var idMovie = arrData[i]['id'];

      if (photo) {
        var movie = '<div class="col s4" data-id="' + idMovie + '">' +
          '<div class="card">' +
            '<div class="card-image waves-effect waves-block waves-light" >' +
              '<img class="activator" src="https://image.tmdb.org/t/p/w185' + photo + '">' +
            '</div>' +
            '<div class="card-content data-movie">' +
              '<p class="card-title activator text-darken-4 tea title-movie mb-0"><span class="text-uppercase">' + title +
              ' </span> <i class="fa fa-ellipsis-h"></i>  </p>' +
              '<p class="text-color-date mb-10"><i class="fa fa-calendar"></i><span> ' + releaseDate + ' </span></p>' +
              '<button class=""><span class="like"><i class="fa fa-thumbs-o-up "></i> 2 </span></button>' +
              '<button class=""><span><i class="fa fa-heart "></i> 1 </span></button>' +
              '<button class="btn-trailer"><a href="#"><i class="fa fa-play "></i> ver trailer </a></button>' +
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
      }

    }
    $boxMovie.html(listMovie);

  });

  // $.ajax(dataVideo).done(function(key) {
  //   $( "list-movie>div" ).each(function( index ) {
  //   // console.log( index + ": " + $( this ).text() );
  //     console.log('h1');
  //   });
    // dataVideo(idMovie);
    // console.log(key);
  // });

}
$(document).ready(begin);
