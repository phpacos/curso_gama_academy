function soma (x ,y) {
    return x + y;
}

console.log(soma(3, 4));

//colocamos funções dentro de constantes para que as funções não sejam subscritas inesperadamente
const multiplicacao = function (x, y){
    return x * y; 
};

console.log(multiplicacao(5, 5));

//recebe uma função de forma anônima, ao invés de separada. 
// o () já diz que é uma função
const dividir = (x, y) => {
    return x / y;
};

//arrow function para construção dinâmica de objetos
const objeto = () =>  ({nome : 'ph', sobrenome: 'pacos'});