// 1) Soma de valores de 1 até INDICE

let INDICE = 13;
let SOMA = 0;

for (let K = 1; K <= INDICE; K++) {
    SOMA += K;
}

console.log(SOMA); //A soma será 91


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

const numero = 88; 
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}


// 3) Cálculo de faturamento diário

const fs = require('fs');


fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);
    calcularFaturamento(faturamentoMensal);
});

function calcularFaturamento(faturamentoMensal) {
    
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
    
    
    const soma = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = soma / diasComFaturamento.length;

    
    const menor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maior = Math.max(...diasComFaturamento.map(dia => dia.valor));

    
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

  
    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
}


//4) Percentual de faturamento por estado:

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual(faturamentoPorEstado) {
    const total = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);

    Object.entries(faturamentoPorEstado).forEach(([estado, valor]) => {
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    });
}

calcularPercentual(faturamentoPorEstado);
