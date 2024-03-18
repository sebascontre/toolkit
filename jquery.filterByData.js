(function ($) {
	$.fn.filterByData = function (propName, value) {
		return value
			? this.filter(function () {
					return $(this).data(propName) == value;
			  })
			: this.filter(function () {
					return typeof $(this).data(propName) !== 'undefined';
			  });
	};
})(window.jQuery);
