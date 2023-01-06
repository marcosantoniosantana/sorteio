var corpo = document.querySelector('body').addEventListener("load", sortearCabecalho());

function sortearCabecalho(){
	var titulo = document.querySelector('#tInicio');

	//animação para escolher as letras do cabeçalho:
	var l1 = document.querySelector('#l1');
	var l2 = document.querySelector('#l2');
	var l3 = document.querySelector('#l3');
	var l4 = document.querySelector('#l4');
	var l5 = document.querySelector('#l5');
	var l6 = document.querySelector('#l6');
	var l7 = document.querySelector('#l7');

	let lista = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',  'R', 'S', 'T', 'U', 'V', 'Z'];

		var intervalo1 = setInterval(function () {
			function embaralha(lista){
				//console.log(lista[~~(lista.length * Math.random())]);
			}
			embaralha(lista);
			l1.innerHTML = lista[~~(lista.length * Math.random())];

			if (l1.innerHTML == 'S') {
				clearInterval(intervalo1);
			}
		}, 100);

		var intervalo2 = setInterval(function () {
			function embaralha(lista){
			}
			embaralha(lista);
			l2.innerHTML = lista[~~(lista.length * Math.random())];

			if (l2.innerHTML == 'O') {
				clearInterval(intervalo2);
			}
		}, 100);

		var intervalo3 = setInterval(function () {
			function embaralha(lista){
			}
			embaralha(lista);
			l3.innerHTML = lista[~~(lista.length * Math.random())];

			if (l3.innerHTML == 'R') {
				clearInterval(intervalo3);
			}
		}, 100);

		var intervalo4 = setInterval(function () {
			function embaralha(lista){
			}
			embaralha(lista);
			l4.innerHTML = lista[~~(lista.length * Math.random())];

			if (l4.innerHTML == 'T') {
				clearInterval(intervalo4);
			}
		}, 100);

		var intervalo5 = setInterval(function () {
			function embaralha(lista){
			}
			embaralha(lista);
			l5.innerHTML = lista[~~(lista.length * Math.random())];

			if (l5.innerHTML == 'E') {
				clearInterval(intervalo5);
			}
		}, 100);

		var intervalo6 = setInterval(function () {
			function embaralha(lista){
			}
			embaralha(lista);
			l6.innerHTML = lista[~~(lista.length * Math.random())];

			if (l6.innerHTML == 'I') {
				clearInterval(intervalo6);
			}
		}, 100);

		var intervalo7 = setInterval(function () {
			function embaralha(lista){
			}
			embaralha(lista);
			l7.innerHTML = lista[~~(lista.length * Math.random())];

			if (l7.innerHTML == 'O') {
				clearInterval(intervalo7);
			}
		}, 100);
}

var caixa = document.querySelector('#nomes');
var listaPalavras = document.querySelector('#listaSorteio');
var listaSorteio = [];

var contador = 0;

caixa.addEventListener("keyup", function rt(e){
	var key = e.which || e.keyCode;
	if (key == 13) {
		escrevaItens();
	}
});

function escrevaItens(){
	var insereOpcoes = document.createElement('h2');
	insereOpcoes.classList = "palavras";
	insereOpcoes.innerHTML = `${caixa.value}`;
	//listaPalavras.value = `${caixa.value}`;
	listaPalavras.appendChild(insereOpcoes);

	listaSorteio.push(caixa.value);
	//console.log(listaSorteio);
	caixa.value = "";
}

var btSortear = document.querySelector('#bt-sortear');
btSortear.onclick = () => {
	sortear();
}

var btAnotar = document.querySelector('#bt-anotar');
btAnotar.onclick = () => {
	escrevaItens();
}

function sortear(){
	var tagEscolhida = document.querySelector('#escolhido');
	var sortear = setInterval(function() {
		function escolhendo(es){}

		//console.log(p[~~(p.length * Math.random())]);
		tagEscolhida.innerHTML = listaSorteio[~~(listaSorteio.length * Math.random())];

		setTimeout(function () {
			function exEscolha(ex){}

			var x = listaSorteio[~~(listaSorteio.length * Math.random())];

			if (x == x) {
				clearInterval(sortear);
				//console.log("A FUNÇÃO TÁ FUNCIONANDO!!!!!!");
			}
		}, 7000);

	}, 100);
}