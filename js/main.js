$(document).ready(function() {
  $('.scrollDown').click(function() {
    var destination = $('.benefitTermsSection').offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 300);
    return false;
  });
});
