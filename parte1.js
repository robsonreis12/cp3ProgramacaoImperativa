/*
Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno. *** nome, faltas, notas


// Micro desafio - Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
// em 1
*/


let Aluno ={
  addAluno:
  function Aluno(nome, Maisfaltas, notas, _calcMedia){
    this.nome = nome;
    this.calcfaltas = Maisfaltas,
    this.notas = notas;
    this.calcMedia = function(){
      let soma = 0;
      for (let i = 0; i < this.notas.length; i++){
        soma += this.notas[i]
      }
      const media = soma/this.notas.length;
      return media;
    }
    this.faltas = function (){
    let addFalta = this.calcfaltas + 1;
    return addFalta;
    }
  }
}

const aluno1 = new Aluno.addAluno ('Luciana', 4, [10, 9, 8, 9]);
const aluno2 = new Aluno.addAluno('Issao', 2, [9, 8, 7, 8]);
const aluno3 = new Aluno.addAluno('Breno', 5, [8, 5, 9, 7]);
const aluno4 = new Aluno.addAluno  ('Heuler', 11, [4, 5, 6, 5]);
const aluno5 = new Aluno.addAluno ('Arthur', 4, [9, 10, 8, 10]);

Aluno.listaAluno = [
  aluno1,
  aluno2,
  aluno3,
  aluno4,
  aluno5
];

module.exports = Aluno;

//console.log('A média do aluno ' + aluno1.nome + ' é: ' + aluno1.calcMedia());

// console.log( aluno5.faltas());

