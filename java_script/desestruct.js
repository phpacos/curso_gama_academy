const pessoa = {
    nome: 'PH',
    sobrenome: 'PaCos',
    idade: 27,
    profissao: 'dev'
};

console.log(pessoa); 

//forma antiga de desconstruir objeto
/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenomenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;
*/

//deconstruct correto
//o nome é um objeto
let {nome, sobrenome, idade, profissao} = pessoa;
console.log(nome, sobrenome, idade, profissao);