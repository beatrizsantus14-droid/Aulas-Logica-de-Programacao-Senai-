// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
//A
let aluno = {
nome:"Beatriz",
idade:21,
curso:"Desenvolvimento de Sistemas"
}

//B
console.log(aluno.nome);


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
//A
aluno.endereco={
rua:"Ernesto Bruns",
numero:121,
bairro:"Ilha da Figueira",
cidade:"Jaragua do Sul"
}

//B
console.log(aluno.endereco.cidade);


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
//A
aluno.habilidades=["Preparação", "Atenciosa", "Cuidadosa"]
//B
console.log(aluno.habilidades[0])


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
//A
aluno.notas= [7,9,8,6,8.5]
//B
console.log(aluno.nome,aluno.notas);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
//A
const responsavel1={
    nome:"Antonio",
    parentesco:"Tio"
}
aluno.responsavel=responsavel1
//B
console.log(aluno.responsavel.nome);
//C
aluno.responsavel.nome="Carlos"
console.log(aluno.responsavel.nome)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
//A
let listaAlunos=[aluno]

//B
let novoAluno={
    nome:"jose",
    idade:15
}
let novoAluno2={
    nome:"Marco",
    idade:16
}
//C
listaAlunos.push(novoAluno)
listaAlunos.push(novoAluno2)
console.log(listaAlunos);

//D
console.log(novoAluno2.nome)


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
//A
let listaDeAlunos=[
        {
        aluno1:"Ana",
        idade:17,
        notas:[7,8.10]
    },

    {
        aluno2:"Julia",
        idade:17,
        notas:[8,10,6]
    },

    {
        aluno3:"Theo",
        idade:16,
        notas: [9,9,10]
    }
]



console.log(listaDeAlunos);

//C
console.log(listaDeAlunos[0].nome,listaDeAlunos[0].nota,listaDeAlunos[1].nome,listaDeAlunos[1].nota,listaDeAlunos[2].nome,listaDeAlunos[2].nota)
