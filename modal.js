/*
Created By: Dmitriy Vasechka [https://t.me/kardinal9897]
*/
jQuery(document).ready(function($) {
	function open_modal(modal,btn_obj)
	{
		$(modal).addClass('modal-opened');
		$('body').addClass('has-opened-modal');
	}

	$('body').on('click', '.d-header-fixed-banner-ob, .header-fixed-banner-ob', function(event) {
		event.preventDefault();
		open_modal('#call-modal',this);
	});

	$('body').on('click', 'a', function(event) {
		let obj = this,
			href = $(obj).attr('href');
		if (href == '#modal')
		{
			event.preventDefault();
			let modal = $(obj).data('modal');
			open_modal(modal,obj);
		}
		else if (href == '#')
		{
			event.preventDefault();

		}
	});

	$('body').on('click', '.modal-layout, .modal-close', function(event) {
		event.preventDefault();
		if ($(this).parent().attr('id') == 'load-modal')
		{

		}
		else
		{
			$(this).parents('.modal-wrapper').removeClass('modal-opened');
			$('body').removeClass('has-opened-modal');
		}
	});

	$(document).on('keyup', function(e) {
		if ($('body').find('.modal-wrapper.modal-opened').length > 0 && $('body').find('.modal-wrapper.modal-opened').attr('id') != 'load-modal' && e.key == 'Escape')
		{
			$('body').find('.modal-wrapper.modal-opened').removeClass('modal-opened');
			$('body').removeClass('has-opened-modal');
		}
	});
});