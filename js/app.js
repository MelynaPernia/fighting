
$(document).ready(function () {
  // Creando
  var $boxMovie = $('.movie-random');
  var listMovie = '';
  var dataMovie = {
    'url': 'https://api.themoviedb.org/3/discover/movie?year=2018&primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-01-18&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=33b84274e7334de2052cae93842e7f67'
  };

  $.ajax(dataMovie).done(function(data) {
    var arrMovie = data.results;
    var element = 12;
    var title = '';
    var photo = '';
    for (var i = 0; i < element; i++) {
      var index = Math.floor(Math.random() * data.results.length) + 1;
      arrMovie[index];
      title = arrMovie[index]['title'];
      photo = arrMovie[index]['backdrop_path'];
      if (photo) {
        var movieRandom =
          '<div class="col s3">' +
          '<div class="card">' +
          '<div class="card-image waves-effect waves-block waves-light" >' +
          '<img class="activator" src="https://image.tmdb.org/t/p/w185' + photo + '">' +
          '<div class="caption">' +
          '<h6 class="center-align">' + title + '</h6>' +
          '</div>' +
          '</div>' + '</div>' + '</div>';
        listMovie += movieRandom;
      }
    }
    $boxMovie.html(listMovie);
  });

  // vista del carousel
  $('.slider').slider();
  $('.carousel').carousel();
  $('.modal').modal();

  $('.carousel-item').click(function() {
    $('#movie-details').modal('open');
  });
});

$('.carousel-item').click(function() {
  $('#movie-details').modal('open');
});

// Login and register functions

function registrar() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function() {
      window.location.href = '../views/home.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  }).catch(function(error) {
  });
}

function ingreso() {
  var email2 = document.getElementById('email2').value;
  var contrasena2 = document.getElementById('contrasena2').value;

  firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .then(function() {
      window.location.href = '../views/home.html';
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      console.log('no existe un usuario activo');
    }
  });
}
observador();
