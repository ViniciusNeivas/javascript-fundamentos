// FizzBuzz
// Dívisivel por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e  5 => 'FizzBuzz'
// Se não for um numero => 'Não é um número'
// Se não for divível nem por 3 e 5 => Entrada

let resultado = fizzBuzz('go');
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Não é um número';
    }
    else if ((entrada % 3 ===0) && entrada % 5 ===0){
        return 'FizzBuzz';
    } else if (entrada % 3 === 0){
        return 'Fizz';
    } else if (entrada % 5 === 0){
        return 'Buzz';
    }else
    return entrada;
}
