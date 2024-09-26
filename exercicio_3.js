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