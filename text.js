import * as funcoes from "./funcoes.js";

console.log(`facaum escolha`)
let escolha=number(ler());

for (let cont = 1; cont != 0; cont++){

funcoes.iniciarBatalhaZumbi()
funcoes.apresentarInimigo()
funcoes.batalhaComZumbi(escolha)
funcoes.obterEscolhaBatalha()
funcoes.realizarAtaque()
funcoes.obterEscolhaBatalha()
funcoes.obterEscolhaItem()
funcoes.aplicarEscolhaItem()

}