










//5) Inversão de string sem usar funções prontas:

function inverterString(str) {
    let invertida = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }

    return invertida;
}

const stringOriginal = "Ester";
console.log(inverterString(stringOriginal)); // Saída: "retsE"
