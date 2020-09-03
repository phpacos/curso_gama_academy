let lista = [1, 2, 5];
let listaIncluir =  [3, 4];



//sem spread
for (let i =0; i < listaIncluir.length; i ++){
    for (let j= 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            //splice: insere valores emuma posição estratégica. o segundo é o que inclui e o terceiro é o que inclui
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}

//console.log(lista);

//com spread
const listResult = [1, 2, ...listaIncluir, 5];

//console.log(listResult);


//outro exemplo
let arr = ['a', 'b', 'c'];
//este sim é uma cópia. só altera nele
let arr2 = [...arr];


///criou uma referência e não uma cópia
//let arr2 = arr;



arr2.push('d');

console.log(`ARR = ${arr}`);
console.log(`ARR2 = ${arr2}`);