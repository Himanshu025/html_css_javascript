var IND = IND || {};

IND.js = function(){
	this.initialize();
}
IND.js.prototype = {
	initialize:function(){
		this.handleContainer();
		this.handleLoginPopup();
		this.loginSubmitForm();
		this.handleLightBulb();
		this.handleSliderWindow();
		this.handleNavBar();
	},
	handleNavBar:function(){
    $('#toggle').click(function(){
      var current = $('#menu-item').css('display');
      if (current == 'block') 
        $('#menu-item').fadeOut(1000);
      else
        $('#menu-item').fadeIn(1000);
    });
	},
	handleContainer:function(){
		$('#homeClick').click(function(){
			$('#div-1').fadeIn(1000);
			$('#div-2').fadeOut(1000);
			$('#div-3').fadeOut(1000);
			return;	
		});
		$('#aboutClick').click(function(){
			$('#div-1').fadeOut(1000);	
			$('#div-2').fadeIn(1000);
			$('#div-3').fadeOut(1000); 
			return;	
		});
		$('#contactClick').click(function(){
			$('#div-1').fadeOut(1000);	
			$('#div-2').fadeOut(1000);
			$('#div-3').fadeIn(1000); 
			return;	
		});
	},
	handleLoginPopup:function(){
		$('#loginClick').click(function(){
			var current = $('#box').fadeToggle(1000);
		});
		$('#close-button').click(function(){
      $('#box').fadeOut(1000);
		});
	},
	loginSubmitForm:function(){
		self = this;
		$('#login-form').submit(function(e){
			e.preventDefault();
			var username = $('#login-form #username').val();
			var comment = $('#login-form #comment').val();
			$('#myTable tbody').append('<tr class="child"><td>'+username+'</td></tr>');
			$('#myTable tbody').append('<tr class="child"><td>'+comment+'</td></tr>');
			$('#login-form')[0].reset();
			self.closeThisPopup();
		});
	},
	closeThisPopup:function(){
		$('#box').fadeOut(1000);
	},
	handleLightBulb:function(){
		$('#changeImage').click(function(){
			if ($('#myImage').attr('src') == "assets/images/pic_bulboff.gif"){
				$('#myImage').attr('src','assets/images/pic_bulbon.gif');
			}
			else{
				$('#myImage').attr('src','assets/images/pic_bulboff.gif');
			}
		});
	},
	handleSliderWindow:function(){
		self = this;
		var current = $('.mySlides').first().css('display','block');
		self.handleLeftSliderClick(current);
		self.handleRightSliderClick(current);
	},
	handleRightSliderClick:function(current){
		$('#plusDivs').click(function(e){
			$('.mySlides').css('display','none');
			e.preventDefault();
			if(current.next().length==0){
				current = $('.mySlides').first().css('display','block');
			}
			else{
				current = current.next().css('display','block');
			}
		});
	},
	handleLeftSliderClick:function(current){
		$('#minusDivs').click(function(e){ 
			$('.mySlides').css('display','none');
			e.preventDefault();
			if(current.prev().length==0){
				current = $('.mySlides').last().css('display','block');
			}
			else{
				current = current.prev().css('display','block');	
			}		
		});	
	}
}