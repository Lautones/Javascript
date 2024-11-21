class Mago{

    constructor(nome, idade, escolaMagia, nivelPoder){
        this.nome = nome;
        this.idade = idade;
        this.escolaMagia = escolaMagia;
        this.nivelPoder = nivelPoder;
    
    }

    lancarMagia(){

        let magia;

        switch (this.escolaMagia){
            case 'fogo':
                magia = (this.nivelPoder > 5) ? "Meteoro divino" : "Bola de fogo";
                break;
            
            case 'agua':
                magia = (this.nivelPoder > 5) ? "Benção do dilúvio" : "chuva amena";
                break;

            case 'terra':
                magia = (this.nivelPoder > 5) ? "Deslocamento continental" : "chuva de areia";
                break;
            
            case 'ar':
                magia = (this.nivelPoder > 5) ? "Sopro divino" : "vento do leste";
                break;

            case 'sombras':
                magia = (this.nivelPoder >2) ? "Garra do submundo" : "Sombras que sussurram";
                break;

        }

        console.log(`${this.nome} atacou com ${magia}`);

    }

}

let magoDoSubmundo= new Mago('Karl', 5300, 'sombras', 99999999);

magoDoSubmundo.lancarMagia();