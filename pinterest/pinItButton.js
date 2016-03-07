define(['./pinit'], function pinItButton(pin) {
	function buildPinItButton(container, pageURL, imageURL, description) {
        var pinButton = $('<a></a>', {
            'href': '//gb.pinterest.com/pin/create/button/?url=' + encodeURI(pageURL) + '&media=' + encodeURI(imageURL) + '&description=' + encodeURI(description),
            'data-pin-do': 'buttonPin',
            'data-pin-config': 'beside'
        }).append($('<img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" />')).appendTo(container);
    }
    return buildPinItButton;
});