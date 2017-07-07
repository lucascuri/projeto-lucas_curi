
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

	if (nome == "") {
		alert("Por favor, preencha o campo nome corretamente");
		$("[name = nome]").addClass('erro');
		return false;
	} else {
		$("[name = nome]").removeClass('erro');
	}
	if (sbnome == "") {
		alert("Por favor, preencha o campo de sobrenome corretamente");
		$("[name = sbnome]").addClass('erro');
		return false;
	} else {
		$("[name = sbnome]").removeClass('erro');
	}
	if (email == "") {
		alert("Por favor, preencha o campo de email corretamente");
		$("[name = email]").addClass('erro');
		return false;
	} else {
		$("[name = email]").removeClass('erro');
	}
	if (idade == "") {
		alert("Por favor, preencha o campo de idade corretamente");
		$("[name = idade]").addClass('erro');
		return false;
	} else {
		$("[name = idade]").removeClass('erro');
	}
	if (cpf == "") {
		alert("Por favor, preencha o campo de CPF corretamente");
		$("[name = cpf]").addClass('erro');
		return false;
	} else {
		$("[name = cpf]").removeClass('erro');
	}
	if (cep == "") {
		alert("Por favor, preencha o campo de CEP corretamente");
		$("[name = cep]").addClass('erro');
		return false;
	} else {
		$("[name = cep]").removeClass('erro');
	}
	if (endereco == "") {
		alert("Por favor, preencha o campo de endereço corretamente");
		$("[name = endereco]").addClass('erro');
		return false;
	} else {
		$("[name = endereco]").removeClass('erro');
	}
	if (senha == "") {
		alert("Preencha o campo de senha corretamente");
		$("[name = senha]").addClass('erro');
		return false;
	} else {
		$("[name = senha]").removeClass('erro');
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
			
		},
		error: function(erro) {
			alert(erro.message);
		}	
});
	return false;
});

