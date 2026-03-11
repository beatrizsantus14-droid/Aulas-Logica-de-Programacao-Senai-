// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');
// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
/*
//A
console.log("Iniciando o programa")
//B
console.info("Input e Output em JavaScript")
//C
console.warn("Iniciar o programa com node e o nome do arquivo")
//D
console.error("Tente novamente mais tarde")
*/

// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
/*
//A
const meuNome = lerTeclado.question('Digite seu nome: ');
//B
const minhaIdade = lerTeclado.questionInt('Digite sua idade: ');
//C
console.log(`Olá, ${meuNome} Você tem ${minhaIdade} anos.`)

*/

// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
/*
//A
const usuario = lerTeclado.question('Digite seu nome: ');
const idade = lerTeclado.questionInt('Digite sua idade: ');
const cidade = lerTeclado.question('Digite sua cidade: ');
//B
 ficha = [usuario,idade,cidade]
//C
console.table(ficha);
*/

// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
/*
const clima= lerTeclado.keyInYN("Vai fazer sol hoje?")

const clima2= lerTeclado.keyInYN("E amanha vai fazer o sol?")

console.log(clima,clima2)
*/



// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().
/*
// → Seu código aqui:
const comidasFavoritas1 = lerTeclado.question('Digite comidas favoritas ');
const comidasFavoritas2 = lerTeclado.question('Digite comidas favoritas ');
const comidasFavoritas3 = lerTeclado.question('Digite comidas favoritas ');

let comidasFavoritas = [`${comidasFavoritas1},${comidasFavoritas2},${comidasFavoritas3}`]
console.table(comidasFavoritas);
*/

// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
/*
//A
const nome = lerTeclado.question('Digite Seu nome ');
const profissao = lerTeclado.question('Digite sua profissao ');
const cidade = lerTeclado.question('Digite sua cidade ');

//B
const cadastroPessoal= [`${nome},${profissao},${cidade}`]
console.log(cadastroPessoal);

//C
console.log(`Me chamo ${nome}. Profissão: ${profissao} e moro na cidade de: ${cidade}.`)
*/

// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
/*
//a
const usuario1={
    nome: lerTeclado.question("Digite seu nome:"),
    idade: lerTeclado.questionInt("Digite sua idade? "),
    endereco: {
        cidade: lerTeclado.question("Digite sua cidade: "),
        rua: lerTeclado.question("Digite sua rua:"),
        numero: lerTeclado.question("Digite seu numero: ")
    }
}

const usuario2={
    nome: lerTeclado.question("Digite seu nome:"),
    idade: lerTeclado.questionInt("Digite sua idade? "),
    endereco: {
        cidade: lerTeclado.question("Digite sua cidade: "),
        rua: lerTeclado.question("Digite sua rua:"),
        numero: lerTeclado.question("Digite seu numero: "),
    }
}

const usuario3={
    nome: lerTeclado.question("Digite seu nome:"),
    idade: lerTeclado.questionInt("Digite sua idade? "),
    endereco: [ 
        {
        cidade: lerTeclado.question("Digite sua cidade: "),
        rua: lerTeclado.question("Digite sua rua:"),
        numero: lerTeclado.question("Digite seu numero: "),
      }
    ]
}
//c
let listaDeUsuarios= [usuario1,usuario2,usuario3]
//d
console.table(listaDeUsuarios)
//e
console.log(listaDeUsuarios[1].nome,listaDeUsuarios[1].idade)
//f
console.log(listaDeUsuarios[2].endereco)
//g
console.log(listaDeUsuarios[0].nome,listaDeUsuarios[0].endereco[0].rua)
*/

// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
/*
//a,b
const aluno1 = {
    nome: lerTeclado.question("Digite seu nome:"),
    notas1: lerTeclado.questionInt("Digite sua nota1: "),
    notas2: lerTeclado.questionInt("Digite sua nota2: "),
    notas3: lerTeclado.questionInt("Digite sua nota3: ")
}
const aluno2 = {
    nome: lerTeclado.question("Digite seu nome:"),
    notas1: lerTeclado.questionInt("Digite sua nota1: "),
    notas2: lerTeclado.questionInt("Digite sua nota2: "),
    notas3: lerTeclado.questionInt("Digite sua nota3: ")
}
const aluno3 = {
    nome: lerTeclado.question("Digite seu nome:"),
    notas1: lerTeclado.questionInt("Digite sua nota1: "),
    notas2: lerTeclado.questionInt("Digite sua nota2: "),
    notas3: lerTeclado.questionInt("Digite sua nota3: ")
}
//c
let turma = [aluno1,aluno2,aluno3]
//d
console.table(turma)
//e Exiba o nome e a 1ª nota do 2º aluno
console.log(turma[1].nome,turma[0].notas1)
//f Exiba o nome e a 2ª nota do 3º aluno.
console.log(turma[2].nome,turma[1].notas2)
//g Exiba o nome e a 3ª nota do 1º aluno
console.log(turma[0].nome,turma[2].notas3)
*/

// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
/*
//a,b
const produto = {
    nome: lerTeclado.question("Digite o produto:"),
    categoria: lerTeclado.question("Digite sua categoria:"),
    preco: lerTeclado.questionInt("Digite o preco:"),
    quantidade: lerTeclado.questionInt("Digite a quantidade:"),
    dispoPVenda: lerTeclado.keyInYN("Esta disponivel para venda?")
}
//c
console.table(produto)
//d
console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.quantidade} un`);
*/

// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.
//a
let remedio = {
    nome1: lerTeclado.question("nome do remedio:"),
    preco: lerTeclado.questionInt("valor:"),
    emEstoque: lerTeclado.keyInYN("Disponivel no estoque?")
}
//b
let remedio2=[{
    nome: lerTeclado.question("nome do remedio:"),
    preco: lerTeclado.questionInt("valor:"),
    emEstoque: lerTeclado.keyInYN("Disponivel no estoque?")
}
    
]

let estoqueFarmacia=[]
estoqueFarmacia.push(remedio)
estoqueFarmacia.push(remedio2)


console.table(estoqueFarmacia)
//f Exiba somente o nome e se está em estoque o 1 medicamento.
console.log(estoqueFarmacia[0].nome,estoqueFarmacia[0].emEstoque)