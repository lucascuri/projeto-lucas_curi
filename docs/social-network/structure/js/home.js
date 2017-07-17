var userData = JSON.parse(localStorage.getItem('userData'));

function loadUserData() {
	$("#name-avatar").text(userData.first_name + " " + userData.last_name);
	var initials = userData.first_name.charAt(0) + userData.last_name.charAt(0);

	$("#avatar-initials").text(initials);
	$("#paragraph-rodape").text(userData.email);
	$("#paragraph-rodape2").text(userData.age + " anos");

}

function loadFeeds() {
	var wrapper = $("#feed-content");
	user_id = userData.id;
	$.ajax({
		url: "http://realizadigital-api.nodo.cc/feeds/" + user_id,
		type: "get",
		success: function(res) {
			var posts = res.posts;
			var html = "";
			if (posts.length === 0) {
				html = "<div class='feed'><p>Não há novos posts no momento.</p></div>";
			} else {
				posts.reverse();
				for (i=0; i<posts.length; i++) {
					if (posts[i].liked) {
						src = "img/icon-like-active.png";
					} else {
						src = "img/icon-like.png";
					}
					html = html + "<div class='feeds'><div class='feeds-inside'><h4 class='feed-name'>" + posts[i].first_name + " " + posts[i].last_name + "<p class='feed-texto'>" + posts[i].text + "</p><div class='likes'><span class='span-likes'>" + posts[i].likes + "</span><img src='" + src + "'></div></div></div>";
				}
			}
			wrapper.html(html);
		}
	});
}

$("#formulario").on("submit", function() {
	var textarea = $("textarea").val();
	var email = userData.email;
	var password = userData.password;
	if (textarea === "" || textarea > 200) {
		$("textarea").addClass("erro");
		return false;
	} else if (textarea.length > 200) {
		alert("Seu post excede o máximo de 200 caracteres.");
		return false;
	} else {
		$("textarea").removeClass("erro");
	}
	$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/feed",
		data: {
			text: texto,
			email: email,
			password: password
		},
		success: function (res) {
			loadFeeds();
			$("textarea").val("");
		}
	});
	return false;
});


function init() {
	loadUserData();
	loadFeeds();
}
init();