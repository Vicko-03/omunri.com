function clickCompetition(tab) {
	document.getElementById(tab + '-tab').click();
	document.getElementById(tab + '-tab-first').click();
}

// $(document).on('click', 'a[href^="#"]', function (event) {
// 	event.preventDefault();

// 	$('html, body').animate({
// 			scrollTop: $($.attr(this, 'href')).offset().top
// 	}, 500);
// });