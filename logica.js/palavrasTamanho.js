function palavrasTamanho(arrayPalavras){

	arrayPalavras.sort((a, b) => a.length - b.length);

    let arrayAuxiliar = [];
	
    for(let i=0; i<arrayPalavras.length; i++){

        for(let j=i+1; j<arrayPalavras.length; j++){
            
            if(arrayPalavras[i].length == arrayPalavras[j].length){

                arrayAuxiliar.push([arrayPalavras[i], arrayPalavras[j]]);

            }        
        
        }

    }

    return arrayAuxiliar;

}

let arrayPalavras = ['banana', 'cadeira', 'mamadeira', 'bambu', 'panda', 'cachoeira'];

let subArray = palavrasTamanho(arrayPalavras);

console.log(`${subArray}`);