function segundoMaior(arrayNumeros){

    for(let i=0; i<arrayNumeros.length; i++){

        let contador = [];

        for(let j=0; j<arrayNumeros.length; j++){
            
            if(arrayNumeros[i] > arrayNumeros[j]){
            
                contador++;

            }

        }

        if(contador==(arrayNumeros.length - 2)){

            return arrayNumeros[i];

        }

    }

}

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let segundo = segundoMaior(arrayNumeros);

console.log(`${segundo} é o segundo maior valor do array`);