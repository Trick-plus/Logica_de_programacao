import leia from "readline-sync"

// 5° ENTRADA
let temperaturaC = leia.questionFloat("Digite a temperatura em Celsius: ");
// PROCESSAMENTO
if (temperaturaC < -273.15) {
    console.log("A temperatura digitada é inválida. A temperatura mínima possível é -273.15°C.");
    process.exit(1); // Encerra o programa com um código de erro
}
if (temperaturaC > 1000000000) {
    console.log("A temperatura digitada é inválida. A temperatura máxima possível é 1000000000°C.");
    process.exit(1); // Encerra o programa com um código de erro
}
let temperaturaF = (temperaturaC * 1.8) + 32;    
let temperaturaK = temperaturaC + 273.15;
// SAIDA
console.log("A temperatura em Fahrenheit é: " + temperaturaF.toFixed(2));
console.log("A temperatura em Kelvin é: " + temperaturaK.toFixed(2)); 

// Declaração das variáveis
let corrida1, corrida2, corrida3, corrida4, corrida5;
let total, desconto, valorFinal;