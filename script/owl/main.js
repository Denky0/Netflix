$(document).ready(function() {
  $('.owl-carousel').each(function() {
    $(this).owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 5
    });
  });
});
