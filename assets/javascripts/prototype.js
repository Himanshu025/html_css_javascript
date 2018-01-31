var IND = IND || {};

IND.Def = function(){
	this.initialize();
}
IND.Def.prototype = {
	initialize:function(){
		this.showContainer();
		this.loginPopup();
		this.formSubmit();
		this.blowBulb();
		this.sliderWindow();
	},
	showContainer:function(){
		$('#homeClick').click(function(){
			$('#div-1').css('display','block');	
			$('#div-2').css('display','none');
			$('#div-3').css('display','none');
			return;	
		});
		$('#aboutClick').click(function(){
			$('#div-1').css('display','none');	
			$('#div-2').css('display','block');
			$('#div-3').css('display','none'); 
			return;	
		});
		$('#contactClick').click(function(){
			$('#div-1').css('display','none');	
			$('#div-2').css('display','none');
			$('#div-3').css('display','block'); 
			return;	
		});
	},
	loginPopup:function(){
		$('#loginClick').click(function(){
			var current = $('#box').css('display');
			if(current == "block"){
				$('#box').css('display','none');
			}
			else{
				$('#box').css('display','block');
			}
		});
	},
	formSubmit:function(){
		$('#login-form').submit(function(e){
			e.preventDefault();
			var username = $('#login-form #username').val();
			$('#user').val(username);
		});
	},
	blowBulb:function(){
		$('#changeImage').click(function(){
			if ($('#myImage').attr('src') == "assets/images/pic_bulboff.gif"){
				$('#myImage').attr('src','assets/images/pic_bulbon.gif');
			}
			else{
				$('#myImage').attr('src','assets/images/pic_bulboff.gif');
			}
		});
	},
	sliderWindow:function(){
		var current = $('.mySlides').first().css('display','block');
		$('#plusDivs').click(function(e){
			e.preventDefault();
			slideNext();
		});
		function slideNext()
		{
			$('.mySlides').css('display','none');
			if(current.next().length==0){
				current = $('.mySlides').first().css('display','block');
			}
			else{
				current = current.next().css('display','block');
			}
		}
		$('#minusDivs').click(function(e)
		{ 
			e.preventDefault();
			slidePrevious();
		});
		function slidePrevious()
		{ 
			$('.mySlides').css('display','none');
			if(current.prev().length==0){
				current = $('.mySlides').last().css('display','block');
			}
			else{
				current = current.prev().css('display','block');	
			}
		}
	}
}