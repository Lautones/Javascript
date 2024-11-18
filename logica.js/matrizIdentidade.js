function matrizIdentidade(numero){

    let arrayIdentidade = [];

    for(let i=0; i<numero; i++){
        
        let linha = [];

        for(let j=0; j<numero; j++){
        
            if(i==j){

                linha.push(1);

            }else{

                linha.push(0);

            }

        }

        arrayIdentidade.push(linha);

    }

    return arrayIdentidade;

}

let numero = 5;
let arrayIdentidade = matrizIdentidade(numero);

console.log(arrayIdentidade);