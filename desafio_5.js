// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
    let invertida = "";   
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const entrada = "Quero minha vaga!";
const resultado = inverterString(entrada);

console.log(`String original: "${entrada}"`);
console.log(`String invertida: "${resultado}"`);