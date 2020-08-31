class Matematica{
    soma(a, b){
        return a + b;
    }

    subtracao(a,b){
        return a - b;
    }

    multiplicacao(a,b){
        return a * b;
    }

    divisao(a,b){
        return a / b;
    }
}

var o1 = new Matematica;

var resultado = o1.soma(1 , 2);
console.log(resultado);
