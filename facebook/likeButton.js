define(['./fb'], function likeButton(FB) {
	var currentURL = window.location.href;
	function buildLikeButton(container, href) {
		var button;
		if (!href) {
			href = currentURL;
		}
		button = $('<div></div>', {
			'class': 'fb-like',
			'href': href,
			'data-layout': 'standard',
			'data-action': 'like',
			'data-show-faces': false,
			'data-share': false,
			'data-width': 90
		}).appendTo(container);
		FB.XFBML.parse(container[0]);
	}
	return buildLikeButton;
});