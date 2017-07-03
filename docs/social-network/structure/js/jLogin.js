$("#formulario").on("submit", function() {
	var email = $("[name = email]").val();
	var senha = $("[name = senha]").val();

	
	if (email == "" || senha == "") {
		alert("Digite seus dados corretamente");

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
		senha: senha
	};

	$.ajax ({
		type: "post",
		url: "http://192.168.20.91:8085/feeds",
		data: data,

		success: function(retorno) {
			alert("Registrado com sucesso");
			$("#formulario") [0].reset();
		}
	});
	return;

	
});