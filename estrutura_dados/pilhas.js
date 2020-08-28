
//---------PILHA-------//
//vetor
var elementos =[];
//usa pra saber se está fora da pilha
var topo = -1;
const MAX = 10;


function push(num){
    //Adiciona na pilha enquanto está no limite máximo
    if(topo<MAX){
        topo++;
        elementos[topo] = num;
    //Exibe erro se a pilha estiver cheia 
    }else{
        console.log("Pilha está cheia");
    }
}

function pop(){
    //Retira o número no topo se array não estiver vazia.  
    if(topo != -1){
        //número recebe o elemento do topo
        let num = elementos[topo];
        topo -= 1;
        return num; 
    //Exibe erro se a pilha estiver vazia    
    }else{
        console.log("Pilha está vazia");
    }

}

function vazia(){
    //diz se a pilha está vazia
    return topo == -1;
}

//---Usando a pilha---/

push(10);
push(20);
push(30);

console.log(elementos);


//--Decimais--//

var nDec = 10;
var resto;

//coloca o resto da divisão por 2 na array
console.log("empilhando...")
while(nDec != 0){
    resto = parseInt(nDec %2);
    push(resto);
    console.log(resto);
    nDec = parseInt(nDec/2);
}
//desempilhando
console.log("desempilhando...")
while(!vazia()){
    console.log(pop());
}