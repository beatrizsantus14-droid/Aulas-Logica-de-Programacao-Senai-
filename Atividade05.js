// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
/*
let num1= 10
let num2= 10

let num3= 10
let num4= "10"

let num5= 0
let num6= false

let num7= null
let num8= undefined

let num9= "JS"
let num10= "JS"
//1
console.log(num1==num2)
console.log(num1===num2)
//2
console.log(num3==num4)
console.log(num3===num4)
//3
console.log(num5==num6)
console.log(num5===num6)
//4
console.log(num7==num8)
console.log(num7===num8)
//5
console.log(num9==num10)
console.log(num9===num10)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
//1
console.log(5!=5)
console.log(5!==5)
//2
console.log(5!="5")
console.log(5!=="5")
//3
console.log(7!=3)
console.log(7!==3)
//4
console.log(true!=1)
console.log(true!==1)


console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
/*

console.log("_______________________________");
//a
let salarioA= 3500
let salarioB= 4200
//b
console.log(salarioA > salarioB)
console.log(salarioA < salarioB)
console.log(salarioA >= salarioB)
console.log(salarioA <= salarioB)
console.log(salarioA === salarioB)
//c
console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}):  ${salarioA > salarioB ? true : false}`)
*/

// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.
/*
// → Seu código aqui:
//a
let estoque=0
//b
let temEstoque= estoque>0
//c
let estoqueZerado= estoque === 0
//d
let temperatura= 36.5
//e
let febre= temperatura>=37.6
//f
console.log(`Estoque: ${estoque}, Tem em estoque: ${temEstoque}, Temperatura: ${temperatura}, Febre ${febre}`)
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.
/*
// → Seu código aqui:
//a
let num1= lerTeclado.questionInt("Digite um numero:");
let num2= lerTeclado.questionInt("Digite um numero:")
//b
let resultado1 = num1 > num2
let resultado2 = num1 < num2
let resultado3 = num1 === num2
let resultado4 = num1 >= num2
//
console.log(`Resultado 1: ${resultado1}, Resultado 2: ${resultado2}, Resultado 3: ${resultado3}, Resultado 4 ${resultado4}`)


console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"
/*
// → Seu código aqui:
//A
let preco= lerTeclado.questionFloat("Digite o preco:")
//B
const precoMaximo= 100
//c
let estaDentroDoOrcamento=preco <= precoMaximo
//d
let esteItemEhCaro=preco > precoMaximo
//e
console.log(`Preco informado ${preco}`)
console.log(`Dentro do orçamento:${preco < precoMaximo}`)
console.log(`Item caro? ${estaDentroDoOrcamento<precoMaximo} esse item está caro? ${esteItemEhCaro}`)

console.log("_______________________________");

*/
// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
//a
/*
let cadastro =[
    {
        nome: lerTeclado.question("Digite o nome"),
idadePessoa1: lerTeclado.questionInt("digite a idade:")
        },
            {
             nome: lerTeclado.question("Digite o nome"),
            idadePessoa2: lerTeclado.questionInt("digite a idade:")
             }
]
//b
let resultado1= cadastro[0].idadePessoa1 >cadastro[1].idadePessoa2
let resultado2= cadastro[1].idadePessoa1 === cadastro[1].idadePessoa2
let resultado3= cadastro[0].idadePessoa1 >= 18 
let resultado4= cadastro[1].idadePessoa2 >= 18
//c
console.log(`Idade da ${cadastro[0].nome} é ${cadastro[0].idadePessoa1} e ela é ${casdastro[0].idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`)
//d

*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
//a
let aluno = [
    {
    nomeAluno1: lerTeclado.question("Nome:"),
    nota1: lerTeclado.questionInt("Nota1:"),
    nota2: lerTeclado.questionInt("Nota2:"),
    nota3: lerTeclado.questionInt("Nota3:")
    },
    {
    nomeAluno1: lerTeclado.question("Nome:"),
    nota1: lerTeclado.questionInt("Nota1:"),
    nota2: lerTeclado.questionInt("Nota2:"),
    nota3: lerTeclado.questionInt("Nota3:")
    }
]
//b
let mediaAluno1= (aluno[0].nota1 + aluno[0].nota2 + aluno[0].nota3) /3
let mediaAluno2= (aluno[1].nota1 + aluno[1].nota2 + aluno[1].nota3) /3
console.log(mediaAluno1)
console.log(mediaAluno2)



console.log("_______________________________");
