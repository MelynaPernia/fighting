$(document).ready(function() {
  var settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://api.themoviedb.org/3/find/adee43db16188778719f12c7f9ad12cc?external_source=imdb_id&language=en-US&api_key=adee43db16188778719f12c7f9ad12cc',
    'method': 'GET',
    'headers': {},
    'data': '{}'
  };
  
  $.ajax(settings).done(function(response) {
    console.log(response);
  });

  // Funcionalidad para el dropdown
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  }
  );
});
