function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("bulbon")) {
		image.src = "assets/images/pic_bulboff.gif";
	} else {
		image.src = "assets/images/pic_bulbon.gif";
	}
}

function showMenu()
{ 
	var toggle = document.getElementById('toggle');
	var menu = document.getElementById('menu-item'); 
	if (menu.style.display == 'block') {
		menu.style.display = "none";
	}
	else {
		menu.style.display = "block";
	}
}