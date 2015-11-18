angular.module("GeradorContrato").value("config", {
  prestador: {
		nome: "",
		cnpj: "",
		inscEst: "",
		endereco: {
			logradouro: "",
			numero: "",
      bairro: "",
      cidade: "",
			uf: "",
			cep: ""
		},
    telefone: [],
    telefonesToString: function(){
      var toString = "";
      this.telefones.forEach(function(telefone, index, array){
        toString += telefone;

        if(index < array.length -1){
          toString += " / ";
        }
      });
      return toString;
    }
	}
});
