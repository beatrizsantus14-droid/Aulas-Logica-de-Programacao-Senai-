
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

const nome = "Beatriz"
let idade = 21
const hobby = "cozinhar"
let frase = `Meu nome é ${nome}, tenho ${idade} anos, meu hobby é ${hobby}`
console.log (frase)

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
const cidade = "jaragua do Sul"
let temperatura = 25
let frase02 = `Hoje em ${cidade} está fazendo ${temperatura}°C, perfeito para assistir um filme`


console.log(frase02)

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let trabalho =  "Fachini"
let quantidade = 30
let idade01 = true
let valor
let coracao = null
console.log (`a variavel de trabalho consta o valor de ${trabalho} e o tipo dela é  ${typeof trabalho}`)
console.log (`a variavel de quantidade conta o valor ${quantidade} é e o tipo dela é ${typeof quantidade}`)
console.log (`a variavel de idade01 consta o valor ${idade01} e o tipo dela é ${typeof idade01}`)
console.log (`nesta variavel não tem defifinição e o tipo dela é ${typeof valor}`)
console.log (`a variavel de coracao é ${coracao} e o tipo dela é ${typeof coracao}`)




// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

const personagem = "Cadu"
let idadecadu = 18
const cidadecadu = "Nova Iorque"
let missão = "ser o melhor cantor"

console.log (`${personagem} tem ${idadecadu}, e ama cantar, ${personagem}, tem o sonho de ${missão}, ele vai dar uma volta ao mundo para seguir o seu sonho... Depois de dois anos ${personagem} consegue realizar seu sonho de ${missão} na ${cidadecadu}`)



// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

const meunome = "Beatriz"
let objetivo =  "Trocar de carreira"

console.log(`Meu nome é ${meunome}, e vou estudar muito para ${objetivo} `)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:


console.log("======================================")
console.log("         SISTEMA DO USUARIO           ")
console.log("======================================")
console.log("1 - Ver Perfil")
console.log("2 - Editar Perfil")
console.log("3 - Configuraçãoes")
console.log("4 - Notificações ")
console.log("5 - Relatórios")
console.log("6 - Ajuda")
console.log("7 - Sobre o Sistema")
console.log("8 - Sair")
console.log("======================================")
console.log("  Digite o número da opção desejada")
console.log("=======================================")
