var userData = localStorage.getItem('userData');

userData = JSON.parse(userData);

if (userData == undefined) {
	window.location = 'login.html';
}