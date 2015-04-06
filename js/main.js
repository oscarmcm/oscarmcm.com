$('.button-collapse').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
  );

$(document).ready(function(){
  $('#scrollspy').scrollSpy();
  $('.counter').counterUp();
  height = $(window).height();
  $('#main').css("height", height);
});

//isotope
$(window).load(function(){
  var $container = $('.js-project-container');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.js-project-filter a').click(function(){
    $('.js-project-filter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 
});
