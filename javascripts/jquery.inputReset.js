(function($) {
  $.fn.setDefaultText = function() {
    return this.each(function() {
      $(this).data('defaultText', $(this).val());
    });
  };

  $.fn.resetDefaultText = function() {
    return this.each(function() {
      $(this).val($(this).data('defaultText'));
    });
  };
})(jQuery);