function fatorial(numero){
    
    let resultado = 1;

    for(let i = numero; i>1; i--){
        resultado *=i;
    }

    return resultado;    
}


let numero = 5;
let resultado = fatorial(numero);

console.log(`${numero}!: ${resultado}`);