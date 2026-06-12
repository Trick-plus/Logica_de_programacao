import leia, { keyInSelect } from 'readline-sync';

/*// ==========================
// 1° EXERCÍCIO - SENHA
// ==========================
let senha = leia.question("Digite a senha: ");

if (senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}


// ==========================
// 2° EXERCÍCIO - PAR OU ÍMPAR
// ==========================
let numero = leia.questionInt("Digite um numero: ");

if (numero % 2 === 0) {
    console.log("Numero par");
} else {
    console.log("Numero impar");
}


// ==========================
// 3° EXERCÍCIO - RODÍZIO
// ==========================
let finalPlaca = leia.questionInt("Digite o ultimo numero da placa: ");

if (finalPlaca === 0 || finalPlaca === 1) {
    console.log("Nao pode rodar na Segunda-feira");
} else if (finalPlaca === 2 || finalPlaca === 3) {
    console.log("Nao pode rodar na Terca-feira");
} else if (finalPlaca === 4 || finalPlaca === 5) {
    console.log("Nao pode rodar na Quarta-feira");
} else if (finalPlaca === 6 || finalPlaca === 7) {
    console.log("Nao pode rodar na Quinta-feira");
} else if (finalPlaca === 8 || finalPlaca === 9) {
    console.log("Nao pode rodar na Sexta-feira");
} else {
    console.log("Numero invalido");
}


// ==========================
// 4° EXERCÍCIO - MAÇÃS
// ==========================
let quantidadeMacas = leia.questionInt("Quantidade de macas: ");

let totalMacas;

if (quantidadeMacas < 12) {
    totalMacas = quantidadeMacas * 0.30;
} else {
    totalMacas = quantidadeMacas * 0.25;
}

console.log("Total da compra: R$ " + totalMacas.toFixed(2));


// ==========================
// 5° EXERCÍCIO - CLIENTES
// ==========================
let nome1 = leia.question("Nome do cliente 1: ");
let valor1 = Number(leia.question("Valor da compra 1: "));

let nome2 = leia.question("Nome do cliente 2: ");
let valor2 = Number(leia.question("Valor da compra 2: "));

let totalClientes = valor1 + valor2;
let media = totalClientes / 2;

console.log("Total pago: R$ " + totalClientes.toFixed(2));
console.log("Media das compras: R$ " + media.toFixed(2));

if (valor1 > 20) {
    console.log(nome1 + " comprou mais de R$20");
}

if (valor2 > 20) {
    console.log(nome2 + " comprou mais de R$20");
}


// ==========================
// 6° EXERCÍCIO - COFRINHO
// ==========================
let produto = Number(leia.question("Valor do produto: "));

let moeda1 = leia.questionInt("Quantidade de moedas de R$1,00: ");
let moeda50 = leia.questionInt("Quantidade de moedas de R$0,50: ");
let moeda25 = leia.questionInt("Quantidade de moedas de R$0,25: ");
let moeda10 = leia.questionInt("Quantidade de moedas de R$0,10: ");
let moeda5 = leia.questionInt("Quantidade de moedas de R$0,05: ");

let totalCofrinho =
    (moeda1 * 1) +
    (moeda50 * 0.50) +
    (moeda25 * 0.25) +
    (moeda10 * 0.10) +
    (moeda5 * 0.05);

if (totalCofrinho >= produto) {
    console.log("Dinheiro suficiente para comprar o produto");
} else {
    console.log("Dinheiro insuficiente");
}


// ==========================
// 7° EXERCÍCIO - EMPRÉSTIMO
// ==========================
let salario = Number(leia.question("Digite o salario: "));
let emprestimo = Number(leia.question("Digite o valor do emprestimo: "));
let parcelas = leia.questionInt("Digite o numero de parcelas: ");

let prestacao = emprestimo / parcelas;

if (prestacao <= salario * 0.30) {
    console.log("Emprestimo aprovado");
} else {
    console.log("Emprestimo negado");
}


// ==========================
// 8° EXERCÍCIO - DIAS DO MÊS
// ==========================
let mes = leia.questionInt("Digite o numero do mes: ");

if (mes === 2) {
    console.log("28 ou 29 dias");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("30 dias");
} else if (mes >= 1 && mes <= 12) {
    console.log("31 dias");
} else {
    console.log("Mes invalido");
}


// ==========================
// 9° EXERCÍCIO - DEPENDENTES
// ==========================
let funcionario = leia.question("Nome do funcionario: ");
let salarioBase = Number(leia.question("Salario fixo: "));
let dependentes = leia.questionInt("Quantidade de dependentes: ");

let percentual = 0;

if (dependentes === 0) {
    percentual = 0.02;
} else if (dependentes === 1) {
    percentual = 0.05;
} else if (dependentes === 2) {
    percentual = 0.07;
} else if (dependentes === 3) {
    percentual = 0.10;
} else if (dependentes === 4) {
    percentual = 0.15;
}

let salarioFinal = salarioBase + (salarioBase * percentual);

console.log("Funcionario: " + funcionario);
console.log("Salario final: R$ " + salarioFinal.toFixed(2));


// ==========================
// 10° EXERCÍCIO - DOAÇÃO
// ==========================
let opcao = keyInSelect(['R$10' , 'R$25' , 'R$50' , 'Outro valor'], 'Quanto deseja doar?')

let doacao;

if (opcao === 0) {
    console.log('Obrigado pela doação de R$10');
} else if (opcao === 1) {
    console.log('Obrigado pela doação de R$25');
} else if (opcao === 2) {
    console.log('Obrigado pela doação de R$50');
} else {
    doacao = leia.questionInt("Digite o valor da doacao: ");
}


// ==========================
// 11° EXERCÍCIO - FUTEBOL
// ==========================
let A = leia.questionInt("Gols do Time A: ");
let B = leia.questionInt("Gols do Time B: ");

let diferenca = Math.absA - B);

if (diferenca === 0) {
    console.log("EMPATE");
} else if (diferenca >= 1 && diferenca <= 3) {
    console.log("PARTIDA NORMAL");
} else {
    console.log("GOLEADA");
}


// ==========================
// 12° EXERCÍCIO - VIAGEM
// ==========================
let idade = leia.questionInt("Digite sua idade: ");

if (idade >= 18) {
    let nome = leia.question("Digite seu nome completo: ");
    console.log("Cadastro realizado para " + nome);
} else {
    let permissao = leia.question("Possui permissao dos pais? (S/N): ");

    if (permissao === "S"||"s"||"sim"||"Sim"||"SIM") {
        let nome = leia.question("Digite seu nome completo: ");
        console.log("Cadastro realizado para " + nome);
    } else {
        console.log("Cadastro nao autorizado");
    }
}*/









