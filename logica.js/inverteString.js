
function invertePalavra(palavra){

    let tamanho = palavra.length - 1;
    let palavraInvertida="";

    for(let i=0; i<= tamanho; i++){
        palavraInvertida += palavra[tamanho - i];  
    }

    return palavraInvertida;

}

let palavra = 'TFG ,atartnoc em';

let palavraInvertida = invertePalavra(palavra);

console.log(palavraInvertida);


