$(document).ready(begin);
function begin() {
  var dataMovie = {
    'url': 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22'
  };

  function listMovie() {
    var arrData = data;
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

    for (var i = 0; i < arrData.length; i++) {
      var title = arrData[i]['title'];
      var score = arrData[i]['vote_average'];
      var overview = arrData[i]['overview'];
      var releaseDate = arrData[i]['release_date'];
    }
  }
  $.ajax(dataMovie).done(function(data) {

  });
};
