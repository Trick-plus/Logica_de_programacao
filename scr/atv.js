import leia from "readline-sync";

/*
// 1°ENTRADA 
let numero1 = leia.question("Digite o numero: ");
// PROCESSAMENTO
let resultado = numero1 - 1;
// SAIDA
console.log("O antecessor do numero é: " + resultado); 

// 2° ENTRADA
let altura = leia.questionFloat("Digite a altura: ");
let largura = leia.questionFloat("Digite a largura: ");
// PROCESSAMENTO
let area = altura * largura;
// SAIDA
console.log("A área do retângulo é: " + area.toFixed(2));

// 3° ENTRADA
let anos = leia.questionInt("Digite a idade em anos: ");
let meses = leia.questionInt("Digite a idade em meses: ");
let dias = leia.questionInt("Digite a idade em dias: ");
// PROCESSAMENTO
let idadeEmDias = (anos * 365) + (meses * 30) + dias;
// SAIDA 
console.log("A idade em dias é: " + idadeEmDias); 

// 4° ENTRADA
let eleitores = leia.questionInt("Digite o numero de leitores: ");
let votosBrancos = leia.questionInt("Digite o numero de votos brancos: ");
let votosValidos = leia.questionInt("Digite o numero de votos validos: ");
// PROCESSAMENTO
let valueBrancos = (votosBrancos / eleitores) * 100;
let valueValidos = (votosValidos / eleitores) * 100;
// SAIDA
console.log("O percentual de votos brancos é: " + valueBrancos.toFixed(2) + "%");
console.log("O percentual de votos válidos é: " + valueValidos.toFixed(2) + "%");


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

//6° Entrada dos valores
corrida1 = parseFloat(prompt("Digite o valor da 1ª corrida:"));
corrida2 = parseFloat(prompt("Digite o valor da 2ª corrida:"));
corrida3 = parseFloat(prompt("Digite o valor da 3ª corrida:"));
corrida4 = parseFloat(prompt("Digite o valor da 4ª corrida:"));
corrida5 = parseFloat(prompt("Digite o valor da 5ª corrida:"));
// Soma total
total = corrida1 + corrida2 + corrida3 + corrida4 + corrida5;
// Desconto de 25%
desconto = total * 0.25;
// Valor final do motorista
valorFinal = total - desconto
// Resultado
console.log("Total arrecadado: R$ " + total.toFixed(2));
console.log("Desconto do aplicativo: R$ " + desconto.toFixed(2));
console.log("Valor real do motorista: R$ " + valorFinal.toFixed(2));

// 7° Entrada
let valorCompra = leia.questionInt("Digite o valor do produto: ");
// Processamento
let valorVenda;
if (valorCompra < 20) {
    valorVenda = valorCompra + (valorCompra * 0.45);
} else {
    valorVenda = valorCompra + (valorCompra no* 0.30);
}
// Saída
console.log("Valor de venda: R$ " + valorVenda.toFixed(2));

// 8° Entrada
let numero = leia.questionInt("Digite um número: ");
// Processamento
let dobro = numero * 2;
let triplo = numero * 3;
// Saída
console.log("Dobro: " + dobro);
console.log("Triplo: " + triplo);

// 9° Entrada
let metros = leia.questionInt("Digite o valor em metros: ");
// Processamento
let centimetros = metros * 100;
let milimetros = metros * 1000;
// Saída
console.log("Centímetros: " + centimetros);
console.log("Milímetros: " + milimetros);

// 10° Entrada
let nota1 = leia.questionInt("Digite a primeira nota: ");
let nota2 = leia.questionInt("Digite a segunda nota: ");
let nota3 = leia.questionInt("Digite a terceira nota: ");
// Processamento
let media = (nota1 + nota2 + nota3) / 3;
let resultado = media >= 7 ? "Aprovado" : "Reprovado";
// Saída
console.log("Média: " + media.toFixed(2) + " ele está " + resultado);

// 12° Entrada
let salario = leia.questionInt("Digite o salário: ");
// Processamento
let aumento = salario * 0.15;
let novoSalario = salario + aumento;
// Saída
console.log("Novo salário: R$ " + novoSalario.toFixed(2));

// 13° Entrada
let valorProduto = leia.questionInt("Digite o valor do produto: ");
// Processamento
let disconto = valorProduto * 0.10;
let valorfinal = valorProduto - disconto;
// Saída
console.log("Desconto: R$ " + disconto.toFixed(2));
console.log("Valor final: R$ " + valorfinal.toFixed(2));

// 14° Entrada
let horas = leia.questionInt("Digite a quantidade de horas: ");
// Processamento
let minutos = horas * 60;
let segundos = horas * 3600;
// Saída
console.log("Minutos: " + minutos);
console.log("Segundos: " + segundos);

// 15° Entrada
let distancia = leia.questionfloat("Digite a distância percorrida em km: ");
let litros = leia.questionfloat("Digite a quantidade de litros gastos: ");
// Processamento
let consumo = distancia / litros;
// Saída
console.log("Consumo medio: " + consumo.toFixed(2) + " km/l");
*/

let numeroaleatorio = (Math.random() * 10000000000000000000) + 1;

console.log("Bem-vindo ao jogo de adivinhação! Tente adivinhar o número entre 1 e 10000000000000000000.");

while (true) {

    let palpite = leia.questionInt("Digite seu palpite: ");

    if (palpite === numeroaleatorio) {
        console.log("Parabéns! Você acertou o número!" + " O número era: " + numeroaleatorio);
        console.log("Número de tentativas: " + tentativas);
        break;
    } else {let dica = palpite < numeroaleatorio ? "O número é maior." : "O número é menor.";
        console.log(dica);
         var tentativas =(tentativas || 0) + 1
    }         
}

