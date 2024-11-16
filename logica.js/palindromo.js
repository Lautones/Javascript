function ePalindromo(palavra){

    let auxiliar = "";
    let tamanho = palavra.length;

    for(let i=0; i<tamanho; i++){

        auxiliar += palavra[tamanho-1 - i];

    }

    if(palavra == auxiliar){    
   
        return true;

    } else{

        return false;    
   
    }
   
}

let palavra = "radar";

let palavraPalindromo = ePalindromo(palavra);

if(palavraPalindromo){

    console.log(`A palavra ${palavra} é um palíndromo`);
    
} else{

    console.log(`A palavra ${palavra} não é um palíndromo`);
    
}