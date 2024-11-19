function eliminarRepetidos(arrayTeste){

    //new Set(arrayTeste) <- resumiria toda a função;

    for(let i=0; i<arrayTeste.length; i++){

        for(let j=i+1; j<arrayTeste.length; j++){

            if(arrayTeste[i] == arrayTeste[j]){
                arrayTeste.splice(j,1);
                j--;
            }
        
        }

    }

    return arrayTeste;

}

let arrayTeste = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

let arrayFiltrado = eliminarRepetidos(arrayTeste);

console.log(arrayFiltrado);