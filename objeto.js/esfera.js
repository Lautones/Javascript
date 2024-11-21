var esfera = {

    perimetro: function(raio){
       return 2*Math.PI*raio;
    },
 
    volume: function(raio){
       return 4/3*(Math.PI*raio**3);
    },
 
    area: function(raio){
       return 4*Math.PI*raio**2;
    } 
 
}
 
console.log(`O perímetro da esfera é: ${esfera.perimetro(2)} m \nA área da esfera é ${esfera.area(2)} m2\nO volume da esfera é: ${esfera.volume(2)} m3`);
 