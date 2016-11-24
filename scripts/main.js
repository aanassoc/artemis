 /**
 * @file
 * Defines Javascript behaviors for the Maximus theme
 */
(function($)
{
	$(document).on('click', '#btn-drawer', function() {
		$('#drawer').css('left', 0);
		$('html').addClass('dimmed');
	});

	$(document).on('click', '#btn-search', function() {
		if ($('#search').hasClass('open')) {
			$(this).children().removeClass('fa-times').addClass('fa-search');
			$('#search').css('top', -130); 
			$('#search').removeClass('open');  
		} else {
			$(this).children().removeClass('fa-search').addClass('fa-times');
			var p = $('.navbar').position();
			var q = $('.navbar').height(); 
			$('#search').css('top', p.top + q);  
			$('#search').addClass('open');  
			$('#search input').focus();
		}
	});

	$(document).on('click', '.dimmed', function(e) {
		if(!$(e.target).is('#drawer') && !$(e.target).is('#drawer *'))
		{
			$('#drawer').css('left', -290);
			$('html').removeClass('dimmed');
		}
	});

})(jQuery);

