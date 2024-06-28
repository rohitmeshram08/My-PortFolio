let number=6;
let result=1;

let fac= factorial(number);
console.log(fac)

function factorial( number){
    for (let index = 1; index <=number; index++)
    {
        result=result*index;    
    }
    return result;
}