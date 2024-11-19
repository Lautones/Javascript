function cifraCesar(texto, numeroCifra){

    let textoAuxiliar = "";
    let codigoAsc;

    for(let i=0; i<texto.length; i++){

        codigoAsc = texto.charCodeAt(i) + numeroCifra;

        textoAuxiliar += String.fromCharCode(codigoAsc);

    }

    return textoAuxiliar;

}

let texto = "Me contrata, GFT!";
let numeroCifra  = 1;
let textoCodificado = cifraCesar(texto, numeroCifra);

console.log(textoCodificado);