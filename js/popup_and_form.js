$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});




	$('.select').on('click', '.select__head', function () {
			if ($(this).hasClass('open')) {
					$(this).removeClass('open');
					$(this).next().fadeOut();
			} else {
					$('.select__head').removeClass('open');
					$('.select__list').fadeOut();
					$(this).addClass('open');
					$(this).next().fadeIn();
			}
	});

	$('.select').on('click', '.select__item', function () {
			$('.select__head').removeClass('open');
			$(this).parent().fadeOut();
			$(this).parent().prev().text($(this).text());
			$(this).parent().prev().prev().val($(this).text());
	});

	$(document).click(function (e) {
			if (!$(e.target).closest('.select').length) {
					$('.select__head').removeClass('open');
					$('.select__list').fadeOut();
			}
	});

	
	function sendRegister(e){		

			if($('#first_name').val()==""){

			}else if($('#last_name').val()==""){
				
			}else if($('#email').val()==""){
				
			}else if($('#phone_code').val()==""){

			}else if($('#phone').val()==""){
				
			}else if($('#country').val()==""){
				
			}else{
				var first_name = $('#first_name').val();
				var last_name = $('#last_name').val();
				var email = $('#email').val();				
				var phone = ('#phone').val();
				var country = $('#country').val();
				

				$.ajax({ // отправка данных в php
					url: '/controllers/registration.php',        
					method: 'post',             
					dataType: 'html',          
					data: {
						registration: "true",
						first_name: first_name,
						last_name: last_name,
						email: email,						
						phone: phone,
						country: country
						
					},    
					success: function(data){   
							alert(data);
					}
				});  
			}
		}

	// after sucess registration : 
	//$('#sucess-block').removeClass('d-none').addClass("d-flex");
	//$('#registration-block').addClass('d-none').removeClass("d-flex"); 

    
    // Fixed Bootstrap Multiple Modal Issue
    $('body').on('hidden.bs.modal', function () {
        if ($('.modal.show').length > 0) {
            $('body').addClass('modal-open');
        }
    });