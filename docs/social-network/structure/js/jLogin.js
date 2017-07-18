
$("#formulario").on("submit", function() {
	
	var email = $("[name = email]").val();
	var senha = $("[name = senha]").val();

	// VALIDAÇÕES //
	
	if (email === "" || senha === "") {
			if (email == "") {
			alert("Por favor, preencha o campo de e-mail");
			$("[name = email]").addClass('erro');
			return false;
		} else {
			$("[name = email]").removeClass('erro');
		}
		
		if (senha === "") {
			alert("Por favor, preencha o campo de senha");
			$("[name = senha]").addClass('erro');
			return false;
		} else {
			$("[name = senha]").removeClass('erro');
		}	
		
	}

	var data = {	
		email: email,
		password: senha
	};

	$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/login",
		data: data,
		success: function(res) {

			var userData = res;
			userData.password = data.password;
			localStorage.setItem('userData', JSON.stringify(userData));
			window.location = 'home.html';
			
		},
		error: function(xhr) {
			alert(xhr.responseJSON.error.message);
		}	
});
	
	return false;

});

