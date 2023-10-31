/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
const menucheck = document.getElementById('menu-check');
const desktopMenu = document.querySelector('.desktop-menu');

menucheck.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    desktopMenu.classList.toggle('inactive');
}

// Agregamos un evento de escucha al cargar la página para asegurarnos de que el menú esté oculto inicialmente
window.addEventListener('load', function () {
    desktopMenu.classList.add('inactive');
});


(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.



})(jQuery);
