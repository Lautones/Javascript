var cachorro = {
    raca: 'labrador',
    nome: 'ansiedade',
    cor: 'preto',
    idade: 10,

    latir(homemPresente){
        if(homemPresente){
            return 'au-au-au';
        }
    }

}

let homemPresente = true;

console.log(`O cachorro ${cachorro.nome} da raça ${cachorro.raca} na cor ${cachorro.cor} com ${cachorro.idade} faz ${cachorro.latir(homemPresente)} sempre que um desconhecido está presente`);