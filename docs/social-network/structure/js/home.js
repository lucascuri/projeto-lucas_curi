var userData = JSON.parse(localStorage.getItem('userData'));

function loadUserData() {
	$("#name-avatar").text(userData.first_name + " " + userData.last_name);
	var initials = userData.first_name.charAt(0) + userData.last_name.charAt(0);

	$("#avatar-initials").text(initials.toUpperCase());
	$("#paragraph-rodape").text(userData.email);
	$("#paragraph-rodape2").text(userData.age + " anos");

}

function loadFeeds() {
	var wrapper = $(".feeds");
	var user_id = userData.id;	
	$.ajax({
		url: "http://realizadigital-api.nodo.cc/feeds/" + user_id,
		type: "get",
		success: function(res) {
			var posts = res.posts;
			var html = "";
			if (posts.length === 0) {
				html = '<p class="erro">Não existem posts no momento</p>';
			} else {
				posts.reverse();
				for (var i = 0; i < posts.length; i++) {
					html = html + '<div class="feeds-inside"><h4>' + posts[i].first_name + ' ' + posts[i].last_name + '</h4><p>' + posts[i].text + '</p><div class="likes"><span class="span-likes">' + posts[i].likes + '</span>';
					if (posts[i].liked) {
						html = html + '<img src="img/icon-like-active">';
					} else {
						html = html + '<img src="img/icon-like">';
					}

					html = html + '</span></h4></div>';

				}


			}
			wrapper.html(html);
		}
	});

	$("form").on("submit", function(){
		// validacoes textarea, ver se esta vazio e tem mais de 200 caracteres//
		var textarea = $("#textarea").val();
		var email = userData.email;
		var password = userData.password;
		if (textarea.length <= 0 || textarea.length > 200) {
			alert("Seu post deve ter entre 1 e 200 caracteres.");
			return false;
		}

		$.ajax({
			type: "post",
			url: "http://realizadigital-api.nodo.cc/feed",
			data: {
				text: textarea,
				email: email,
				password: password
			},
			success: function(res) {
				alert("Publicado com sucesso");
				loadFeeds();
			}

		});
		return false;
	});
}

function init() {
	loadUserData();
	loadFeeds();
}
init();