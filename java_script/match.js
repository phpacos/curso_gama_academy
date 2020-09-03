//match busca conteúdos de  uma amostra de dados que não temos certeza como está etruturada

const textoNaoEstruturado = "Meu CPF é 123.456.789-00";

//expressão regular
const regex = new RegExp ('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

//extraiu o conteúdo através do texto de CPF
//cruza toda a string e partir de uma expreção regular aplica dentro do match, retorna um objeto com essa informação
console.log(textoNaoEstruturado.match(regex));