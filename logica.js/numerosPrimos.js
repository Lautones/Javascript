function primosAnteriores(numero){
    
    if(numero<2){
        
        return [];
    } 
    
    let numerosPrimos=[];

    for(let i=numero-1; i>1; i--){

        let auxiliarPrimo=0;

        for(let j=2; j<i; j++){

            if(i % j == 0){
                auxiliarPrimo++;
                break;
            }  
        }

        if(auxiliarPrimo==0){
            numerosPrimos.push(i);
        }
    }

    return numerosPrimos.reverse();;
    
}

let numero = 103;

let primos = primosAnteriores(numero);


if(primos.length>0){

    console.log(`Os números primos que antecedem o número ${numero} são: ${primos}`);

}else{

    console.log(`Não existem números primos que antecedem o número ${numero}`);

}
