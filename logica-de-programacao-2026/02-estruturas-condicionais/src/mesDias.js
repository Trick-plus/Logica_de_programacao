import leia from 'readline-sync'

const mes = leia.questionInt('Digite o número do mês (1-12): ')

if (mes < 1 || mes > 12) {
  console.log('Mês inválido. Informe um número entre 1 e 12.')
  process.exit(1)
}

let dias

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
  dias = 31
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  dias = 30
} else {
  const ano = leia.questionInt('Digite o ano (por exemplo 2026): ')
  const bissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0))
  dias = bissexto ? 29 : 28
}

console.log(`O mês ${mes} tem ${dias} dias.`)
