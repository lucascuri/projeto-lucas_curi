	
	
	var userData = JSON.parse(localStorage.userData);

	$("#nome").val(userData.first_name);
	$("#sbnome").val(userData.last_name);
	$("#idade").val(userData.age);
	$("#cpf").val(userData.cpf);
	$("#cep").val(userData.cep);
	$("#endereco").val(userData.address);
	$("#email").val(userData.email);
	$("#senha").val(userData.password);


	

	$("form").on("submit", function() {
		var nome = $("#nome").val();
		var sbnome =  $("#sbnome").val();
		var idade = $("#idade").val();
		var cpf = $("#cpf").val();
		var cep = $("#cep").val();
		var endereco = $("#endereco").val();

		if (nome === "" || sbnome === "" || idade === "" || cpf === "" || cep === "" || endereco === "") {
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
		return false;
	}

		var data = {
			first_name: nome,
			last_name: sbnome,
			email: userData.email,
			age: idade,
			cpf: cpf,
			cep: cep,
			address: endereco,
			password: userData.password
		}

		$.ajax({
			type: "post",
			url: "http://realizadigital-api.nodo.cc/alter",
			data: data,
			success: function(res) {
				var userData = res;
				userData.password = data.password;
				localStorage.setItem('userData', JSON.stringify(userData));
				alert("Sua alteração de cadastro foi bem sucedida!");
				window.location = 'home.html';
			},
			error: function(xhr) {
				alert(xhr.responseJSON.error.message);
			}
		});
		return false;


			});

	$('#cep').mask('99999-999');
	$('#cpf').mask('999.999.999-99');





	

	