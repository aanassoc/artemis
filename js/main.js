$(document).on('click', '#btn-drawer', function() {
	$('#drawer').css('left', 0);
	$('html').addClass('dimmed');
});

$(document).on('click', '#drawer .btn', function() {
	$('#drawer').css('left', -290);
	$('html').removeClass('dimmed');
});

$(document).on('click', '.dimmed', function(e) {
	if(!$(e.target).is('#drawer'))
	{
		$('#drawer').css('left', -290);
		$('html').removeClass('dimmed');
	}
});
