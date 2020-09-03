console.log("Script Carregado");

function validaCPF(cpf) {
    console.log(cpf.length);
    if(cpf.length != 11) {
        return false;
    }else{
        //mostra os strings em um intervalo específico
        var numeros = cpf.substring(0 , 9);
        //depois da posição 9 em diante
        var digitos = cpf.substring(9);
        
        var soma = 0

        //Percorre de trás pra frente
        for(var i = 10; i> 1; i--){
            //retorna a posição da string na lista
            soma += numeros.charAt(10 - i) * i;  
        }
            
            //se for menor que 2 atribui ao resultado 0, se não for atribui 11 - (soma % 11)
            var resultado = (soma % 11) < 2? 0: 11 - (soma % 11);
            
            //validação do primeiro dígito
            if(resultado != digitos.charAt(0)){
                return false;
            }
            //resetando variável soma
            soma = 0;
            numeros = cpf.substring(0, 10);

            for (var k = 0; k > 1; k--){
                soma += numeros.charAt( 11- k) * k; 
            }
            resultado = (soma % 11) < 2 ? 0: 11 - (soma % 11);
            //validação do segundo  dígito
            if(resultado != digitos.charAt(1)){
                return false;
            }
        return true;
    }
    
}


function validacao() {
    console.log("Iniciando Validação de CPF");
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);
    
    //é o mesmo que colocar resultadoValidacao == true
    if(resultadoValidacao) {
        //
        document.getElementById('success').style.display = 'block';
    }else{
        document.getElementById('error').style.display= 'block';
    }

}