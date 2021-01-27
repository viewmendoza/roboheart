/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'robo_love3\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-astroboy' : '&#x41;',
			'icon-ironman' : '&#x42;',
			'icon-optimus_prime' : '&#x45;',
			'icon-mazinger' : '&#x43;',
			'icon-robotech' : '&#x44;',
			'icon-mechwarrior' : '&#x46;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};