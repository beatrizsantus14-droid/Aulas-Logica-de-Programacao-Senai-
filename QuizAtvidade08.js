// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
let lerTeclado = require('readline-sync')
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador={
    nome: lerTeclado.question("Digite seu nome: "),
    pontos: null
}

console.log(`======BOAS VINDAS AO QUIZ JOGADOR:${jogador.nome}======`)

console.log("Quanto filmes tem lancado a saga THE AVENGERS?")
console.log("1 cinco, 2 sete, 3 quatro, 4 nove")

let resposta1= lerTeclado.questionInt("Digite sua resposta: ")

switch(resposta1){
    case 1:
        jogador.pontos+=1
        console.log("Correto!")
        break;
    case 2:
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 1.")
        break;
    default:{
        console.log( "Opção inválida, nenhum ponto atribuído.")
    }
}

console.log("Quem é o lider mais conhecidos dos Vingadores?")
console.log("1 Thor, 2 dCapitao America, 3 Homem Aranha, 4 Pantera Negra")

let resposta2= lerTeclado.questionInt("Digite sua resposta: ")

switch(resposta2){
    case 2:
        jogador.pontos+=1
        console.log("Correto!")
        break;
    case 1:
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 2.")
        break;
    default:{
        console.log( "Opção inválida, nenhum ponto atribuído.")
    }
}
console.log("Qual o nome do martelo do Thor?")
console.log("1 Stormblade, 2 Mjolnir, 3 Asgard, 4 Thunderax")

let resposta3= lerTeclado.questionInt("Digite sua resposta: ")

switch(resposta3){
    case 2:
        jogador.pontos+=1
        console.log("Correto!")
        break;
    case 1:
    case 3:
    case 4:
        console.log("A resposta certa era a opção 2.")
        break;
    default:{
        console.log( "Opção inválida, nenhum ponto atribuído.")
    }
}

console.log("Quem é o Hulk quando nao se transforma?")
console.log("1 Tony Stark, 2 Clint Barton, 3 bruce Banner, 4 Scott Lang")

let resposta4= lerTeclado.questionInt("Digite sua resposta: ")

switch(resposta4){
    case 3:
        jogador.pontos+=1
        console.log("Correto!")
        break;
    case 1:
    case 2:
    case 4:
        console.log("Errado! A resposta certa era a opção 3.")
        break;
    default:{
        console.log( "Opção inválida, nenhum ponto atribuído.")
    }
}

console.log("Qual Vingador usa um traje tecnologico e se chama Tony?")
console.log("1 Doutor Estranho, 2 Maquina de combate, 3 homem de Ferro, 4 Visao")

let resposta5= lerTeclado.questionInt("Digite sua resposta: ")

switch(resposta5){
    case 3:
        jogador.pontos+=1
        console.log("Correto!")
        break;
    case 1:
    case 2:
    case 4:
        console.log("Errado! A resposta certa era a opção 3.")
        break;
    default:{
        console.log( "Opção inválida, nenhum ponto atribuído.")
    }
}

if(jogador.pontos===5){
    console.log("Perfeito! Você é um expert!")
}else if(jogador.pontos===4){
    console.log("Muito bem! Quase lá!")
}else if(jogador.pontos===3){
    console.log("Bom trabalho, mas pode melhorar.")
}else if(jogador.pontos===1|2){
    console.log("Nheee!")
}else(jogador.pontos===0)
{
    console.log("VIX, tente novamente!")
}
console.table(jogador)
