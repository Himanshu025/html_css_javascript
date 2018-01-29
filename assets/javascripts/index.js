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
function indexdiv()
{
	var home = document.getElementById('div-1');
	var about = document.getElementById('div-2');
	var contact = document.getElementById('div-3');
	home.style.display = "block";
	about.style.display = "none";
	contact.style.display = "none";
	return;
}
function aboutdiv()
{
	var home = document.getElementById('div-1');
	var about = document.getElementById('div-2');
	var contact = document.getElementById('div-3');
	home.style.display = "none";
	about.style.display = "block";
	contact.style.display = "none";
	return;
}
function contactdiv()
{
	var home = document.getElementById('div-1');
	var about = document.getElementById('div-2');
	var contact = document.getElementById('div-3');
	home.style.display = "none";
	about.style.display = "none";
	contact.style.display = "block";
	return;
}
