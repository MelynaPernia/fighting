$(document).ready(function() {
  $('.contenedor-formularios').find('input, textarea').on('keyup blur focus', function(e) {
    var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {
      if ($this.val() === '') {
        label.removeClass('highlight');
      } else if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }
  });

  $('.tab a').on('click', function(e) {
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.contenido-tab > div').not(target).hide();

    $(target).fadeIn(300);
  });
});

// Login and register functions

function register() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function() {
      window.location.href = 'home.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  // console.log('estas registrado');
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
      window.location.href = 'home.html';
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}