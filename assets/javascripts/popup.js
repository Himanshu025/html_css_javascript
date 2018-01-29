function login() {
	var popup = document.getElementById('box');
	if (popup.style.display == 'block')
		popup.style.display = "none";
	else
		popup.style.display = "block";
}
$('document').ready(function(){
  $('#login-form').submit(function(){
    var username = document.getElementById("username").value;
    var user = document.getElementById("user");
    user.value = username;
    return false;
  });
});