(function ($) {
  'use strict';

  $(document).ready(function () {

    $('.grid').isotope({
      itemSelector: '.grid-item',
    });

    // filter items on button click
    $('.filter-button-group').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $('.grid').isotope({
        filter: filterValue
      });
      $('.filter-button-group li').removeClass('active');
      $(this).addClass('active');
    });
  })


  /**  OPEN POPUP **/
  $('[data-pd-popup-open]').on('click', function (e) {
    var targeted_popup_class = jQuery(this).attr('data-pd-popup-open');
    $('[data-pd-popup="' + targeted_popup_class + '"]').fadeIn(100);

    e.preventDefault();
  });

  /** CLOSE POPUP **/
  $('[data-pd-popup-close]').on('click', function (e) {
    var targeted_popup_class = jQuery(this).attr('data-pd-popup-close');
    $('[data-pd-popup="' + targeted_popup_class + '"]').fadeOut(200);

    e.preventDefault();
  });

  //Avoid pinch zoom on iOS
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  }, false);
})(jQuery)