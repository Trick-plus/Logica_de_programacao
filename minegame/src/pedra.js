import leia from "readline-sync"



var opc = ["pedra", "papel", "tesoura"];
var pc = Math.floor(Math.random() * 3);
console.log("Escolha: 0 - Pedra, 1 - Papel, 2 - Tesoura");
var escolhaUsuario = leia.keyInSelect(opc, "Escolha sua jogada: ");

if (escolhaUsuario === pc) {
    console.log("Empate! Ambos escolheram " + opc[escolhaUsuario]);
} else if ((escolhaUsuario === 0 && pc === 2) || (escolhaUsuario === 1 && pc === 0) || (escolhaUsuario === 2 && pc === 1)) {
    console.log("Você venceu! " + opc[escolhaUsuario] + " vence " + opc[pc]);
} else {
    console.log("Você perdeu! " + opc[pc] + " vence " + opc[escolhaUsuario]);
}










