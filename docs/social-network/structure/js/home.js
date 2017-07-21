var userData = JSON.parse(localStorage.getItem('userData'));

function loadUserData() {
	$("#name-avatar").text(userData.first_name + " " + userData.last_name);
	var initials = userData.first_name.charAt(0) + userData.last_name.charAt(0);

	$("#avatar-initials").text(initials.toUpperCase());
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
				html = "<div class='feeds'><div class='feeds-inside>'<p class='noPosts'>Não há novos posts no momento.</p></div></div>";
			} else {
				posts.reverse();
				for (i=0; i<posts.length; i++) {
					if (posts[i].liked) {
						icon = "<span class='icon-like icon-like-active' data-post-id='"+posts[i].post_id+"'></span>";
					} else {
						icon = "<span class='icon-like' data-post-id='"+posts[i].post_id+"'></span>";
					}
					html = html + "<div class='feeds'><div class='feeds-inside'><h4 class='feed-name'>" + posts[i].first_name + " " + posts[i].last_name + "<p class='feed-texto'>" + posts[i].text + "</p><div class='likes'><span class='span-like'>" + posts[i].likes + "</span>"+icon+"</div></div></div>";
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
		url: "http://realizadigital-api.nodo.cc/feed/",
		data: {
			text: textarea,
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

$('body').on('click', '.icon-like', function(){
	var post_id = $(this).data('post-id');
	var element = $(this);

	if (element.hasClass('icon-like-active')) {
		$.ajax({
			type: 'post',
			url: 'http://realizadigital-api.nodo.cc/unlike/' + post_id,
			data: {
				email: userData.email,
				password: userData.password
			},
			success: function(res) {
				var num = res.likes;
				element.parent().find('.span-like').text(num);
				console.log(num);
				element.removeClass('icon-like-active');
			}
		});
	}
	else {
		$.ajax({
			type: 'post',
			url: 'http://realizadigital-api.nodo.cc/like/' + post_id,
			data: {
				email: userData.email,
				password: userData.password
			},
			success: function(res) {
				var num = res.likes;	
				element.parent().find('.span-like').text(num);
				console.log(num);
				element.addClass('icon-like-active');
			}
		});
	}
});

$('.refresh').on('click', function(){
	loadFeeds();
});

$('.exit').on('click', function(){
	localStorage.removeItem('userData');
	location.reload();
});

function init() {
	loadUserData();
	loadFeeds();
}
init();