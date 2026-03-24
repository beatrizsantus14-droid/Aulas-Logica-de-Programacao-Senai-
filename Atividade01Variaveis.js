// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:
//A
var meuNome="Beatriz"
console.log(meuNome)
//B
var naoUsarVar="Metodo Antigo"
console.log(naoUsarVar)
//C
let minhaIdade = 21
console.log(minhaIdade)
//D
const ANO_NASCIMENTO = 2004
console.log(ANO_NASCIMENTO)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:

//A
const cidade="Jaragua do Sul"
console.log(cidade)

//B
const pais="Brasil"
console.log(pais)

//C
let fraseMoradia= `Eu moro ${cidade}, no ${pais}`
console.log(fraseMoradia)

//D
console.log(typeof fraseMoradia)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

//A 
let maiorDeIdade=true
console.log(maiorDeIdade)

//B
let temCNH=false
console.log(temCNH)

//C
console.log(typeof maiorDeIdade,typeof temCNH)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:

//A
let apelido
console.log(apelido)

//B
let enderecoAtual=null
console.log(enderecoAtual)

//C 
console.log(typeof apelido,typeof enderecoAtual)

//D
//typeof null retorna object por ser a ausencia intecional de uma informação
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42
// "texto"
// true
// undefined
// null
// 3.14

let numero=42
console.log(typeof numero)

let texto="texto"
console.log(typeof texto)

let verdadeiro=true
console.log(typeof verdadeiro)

let undefined
console.log(undefined)

let nada=null
console.log(typeof nada)

const pi=3.14
console.log(typeof pi)

console.log("______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:
const nome="Beatriz"
let idade =21
let altura=1.59
let cidade2="Jaragua do Sul"
let estudandoJS="JavaScript"
let frase=`Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade2},meco ${altura}m e estou estudando Javascript ${estudandoJS}`
console.log(frase)

console.log("_______________________________");