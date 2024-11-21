var pessoa = {

   nome: 'Matheus',
   sobrenome: 'Lauton',
   idade: 23,
   profissao: 'Estudante',
   possuiFaculdade: true,

   nomeCompleto: function(){
      return `${this.nome} ${this.sobrenome}`;
   }
   
}


console.log(pessoa.nomeCompleto());