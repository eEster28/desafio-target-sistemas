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