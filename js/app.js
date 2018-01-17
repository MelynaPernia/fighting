$(document).ready(function(){
    $('.slider').slider();
    $('.carousel').carousel();
    $('.modal').modal();



    $('.btn-see-details').click(function(){
      $('#modal1').modal('open');
    })
  });
