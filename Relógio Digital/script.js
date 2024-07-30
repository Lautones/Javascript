function adicionaZero(numero){
    if(numero<10){
        numero = '0'+numero;
    }
    return numero;
}

function segundo(){
    var display= document.querySelector(".display");

    var agora = new Date();
    var horario = adicionaZero(agora.getHours())+":"+ adicionaZero(agora.getMinutes())+":"+adicionaZero(agora.getSeconds());

    display.textContent = horario;    
}

segundo();
setInterval(segundo, 1000);