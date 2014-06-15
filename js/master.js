function initSlider() {
  $$('a.slideLink').each(function(e) {
    Event.observe(e, 'click', function() {
      Effect.ScrollTo(e.href.split("#")[1]);
      return false;
    });
  });
}

Event.observe(window, 'load', initSlider);