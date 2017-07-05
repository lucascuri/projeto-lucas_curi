
$("#formulario").on("submit", function() {
	
	var email = $("[name = email]").val();
	var senha = $("[name = senha]").val();

	// VALIDAÇÕES //

	
	if (email == "" || senha == "") {
			if (email == "") {
			$("[name = email]").addClass('erro');
		} else {
			$("[name = email]").removeClass('erro');
		}
		
		if (senha == "") {
			$("[name = senha]").addClass('erro');
		} else {
			$("[name = senha]").removeClass('erro');
		}
		return false;
	}

	var data = {	
		email: email,
		password: senha
	};

	$.ajax({
		type: "post",
		url: "http://192.168.20.91:8085/login",
		data: data,
		success: function(res) {
			alert("Login realizado com sucesso!");
			
		},
		error: function(xhr) {
			alert(xhr.responseJSON.error.message);
		}	
});
	
	return false;

});

