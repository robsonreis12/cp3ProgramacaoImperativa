// Micro desafio - Passo 3
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
// curso (string), nota de aprovação (number), faltas máximas (number)

// Micro desafio - Passo 4
// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
// chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
// propriedade lista de estudantes do objeto curso

// Micro desafio - Passo 5
// Crie um método para o objeto curso que receba um aluno (como parâmetro) e
// retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
// aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
// faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
// aprovação.

// Micro desafio - Passo 6
// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
// array de booleanos com os resultados se os alunos aprovaram ou não.

// Micro desafio - Passo 7
// Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
// que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
// lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
// métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).


let alunobase = require("./parte1");

const curso =  {
  materiaCurso: "English",
  faltaMax: 7,
  notaApr: 8,
  
  listaAdd: alunobase.listaAluno,
  listaClientes: function () {
    novoAluno = new alunobase.addAluno('Jonathan', 10, [7, 7, 8, 9], this.calcMedia, this.faltas)
    this.listaAdd.push (novoAluno)
  }, 

  aprovacao: function(Aluno){
    if(alunobase.listaAluno[Aluno].calcMedia() >= curso.notaApr && alunobase.listaAluno[Aluno].calcfaltas < curso.faltaMax) {
        console.log("Aluno Aprovado " + true);
    } else if (alunobase.listaAluno[Aluno].calcMedia() >= (curso.notaApr*1.1) && alunobase.listaAluno[Aluno].calcfaltas == curso.faltaMax) {
        console.log ("Aluno Aprovado " + true);
    } else { 
        console.log ("Aluno Reprovado " + false);} 
  },
  
};
 


curso.aprovacao(0)







//console.log(curso);

// Micro desafio - Passo 6
// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
// array de booleanos com os resultados se os alunos aprovaram ou não









// Micro desafio - Passo 7
// Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
// que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
// lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
// métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).