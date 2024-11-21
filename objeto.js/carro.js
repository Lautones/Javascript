var carro = {
    preco: 10000,
    portas: 4,
    marca: 'Audi',

    conversao: function(moeda){


        switch (moeda){
            case 'real':
                this.preco *= 6;
                break;
            
            case 'dolar':
                this.preco*=1;
                break;

            case 'peso':
                this.preco*=1200000;
                break

        }

        return this.preco;
    }

}

let moeda = 'real';

console.log(`O preço do carro da marca ${carro.marca} em reais é ${carro.conversao(moeda)}`);