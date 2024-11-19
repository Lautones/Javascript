function fibonacciInterativa(enesimo) {

    let sequenciaFibonacchi = [];

    if (enesimo === 1) {

        return [1];

    } else if (enesimo >= 2) {

        sequenciaFibonacchi = [1, 1];

    }

    for (let i = 2; i < enesimo; i++) {

        sequenciaFibonacchi.push(sequenciaFibonacchi[i - 1] + sequenciaFibonacchi[i - 2]);
    }

    return sequenciaFibonacchi;
}

let enesimo = 10;

if (enesimo > 0) {

    console.log(`Os ${enesimo} primeiros elementos da sequência de Fibonacci: ${fibonacciInterativa(enesimo)}`);

} else {

    console.log(`Intervalo de números válido`);
    
}
