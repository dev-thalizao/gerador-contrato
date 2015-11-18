angular.module("GeradorContrato").service("prestadorAPI", function ($http, config) {
	// Não esquecer de preencher o arquivo js/value/configValue.js, responsavel
	// pelas informações do prestador de serviços
	this.getPrestador = function () {
		return config.prestador;
	};
});
