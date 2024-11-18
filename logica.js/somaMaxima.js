function somaMaxima(numeros){

    let auxiliar = [0];

    for(let i=0; i<numeros.length; i++){

        for(let j=i+1; j<numeros.length; j++){

            if((numeros[i] + numeros[j]) > auxiliar[0]){

                auxiliar = [ numeros[i],  numeros[j]];

            }

        }

    }

    return auxiliar;

}

let numeros = [1, 2, 3, 4, 5, 6, 7];
let subArray = somaMaxima(numeros);
let valMaximo = subArray[0] + subArray[1];

console.log(`Os elementos que tem a soma máxima (${valMaximo}) são ${subArray}`);