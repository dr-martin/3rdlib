define(['./fb'], function likeBox(FB) {
	function buildLikeBox(href, container) {
		var likeBox = $('<div></div>', {
			'class': 'fb-like-box',
			'href': href,
			'data-width': 298,
            'data-show-faces': true,
            'data-stream': false,
            'data-header': false
		}).appendTo(container);
		FB.XFBML.parse(container[0]);
	}
	return buildLikeBox;
});