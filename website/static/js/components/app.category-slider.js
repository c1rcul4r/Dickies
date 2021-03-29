// CIRCULAR AGENCY

// CATEGORY SLICK SLIDE

require([
  'jquery',
  'slick'
], function($) {
  jQuery(document).ready(function() {
    jQuery(".slick-this").slick({
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      arrows: false,
      swipeToSlide: true,
      responsive: [
    {
      breakpoint: 769,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
   ]
    });
  });
});
