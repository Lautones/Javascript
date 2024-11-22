class Profissional{
    constructor(nome, idade, curso, empresaTrabalho){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.empresaTrabalho = empresaTrabalho;
    }

    reagir(){
        let reacao;

        switch(this.curso){
            case 'Análise e Desenvolvimento de Sistemas':
                reacao = (this.empresaTrabalho === 'GFT') ? 'Eu trabalho numa empresa que valorizo profundamente e que também reconhece o meu esforço.' : 'Dor';
                break;

            case 'Recursos Humanos':
                reacao = (this.empresaTrabalho === 'GFT') ? 'Bora contratar o Matheus Lauton, ele é muito esforçado' : 'Vamos deixar o Matheus para a GFT, lá é o lugar dele';
                break;
        }

        console.log(reacao);

    }

}

let estudante = new Profissional('Matheus Lauton', 23, 'Análise e Desenvolvimento de Sistemas', 'Prefeitura Municipal de Sorocaba');
estudante.reagir();

let rh = new Profissional('Rafa', 28, 'Recursos Humanos', 'DIO');
rh.reagir();