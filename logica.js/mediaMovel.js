function mediaMovel(arrayNumero, valorN){

    let tamanho = arrayNumero.length - 1;
    let somatorioVetor = 0;

    if(valorN > tamanho){
        valorN = tamanho + 1;
    }

    for(let i=tamanho; i>tamanho-valorN; i--){

        somatorioVetor += arrayNumero[i];

    }

    return somatorioVetor;

}      

let arrayNumero = [1, 2, 3, 4, 5, 6];
let valorN = 7;

let somaUltimos = mediaMovel(arrayNumero, valorN);

console.log(somaUltimos);