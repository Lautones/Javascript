function anagrama(fisrtWord, secondWord){
    if (fisrtWord.lenght !== secondWord.lenght){
        return false;
    }

    fisrtWord = fisrtWord.split('').sort().join('');
    secondWord = secondWord.split('').sort().join('');
    
    return fisrtWord == secondWord;
    
}

let firstWord = "emada";
let secondWord = "daama";

if(anagrama(firstWord, secondWord)){
    console.log("São anagramas!");
} else{
    console.log("Não são anagramas!");
}