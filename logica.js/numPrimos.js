
function ePrimo(numero){
    if(numero % 2 == 0){
        return false;
    }

    let i;

    for(i=3; i<numero; i++){

        if(numero % i == 0){
            return false;
        }
    }

    if(numero == i){
        return true;
    }

}

let numero = 103;
let primo = ePrimo(numero);

if(primo){
    console.log(`O numero ${numero} é primo`);
}else{
    console.log(`O numero ${numero} naõ é primo`);
}