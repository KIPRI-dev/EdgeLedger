// Smooth Scroll
$('#navbar a, btn').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 51,
			},
			800
		);
	}
});

// Navigation Bar Opacity
window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		document.querySelector('header').style.opacity = 0.9;
	} else {
		document.querySelector('header').style.opacity = 1;
	}
});
