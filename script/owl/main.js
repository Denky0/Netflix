$(document).ready(function() {
  $('.owl-carousel').each(function() {
    $(this).owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      items: 5
    });
  });

  $('.owl-carousel').on('drag.owl.carousel', function() {
    let $this = $(this);

    if (!$this.hasClass('loop-activated')) {
      $this.addClass('loop-activated');

      let currentOptions = {
        margin: 10,
        nav: false,
        items: 5,
        loop: true
      };

      $this.trigger('destroy.owl.carousel');

      $this.owlCarousel(currentOptions);
    }
  });
});
