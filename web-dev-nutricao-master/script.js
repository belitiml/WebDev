var tabela = document.querySelector('table')
var linhas = tabela.querySelectorAll('tr')

for (var i = 1; i < linhas.length; i++) {
	calcularIMC(linhas[i])
	linhas[i].addEventListener('dblclick', function(event) {
		EventTarget.target.parentNode.remove()
	})
}

function calcularIMC(linha) {
	var tds = linha.querySelectorAll('td')
	var tdAltura = tds[1]
	var tdPeso = tds[2]

	var altura = parseFloat(tdAltura.innerText)
	var peso = parseFloat(tdPeso.innerText)

	var IMC = peso / (altura * altura)

	var tdIMC = tds[3]
    tdIMC.innerText = IMC.toFixed(2)
    if(IMC >=30)
    tdIMC.style.backgroundColor = 'red'
}

var adicionarPessoa = function(){
	var campoNome =  document.getElementById ('campo-nome')
	var campoAltura =  document.getElementById ('campo-altura')
	var campoPeso =  document.getElementById ('campo-peso')

	var pessoa = {
		nome: campoNome.value, 
		altura: campoAltura.value,
		peso: campoPeso.value  
	}

	var novaLinha = document.createElement('tr')

	var tdNome = document.createElement ('td')
	var tdAltura = document.createElement ('td')
	var tdPeso = document.createElement ('td')
	var tdIMC = document.createElement ('td')

	novaLinha.appendChild(tdNome)
	novaLinha.appendChild(tdAltura)
	novaLinha.appendChild(tdPeso)
	novaLinha.appendChild(tdIMC)

	tdNome.innerText = pessoa.nome
	tdAltura.innerText = pessoa.altura
	tdPeso.innerText = pessoa.peso

	calcularIMC(novaLinha)

	tabela.appendChild(novaLinha)

	
	
	
}

/*
var altura = parseFloat(tdAltura.innerText)
var peso = parseFloat(tdPeso.innerText)

var IMC = peso / (altura * altura)

var tdIMC = document.getElementById('IMC-josefino')
tdIMC.innerText = IMC.toFixed(2)*/