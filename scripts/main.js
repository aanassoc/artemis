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
		$(this).children().removeClass('fa-search').addClass('fa-times');
		var p = $('.navbar').position();
		var q = $('.navbar').height();
		$('#search').css('top', p.top + q);  
		$('#search input').focus();
		$('html').addClass('dark');
	});

	$(document).on('click', '.dimmed, .dark', function(e) {
		if(!$(e.target).is('#drawer') && !$(e.target).is('#drawer *') && !$(e.target).is('#search') && !$(e.target).is('#search *'))
		{
			$('#drawer').css('left', -290);
			$('#search').css('top', -200);  
			$('#btn-search').children().removeClass('fa-times').addClass('fa-search'); 
			$('html').removeClass('dimmed');
			$('html').removeClass('dark');
		}
	});

})(jQuery);

