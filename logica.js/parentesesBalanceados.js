function parantesesBalanceados(parenteses){

    let contadorAbre = 0;
    let contadorFecha = 0;

    for(let i = 0; i<parenteses.length; i++){

        if(parenteses[i] =='('){
            contadorAbre++;
        }

        if(parenteses[i] ==')'){
            contadorFecha++;
        }
    }

    return contadorAbre == contadorFecha;

}

let parenteses = "(((())))";

let balanceamento = parantesesBalanceados(parenteses);

if(balanceamento){

    console.log(`Os parênteses estão balanceados`);
    
} else{

    console.log(`Os parênteses não estão balanceados`);

}