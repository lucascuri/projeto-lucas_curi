
$("#formulario").on("submit", function() {
	
	var email = $("[name = email]").val();
	var senha = $("[name = senha]").val();

	// VALIDAÇÕES //
	
	if (email == "" || senha == "") {
			if (email == "") {
			alert("Por favor, preencha o campo de e-mail");
			$("[name = email]").addClass('erro');
			return false;
		} else {
			$("[name = email]").removeClass('erro');
		}
		
		if (senha == "") {
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

			var toSave =  {
			password: data.password,
			email: data.email,
			id: res.id,
			age: res.age

			};

			localStorage.setItem('toSave', JSON.stringify(toSave));
			
			alert("Login realizado com sucesso!");
			window.location = 'home.html';
			
		},
		error: function(xhr) {
			alert(xhr.responseJSON.error.message);
		}	
});
	
	return false;

});

