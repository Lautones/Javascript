class criatura{
    constructor(nome, forca, resistencia, raca){
        this. nome = nome;
        this.forca = forca;
        this.resistencia = resistencia;
        this.raca = raca;        
    }

    defender(){
        let defesa;

        switch(this.raca){
            case 'humano':
                defesa = 'escudo de madeira';
                break;
            
            case 'elfo':
                defesa = 'agilidade da benção da Lua';
                break;
            
            case 'dragão':
                defesa = 'escamas ancestrais';
                break;
            
        }

        console.log(`O ${this.raca} se defendeu com ${defesa}`);

    }

}

let humano = new criatura("Lauton", 10, 2, "humano");

humano.defender();