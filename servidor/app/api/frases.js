var api = {};

var frases = [
	{_id: 0, texto:'Será que você é realmente bom com isso.', tempo: 15 },
	{_id: 1, texto:'Debuggers não consertam erros, apenas os exibem em slow motion.',tempo: 8 },
	{_id: 2, texto:'A repetição com correção até a exaustão leva a perfeição.', tempo: 5 },
	{_id: 3, texto:'Existem duas tarefas difíceis na Ciência da Computação: invalidação de cache e nomear as coisas.', tempo: 15 },
	{_id: 4, texto:'Ciências da computação é tão sobre computadores quanto astronomia é sobre telescópios.', tempo: 15 },
	{_id: 5, texto:'Na minha máquina funciona.', tempo: 5 },
	{_id: 6, texto:'Hardware é o que você chuta, software é o que você chinga.', tempo: 12 },
	{_id: 7, texto:'Software em funcionamento mais que documentação abrangente.', tempo: 10 },
	{_id: 8, texto:'Iterar é humano, recursão é divino.', tempo: 7},
	{_id: 9, texto:'Existem três jeitos de desenvolver software. O jeito certo, o jeito errado e o meu jeito, que é igual o jeito errado só que mais rápido.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
