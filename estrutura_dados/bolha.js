//bubble sort: o mais fácil, porém menos eficiente
//pesquisar também insertion sort, selection sort e quick sort

var valores = [8,7,6,5,4,3,2,1];

function ordena(){
    let inicio = 0;
    let fim = 8;
    let tmp; //tempo pra trocar
    for(vezes = 0; vezes <8; vezes++){
        //enquanto a posição do início até o penultimo valor..esse algorítmo se repete até tudo estar ordenado
        for(pos = inicio; pos < fim-1; pos++){
            if(valores[pos] > valores[pos + 1]){
                //tmp recebe o valor atual
                tmp = valores[pos];
                //valor atual recebe o próximo valor
                valores[pos] = valores[pos +1];
                //valor
                valores[pos+1] = tmp;
            }
        }
    }    
}

ordena();
console.log("Vetor ordenado...");
console.log(valores);