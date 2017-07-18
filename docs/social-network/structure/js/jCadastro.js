


$("#formulario").on("submit", function() {
	var nome = $("[name = nome]").val();
	var sbnome = $("[name = sbnome]").val();
	var email = $("[name = email]").val();
	var idade = $("[name = idade]").val();
	var cpf = $("[name = cpf]").val();
	var cep = $("[name = cep]").val();
	var endereco = $("[name = endereco]").val();
	var senha = $("[name = senha]").val();

	// VALIDAÇÕES //
	if (nome === "" || sbnome === "" || email === "" || idade === "" || cpf === "" || cep === "" || endereco === "" || senha === "") {
		if (nome === "") {
			$("[name = nome]").addClass('erro');
		} else {
			$("[name = nome]").removeClass('erro');
		}
		if (sbnome === "") {
			$("[name = sbnome]").addClass('erro');
		} else {
			$("[name = sbnome]").removeClass('erro');
		}
		if (email === "") {
			$("[name = email]").addClass('erro');
		} else {
			$("[name = email]").removeClass('erro');
		}
		if (idade === "" || idade <= 0 || idade > 110) {
			$("[name = idade]").addClass('erro');
		} else {
			$("[name = idade]").removeClass('erro');
		}
		if (cpf === "") {
			$("[name = cpf]").addClass('erro');
		} else {
			$("[name = cpf]").removeClass('erro');
		}
		if (cep === "") {
			$("[name = cep]").addClass('erro');
		} else {
			$("[name = cep]").removeClass('erro');
		}
		if (endereco === "") {
			$("[name = endereco]").addClass('erro');
		} else {
			$("[name = endereco]").removeClass('erro');
		}
		if (senha === "") {
			$("[name = senha]").addClass('erro');
		} else {
			$("[name = senha]").removeClass('erro');
		}
		return false;
	}
	
	var data = {
		first_name: nome,
		last_name: sbnome,
		email: email,
		age: idade,
		cpf: cpf,
		cep: cep,
		address: endereco,
		password: senha
	};

	$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/register",
		data: data,
		success: function(res) {
			alert("Cadastro realizado com sucesso!");
			window.location = 'login.html'
		},
		error: function(xhr) {
			alert(xhr.responseJSON.error.message);
		}	
});
	return false;
});

// mask input //

$('#cep').mask('99999-999');
$('#cpf').mask('999.999.999-99');

