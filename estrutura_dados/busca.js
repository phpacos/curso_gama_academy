var valores = [5,8,10,22,38,45,60,85,97,123];


//------PARA BUSCAS PEQUENAS------//
//busca a posição
function busca(num){
    //percorre o vetor
    for(i=0; i<6;i++){
        if(num == valores [i]){
            return i;
        }
    }
    return -1;
}


//usando a ferramenta de busca
console.log(busca(10));
console.log(busca(5));

//------BUSCA BINÁRIA------//
//os valores precisam estar ordenados(menor pro maior). já é o caso da array valores. 
//ordem logarítmica: Pega o do meio e vai cortando a busca pela metade até achar o resultado.

function buscaBin(num){
    let inicio, fim;
    let meio;
    inicio = 0;
    fim = 9;
    let passos = 0; //conta em quantos passos acha o valor

    while(inicio <= fim){
        meio = parseInt((inicio + fim) / 2);
        passos = passos + 1;
        if(num == valores[meio]){
            console.log("achei em "+ passos+ "passos");
            return meio;
        }else{
            if(num > valores[meio]){
                inicio = meio + 1;
            }else{
                fim = meio -1; 
            }
        }
    }
    //quando não existe, se coloca um número que não tem na array
    console.log("não achei em "+ passos +" passos");
    return -1;
}

//---Executando busca binária ---//
console.log(buscaBin(10));
console.log(buscaBin(45));