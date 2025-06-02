import prompt from "prompt-sync"
import * as funcoes from "./funcoes.js";
let ler = prompt();

let steve={
    vida: 75,
    armadura: 0,
    espada: 0,
    dano: 0,
    itens: [] 

}

let zumbi = {
    vida: 125,
    dano: 0

}
//inicio do Jogo
console.log(`\nBem-vindo você está no MineScript.
    \nSua missão é derrotar os mobs e enfrentar o boss final.
    \nBoa sorte, pois você vai precisar! \n`);
    
for(let cont = 1; cont != 0; cont ++){

    await funcoes.contar(1);
    console.log('Você deseja: \n 1. Continar \n 2.Desistir');
    let opcao = Number(ler());

    await funcoes.contar(0);
    if(opcao == 1){

console.log(`O seu primeiro inimigo é o zumbi.
    \nOs atributos do zumbie são:
    \n Vida: ${zumbi.vida}
    Dano: entre 1 a 10
    \n
    `)

    await funcoes.contar(5);
    console.log(`Já você... começa sem nada, apenas com sua espada de madeira e sua armadura de couro.
    Os atributos do seu personagem são:
    Vida: ${steve.vida}
    Dano: entre 1 e 15
    Armadura: de couro   
`
)

await funcoes.contar(5);
    //Batalha Com o Zumbi

    for(let i = 1; i != 0; i ++){
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let escolha = Number(ler());

    await funcoes.contar(1);

    if(escolha == 1){
       console.log('Você escolheu Batalhar.');
       console.log();

       steve.dano = funcoes.danoSteve(steve);
       zumbi.vida = zumbi.vida - steve.dano;

       zumbi.dano = funcoes.danoZoombie(zumbi,steve);
       steve.vida = steve.vida - zumbi.dano;
       
       await funcoes.contar(1);

       if(steve.dano>=15){
        console.log('Caramba, um dano crítico!')
       }

       let sit = 0;
       if(zumbi.vida <= -1){
        sit = 0;
       }

       else {
        sit = zumbi.vida
       }
       console.log(`Você bate no zumbi e tira ${steve.dano} dele. Agora ele tem ${sit} de vida.\n`);

       await funcoes.contar(1);

       let sit2 = 0;
       if(steve.vida <= -1){
        sit2 = 0;
       }

       else {
        sit2 = steve.vida;
       }

       console.log(`O zumbi também te bateu e te retirou ${zumbi.dano} de vida, então agora você tem ${sit2} de vida\n`)

        if (steve.vida <= 0){
            await funcoes.contar(2);
        console.log('Você morreu. Estou te encaminhando de volta para o inicio do jogo');
        i = -1

        steve.vida = 75;
        zumbi.vida = 125;
    }

        else if(zumbi.vida <= 0){
            await funcoes.contar(2);
            console.log(`Voce derrotou o zumbi com sucesso. Está de parabéns`);
            console.log();

            await funcoes.contar(2);

            console.log('Agora você pode escolher 2 entre essas 5 opções: \n 1. Armadura de Ferro \n 2. Espada de Ferro \n 3. Cura Total \n 4. Poção de Vida \n 5. Golden Apple');

            let r1 = Number(ler());
            console.log();
            
            await funcoes.contar(1);

            sit = '';
            if(r1 == 1){
                sit = 'Parabéns Uma das suas escolhas foi a armadura de ferro';
                steve.armadura = 1;
            }

            
            else if(r1 == 2){
                sit = 'Parabéns Uma das suas escolhas foi a espada de ferro';
                steve.espada = 2;
            }
            
            else if(r1 == 3){
                sit = 'Parabéns Uma das suas escolhas foi a Cura Total. \nSua vida foi reestaurada';
                steve.vida = 75;
            }
            
            else if(r1 == 4){
                sit = 'Parabéns Uma das suas escolhas foi a Poção de Vida. \n\n****POÇÃO ADICIONADA AO INVENTÁRIO****';
                steve.itens.push('Poção de Vida');
            }
            
            else if(r1 == 5){
                sit = 'Parabéns Uma das suas escolhas foi a Golden Apple. \n\n****GOLDEN APPLE AO INVENTÁRIO****';
                steve.itens.push('Golden Apple');
            }

            console.log(sit);
            await funcoes.contar(1);

            console.log('Agora faça a sua segunda escolha');

            for(let cont2 = 1; cont2 != 0;cont ++){
            let r2 = Number(ler());

            if(r2 == r1){
                sit = 'Esse item já foi escolhido, escolha outro.'
            }

             else if(r2 == 1){
                sit = 'Parabéns A sua segunda escolha escolhas foi a armadura de ferro';
                steve.armadura = 1;

                cont2 = -1
            }

            
            else if(r2 == 2){
                sit = 'Parabéns a sua segunda escolha  foi a espada de ferro';
                steve.espada = 2;

                cont2 = -1
            }
            
            else if(r2 == 3){
                sit = 'Parabéns a sua segunda escolha foi a Cura Total. \nSua vida foi reestaurada';
                steve.vida = 75;

                cont2 = -1
            }
            
            else if(r2 == 4){
                sit = 'Parabéns a sua segunda escolha foi a Poção de Vida. \n\n****POÇÃO ADICIONADA AO INVENTÁRIO****';
                steve.itens.push('Poção de Vida');

                cont2 = -1
            }
            
            else if(r2 == 5){
                sit = 'Parabéns a sua segunda escolha foi a Golden Apple. \n\n****GOLDEN APPLE AO INVENTÁRIO****';
                steve.itens.push('Golden Apple');

                cont2 = -1
            }

            console.log(sit);
            await funcoes.contar(1);
}
    opcao = 3
        }
    }




    else if(escolha == 2){

        await funcoes.contar(2);
        console.log('Você se esquiva, mas como ainda nâo tem nunhum item, terá que voltar para a batalha\n ');
    }

    else if(escolha == 3){
        await funcoes.contar(2);
        console.log('Sinto muito, você fugiu da luta e agora terá que refazer o jogo :( ');
        i = -1
    }


    }
    
}

else if(opcao == 2){
    cont = -1;
}

else if(opcao == 3){
    console.log('O seu próximo inimigo é o Esqueleto')
}

}
