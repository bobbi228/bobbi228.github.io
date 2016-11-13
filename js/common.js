$(function() {      



$(document).ready(function(){
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
	var mail = $('#mail');
	mail.blur(function(){
		if(mail.val() != '')
		{
			if(mail.val().search(pattern) == 0)
			{	
				$('#valid2').css("display","none");
				$('.button').attr('disabled', false);
				mail.removeClass('error').addClass('ok');
			}
			else
			{
				$('#valid2').text('Не правильный E-mail');
				$('.button').attr('disabled', true);
				mail.addClass('error');
			}
		}
		else
		{
			$('#valid2').text('Поле e-mail не должно быть пустым!');
			mail.addClass("error");
			$('.button').attr('disabled', true);
		}
	});
})

$(document).ready(function(){
	var pattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
	var name = $('#name');
	name.blur(function(){
		if(name.val() != '')
		{
			if(name.val().search(pattern) == 0)
			{	
				$('#valid1').css("display","none");
				$('.button').attr('disabled', false);
				name.removeClass('error').addClass('ok');
			}
			else
			{
				$('#valid1').text('Не правильное имя');
				$('.button').attr('disabled', true);
				name.addClass('error');
			}
		}
		else
		{
			$('#valid1').text('Поле Name не должно быть пустым!');
			name.addClass("error");
			$('.button').attr('disabled', true);
		}
	});
})

$(document).ready(function(){
	var pattern = '(?:(?:ht|f)tps?://)?(?:[\\-\\w]+:[\\-\\w]+@)?(?:[0-9a-z][\\-0-9a-z]*[0-9a-z]\\.)+[a-z]{2,6}(?::\\d{1,5})?(?:[?/\\\\#][?!^$.(){}:|=[\\]+\\-/\\\\*;&~#@,%\\wА-Яа-я]*)?';
	var Web_seti = $('#web');
	Web_seti.blur(function(){
		if(Web_seti.val() != '')
		{
			if(Web_seti.val().search(pattern) == 0)
			{	
				$('#valid3').css("display","none");
				$('.button').attr('disabled', false);
				Web_seti.removeClass('error').addClass('ok');
			}
			else
			{
				$('#valid3').text('Не правильный URL');
				$('.button').attr('disabled', true);
				Web_seti.addClass('error');
			}
		}
		else
		{
			$('#valid3').text('Поле Web-site не должно быть пустым!');
			Web_seti.addClass("error");
			$('.button').attr('disabled', true);
		}
	});
})

$(document).ready(function(){
	var comment = $('#comment');
	comment.blur(function(){
		if(comment.val() != '')
		{
				$('#valid4').css("display","none");
				$('.button').attr('disabled', false);
				comment.removeClass('error').addClass('ok');
		}
		else
		{
			$('#valid4').text('Поле  не должно быть пустым!');
			comment.addClass("error");
			$('.button').attr('disabled', true);
		}
	});
})



$(document).ready(function(){
	$('#portfolio_grid').mixItUp({
			animation: {
		duration: 400,
		effects: 'fade translateZ(-360px) stagger(34ms)',
		easing: 'ease'
	}	
	});
});
  
	$(".sect-about-2 .filter_div .filter").click(function(){
		$(".sect-about-2 .filter_div .filter").removeClass("active");
		$(this).addClass("active");
	});



    $('.top-mnu-wrap .top-mnu li a').each(function () {            
        var location = window.location.href;
        var link = this.href;               
        if(location == link) {           
            $(this).parent().addClass('active');  
        }
    });
	

	
	



	 $('.wrap-item').on('click', '.item1', function(){
        $(".it1").removeClass("item1");
        $(".it1").addClass("item2");
        $(".it2").removeClass("item2");
        $(".it2").addClass("item3");
        $(".it3").removeClass("item3");
        $(".it3").addClass("item1");
        $(".item1").removeClass("it3"); 
        $(".item1").addClass("it1");
         $(".item2").removeClass("it1"); 
        $(".item2").addClass("it2");
        $(".item3").removeClass("it2"); 
        $(".item3").addClass("it3");
    });
  
  
    $('.wrap-item').on('click', '.item3', function(){
        $(".it1").removeClass("item1");
        $(".it1").addClass("item3");
        $(".it2").removeClass("item2");
        $(".it2").addClass("item1");
        $(".it3").removeClass("item3");
        $(".it3").addClass("item2");
        $(".item1").removeClass("it2"); 
        $(".item1").addClass("it1");
        $(".item2").removeClass("it3"); 
        $(".item2").addClass("it2");
        $(".item3").removeClass("it1"); 
        $(".item3").addClass("it3"); 
    });







	var owl = $(".owl-carousel")
	$(document).ready(function(){
		owl.owlCarousel({
		   	loop: true, 
		   	items: 1
		});
		$(".next").click(function(){
			owl.trigger("next.owl.carousel");
		});
		$(".prev").click(function(){
			owl.trigger("prev.owl.carousel");
		});
	

	});

$(".cmn-toggle-switch").click(function(){
  $(this).toggleClass("active");
  $(".section-1 .top-mnu-wrap .top-mnu").toggleClass("active-mnu");
});

	// $(document).hover(function (e)
	// { 
	// 	var div = $(".top-mnu-wrap ul li .drop-mnu");
	// 	var div1 = $(".top-mnu-wrap ul .drop-li-mnu")
	// 	var div2 = $(".top-mnu-wrap ul li .tab");
	// 	var div3 = $(".top-mnu-wrap ul li a .fa-angle-down")
	// 	if (!div.is(e.target)  && div.has(e.target).length === 0  && div1.hasClass("open")  )
	// 	{ 
	// 		$(".top-mnu-wrap ul .drop-li-mnu").removeClass("open");
	// 	}	
	// 	else if(div2.is(e.target) || div3.is(e.target))
	// 	{
	// 		$(".top-mnu-wrap ul .drop-li-mnu").toggleClass("open");
	// 	}
	// });


	$(document).mouseup(function (e)
	{ 
		var div = $(".top-mnu-wrap ul li form");
		var div1 = $(".top-mnu-wrap ul .drop-li-search")
		var div2 = $(".top-mnu-wrap ul li .tab1");
		var div3 = $(".top-mnu-wrap ul li a .fa-search")
		if (!div.is(e.target)  && div.has(e.target).length === 0  && div1.hasClass("open")  )
		{
			$(".top-mnu-wrap ul li form").addClass("hidden-search");
			$(".top-mnu-wrap ul .drop-li-search").removeClass("open");
			$(".top-mnu-wrap ul .drop-li-search i").addClass("fa-search");
			$(".top-mnu-wrap ul .drop-li-search i").removeClass("fa-times");
		}	
		else if(div2.is(e.target) || div3.is(e.target))
		{
			$(".top-mnu-wrap ul li form").removeClass("hidden-search");
			$(".top-mnu-wrap ul .drop-li-search").addClass("open");
			$(".top-mnu-wrap ul .drop-li-search i").removeClass("fa-search");
			$(".top-mnu-wrap ul .drop-li-search i").addClass("fa-times");
		}
	});






});
