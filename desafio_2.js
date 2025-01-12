function verificaFibonacci(numero) {
    let a = 0, b = 1;

    if (numero === a || numero === b) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp; 
    }

    if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}
const numeroInformado = 24; 
console.log(verificaFibonacci(numeroInformado));
