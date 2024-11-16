function fizzBuzz(){

    let arrayFizzBuzz = [];

    for(let i=1; i<=100; i++){

        
        if(i%3 == 0 && i%5 == 0){
                
            arrayFizzBuzz[i-1] = "fizzbuzz";
        
        } else if (i%3 == 0){

            arrayFizzBuzz[i-1] = "fizz";

        } else if (i%5 == 0){

            arrayFizzBuzz[i-1] = "buzz";

        } else{

            arrayFizzBuzz[i-1] = i;

        }


    }

    return arrayFizzBuzz;

}

fizzBuzz();