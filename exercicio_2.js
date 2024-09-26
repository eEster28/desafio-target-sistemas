// 2) Verificação de número na sequência de Fibonacci

function isFibonacci(num) {
    let a = 0, b = 1, next;

    if (num === a || num === b) return true;

    for (next = a + b; next <= num; next = a + b) {
        if (next === num) return true;
        a = b;
        b = next;
    }

    return false;
}

const numero = 19; 
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
