angular.module("GeradorContrato").controller('GeradorContratoCtrl', function($scope, prestadorAPI){
	// Controle de divs e inputs especificos
	var pessoaFisica = {modo: 'fisica', descricao: 'Modo Pessoa Física'};
	var pessoaJuridica = {modo: 'juridica', descricao: 'Modo Pessoa Jurídica'};

	// info do prestador de servico
	$scope.prestador = prestadorAPI.getPrestador();

	$scope.tipoPessoa = pessoaFisica;
	$scope.dataAtual = new Date();
	$scope.formModel = {};
	$scope.formModel.servicos = [];
	$scope.formModel.dataEvento = new Date();

	$scope.bindEnterAdicionarServico = function(novoServico, event){
		if(event.keyCode !== 13) return;

		this.adicionarServico(novoServico);
	};

	$scope.adicionarServico = function(novoServico){
		$scope.formModel.servicos.push(novoServico);
		delete $scope.novoServico;
	};

	$scope.removerServico = function(removeServico, servicos){
		$scope.formModel.servicos = servicos.filter(function(servico){
				return servico != removeServico
		});
	};

	$scope.mudarTipoPessoa = function(tipoPessoa){
		if(tipoPessoa == pessoaFisica){
			$scope.tipoPessoa = pessoaJuridica;
		} else {
			$scope.tipoPessoa = pessoaFisica;
		}
	};

});
