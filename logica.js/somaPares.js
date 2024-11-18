function somaPares(arrayNumeros, valorAlvo){

    let arrayAuxiliar = [];

    for(let i=0; i<arrayNumeros.length; i++){

        for(let j=i+1; j<arrayNumeros.length; j++){

            if(arrayNumeros[i] + arrayNumeros[j] == valorAlvo){

                arrayAuxiliar.push([arrayNumeros[i], arrayNumeros[j]]);            
            }

        }

    }

    return arrayAuxiliar;
    
}

let arrayNumeros = [10, 4, 3, 7, 5, -1, 8, -2, 4];
let valorAlvo = 8;

let paresArray = somaPares(arrayNumeros, valorAlvo);

console.log(paresArray);