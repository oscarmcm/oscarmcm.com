$('.button-collapse').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
      
$(document).ready(function(){
  $('#scrollspy').scrollSpy();
  $('.counter').counterUp();
  height = $(window).height();
  $('#main').css("height", height);
});
