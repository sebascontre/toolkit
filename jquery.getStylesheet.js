(function ($) {
	$.getStylesheet = function (url, options = {}) {
		options = $.extend({ cache: false }, options);
		if (!options.cache) url += '?_=' + new Date().getTime();

		return $('<link>')
			.attr('rel', 'stylesheet')
			.attr('type', 'text/css')
			.attr('href', url)
			.appendTo('head');
	};
})(window.jQuery);
