import prompt from "prompt-sync"
import * as funcoes from "./funcoes.js";
let ler = prompt();

let steve={
    vida: 75,
    armadura: 0,
    arma: 0,
    dano: 0,
    itens: [] 

}

let zumbi = {
    vida: 125,
    dano: 0
}
    //inicio do Jogo
for(let cont = 1; cont != 0; cont ++){
console.log(`\nBem-vindo você está no MineScript.
    \nSua missão é derrotar os mobs e enfrentar o boss final.
    \nBoa sorte, pois você vai precisar!`);

    console.log('Você deseja: \n 1. Iniciar \n 2.Desistir');
    let opcao = Number(ler());

    if(opcao == 1){

console.log(`O seu primeiro inimigo é o zumbie.
    \nOs atributos do zumbie são:
    \n Vida: ${zumbi.vida}
    Dano: entre 1 a 10
    \n
    Já você... começa sem nada, apenas com sua espada de madeira e sua armadura de couro.
    Os atributos do seu personagem são:
    Vida: ${steve.vida}
    Dano: entre 1 e 15
    Armadura: de couro
    `)

    //Batalha Com o Zumbi

    for(let i = 1; i != 0; i ++){
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let escolha = Number(ler());

    if(escolha == 1){
       console.log('Você escolheu Batalhar.');
       console.log();

       steve.dano = funcoes.danoSteve(steve);
       zumbi.vida = zumbi.vida - steve.dano;

       zumbi.dano = funcoes.danoZoombie(zumbi,steve);
       steve.vida = steve.vida - zumbi.dano;
       
       console.log(`Você bate no zumbi e tira ${steve.dano} dele. Agora ele tem ${zumbi.vida} de vida.\n`);

       console.log(`O zumbi também te bateu e te retirou ${zumbi.dano} de vida, então agora você tem ${steve.vida} de vida\n`)

        if (steve.vida == 0){
        console.log('Você morreu. Estou te encaminhando de volta para o inicio do jogo');
        i = -1
    }

        else if(zumbi.vida == 0){
            console.log(`Voce derrotou o zumbi com sucesso. Está de parabéns`);
        }
    }




    else if(escolha == 2){

        console.log('Você se esquiva, mas como ainda nâo tem nunhum item, terá que voltar para a batalha\n ');
    }

    else if(escolha == 3){
        console.log('Sinto muito, você fugiu da luta e aggora terá que refazer o jogo :( ');
        i = -1
    }


    }
    
}

else if(opcao == 2){
    cont = -1;
}
}