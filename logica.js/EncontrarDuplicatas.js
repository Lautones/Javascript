function encontraDuplicatas(arrayNumeros){

    let elementosDuplicados = [];
    let tamanho = arrayNumeros.length -1;

    for(let i=0; i<=tamanho; i++){
        

        for(let j=i+1; j<=tamanho; j++){

            if( arrayNumeros[i] == arrayNumeros[j]){
                elementosDuplicados.push(arrayNumeros[i]);
            
            }

        }     

    }

    return elementosDuplicados;

}

let arrayNumeros = [1, 5];

let elementosDuplicados = encontraDuplicatas(arrayNumeros);

if(elementosDuplicados.length>0){

    console.log(`Os numeros repetidos são: ${elementosDuplicados}.`);

} else{

    console.log(`Não existe elementos duplicados no array.`);
    
}
    
