var userData = JSON.parse(localStorage.getItem('userData'));

function loadUserData() {
	$("#name-avatar").text(userData.first_name + " " + userData.last_name);
	var initials = userData.first_name.charAt(0) + userData.last_name.charAt(0);

	$("#avatar-initials").text(initials);
	$("#paragraph-rodape").text(userData.email);
	$("#paragraph-rodape2").text(userData.age + " anos");

}

function init() {
	loadUserData();
}
init();