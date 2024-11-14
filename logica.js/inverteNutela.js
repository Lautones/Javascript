
function invertePalavra(palavra){

    let palavraInvertida = palavra.split('').reverse().join('');

    return palavraInvertida;
}

let palavra = 'TFG ,atartnoc em';

let palavraInvertida = invertePalavra(palavra);

console.log(palavraInvertida);