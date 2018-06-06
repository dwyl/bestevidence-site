$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  var wrapperDiv = $('.wrapperDiv');

  wrapperDiv.each(function() {
    var singleWrapperDiv = $(this);
    var storyText = singleWrapperDiv.text();
    var parent = singleWrapperDiv.parent();
    var readMoreBtn = $('.readMore', parent);

    if (singleWrapperDiv.height() >= 600) {
      singleWrapperDiv.addClass('max-h');
      readMoreBtn.click(function() {
        if (readMoreBtn.html() == 'Read more') {
          singleWrapperDiv.removeClass('max-h');
          readMoreBtn.text('Read less');
        } else {
          singleWrapperDiv.addClass('max-h');
          readMoreBtn.text('Read more');
        }
      });
    } else {
      readMoreBtn.addClass('dn');
    }
  });
});
