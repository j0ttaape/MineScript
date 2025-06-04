import prompt from "prompt-sync"
import * as funcoes from "./funcoes.js";
let ler = prompt();

let steve = {
    vida: 75,
    armadura: 0,
    espada: 0,
    dano: 0,
    escudo: 0,
    itens: [] 
}
//itens 
//1 =poção de vida
//2 = golden apple
let zumbi = {
    vida: 11,
    dano: 0

}

let esqueleto = {
    vida: 105,
    dano:0
}

let creeper = {
    vida: 150,
    dano: 0

}


let opcao= 0
let op = 0;
//inicio do Jogo
console.log(`\nBem-vindo você está no MineScript.
    \nSua missão é derrotar os mobs e enfrentar o boss final.
    \nBoa sorte, pois você vai precisar! \n`);
    
for(let cont = 1; cont != 0; cont ++){

    if (op == 0){
    await funcoes.contar(1);
    console.log('Você deseja: \n 1. Continuar \n 2.Desistir');
     opcao = Number(ler());

    await funcoes.contar(0);
    if(opcao == 1){

console.log(`O seu primeiro inimigo é o zumbi.
    \nOs atributos do zumbie são:
    \n Vida: ${zumbi.vida}
    Dano: entre 0 a 10
    \n
    `)

    await funcoes.contar(5);
    console.log(`Já você... começa sem nada, apenas com sua espada de madeira e sua armadura de couro.
    Os atributos do seu personagem são:
    Vida: ${steve.vida}
    Dano: entre 0 e 20
    Armadura: de couro   
`
)}

await funcoes.contar(5);
    //Batalha Com o Zumbi

    for(let i = 1; i != 0; i ++){
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let escolha = Number(ler());

    await funcoes.contar(1);
   for(let h = 1; h != 0; h ++){
         if(escolha > 3 || escolha < 1){
                     console.log('opção invalida \n escolha novamente')
                     escolha = Number(ler());

                 }else{
                    break;
                 }

   }
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

            console.log('Agora você pode escolher 3 entre essas 6 opções: \n 1. Armadura de Ferro \n 2. Espada de Ferro \n 3. Cura Total \n 4. Poção de Vida \n 5. Golden Apple\n 6. Escudo');

            let r1 = Number(ler());
            console.log();
            
            await funcoes.contar(1);

            sit = '';

            for(let g = 1; g != 0; g ++){
                if(r1 > 6 || r1 < 1){
                     console.log('opção invalida \n escolha novamente')
                     r1 = Number(ler());

                 }else{
                    break;
                 }

            }

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
                steve.itens.push(1);
            }
            
            else if(r1 == 5){
                sit = 'Parabéns Uma das suas escolhas foi a Golden Apple. \n\n****GOLDEN APPLE ADICIONADA AO INVENTÁRIO****';
                steve.itens.push(2);
            }

            else if(r1 == 6){
                sit = 'Parabéns Uma das suas escolhas foi o Escudo. \n\n****ESCUDO ADICIONADO AO INVENTÁRIO****';
                steve.escudo = 1;
            }
            

            console.log(sit);
            await funcoes.contar(1);

            console.log('Agora faça a sua segunda escolha:');
            let r2 = Number(ler());

            for(let cont2 = 1; cont2 != 0;cont2 ++){

                   for(let h = 1; h != 0; h ++){
         if(r2 > 6 || r2 < 1){
                     console.log('opção invalida \n escolha novamente')
                     r2 = Number(ler());

                 }else{
                    break;
                 }
                }

            if(r2 == r1){
                sit = 'Esse item já foi escolhido, escolha outro.'
                r2 = Number(ler());
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
                sit = 'Parabéns a sua segunda escolha foi a Cura Total. \nSua vida foi restaurada';
                steve.vida = 75;

                cont2 = -1
            }
            
            else if(r2 == 4){
                sit = 'Parabéns a sua segunda escolha foi a Poção de Vida. \n\n****POÇÃO ADICIONADA AO INVENTÁRIO****';
                steve.itens.push(1);

                cont2 = -1
            }
            
            else if(r2 == 5){
                sit = 'Parabéns a sua segunda escolha foi a Golden Apple. \n\n****GOLDEN APPLE AO INVENTÁRIO****';
                steve.itens.push(2);

                cont2 = -1
            }
            
            else if(r2 == 6){
                sit = 'Parabéns a sua segunda escolhas foi o Escudo. \n\n****ESCUDO ADICIONADO AO INVENTÁRIO****';
                steve.escudo = 1;
            }
            else{console.log('opção invalida, escolha de 1 a 6!')}

            await funcoes.contar(1);
            console.log(sit);
        }
        let cont3 = 1;
        
        console.log('Faça a sua última escolha:')
        let r3 = Number(ler());
            for( cont3 = 1; cont3 != 0;cont3 ++){

                   for(let h = 1; h != 0; h ++){
         if(escolha > 3 || escolha < 1){
                     console.log('opção invalida \n escolha novamente')
                     escolha = Number(ler());

                 }else{
                    break;
                 }
                }

            if(r3 == r1|| r3 == r2){

                sit = 'Esse item já foi escolhido, escolha outro.'
            }

             else if(r3 == 1){
                sit = 'Parabéns A Sua última escolha escolhas foi a armadura de ferro';
                steve.armadura = 1;

                cont3 = -1
            }

            
            else if(r3 == 2){
                sit = 'Parabéns a Sua última escolha  foi a espada de ferro';
                steve.espada = 2;

                cont3 = -1
            }
            
            else if(r3 == 3){
                sit = 'Parabéns a sua última escolha foi a Cura Total. \nSua vida foi reestaurada';
                steve.vida = 75;

                cont3 = -1
            }
            
            else if(r3 == 4){
                sit = 'Parabéns a sua última escolha foi a Poção de Vida. \n\n****POÇÃO ADICIONADA AO INVENTÁRIO****';
                steve.itens.push(1);

                cont3 = -1
            }
            
            else if(r3 == 5){
                sit = 'Parabéns a sua última escolha foi a Golden Apple. \n\n****GOLDEN APPLE AO INVENTÁRIO****';
                steve.itens.push(2);

                cont3 = -1
            }
            
            else if(r3== 6){
                sit = 'Parabéns a sua última escolha foi o Escudo. \n\n****ESCUDO ADICIONADO AO INVENTÁRIO****';
                steve.escudo = 1;
            }
            else{console.log('opção invalida, escolha entre 1 a 6!')}

            console.log(sit);

            await funcoes.contar(1);
            cont3 = -1;
            i = -1;
        }

    opcao = 3
    op = 1 
        }
    }
    
    else if(escolha == 2){
        console.log('você se esquivou, agora você tem as opções: \n1.voltar para batalha \n2. abrir o inventario');
        let res = Number(ler());

        await funcoes.contar(1);
        if(res == 1){
            console.log('voltando para batalha!');
            console.log();
        }
        else if(res == 2){
            console.log('inventario aberto!');
            //console.log(`os itens do seu inventario são: ${steve.itens}, ${r2} e ${r3}`);

            for(let item of steve.itens){

                if(item == 0){
                    console.log('nesse espaço não tem nada!');
                }
                else if (item == 1){
                    console.log('Poção de vida')

                }
                else if(item == 2){
                console.log('Golden apple')
                
            }
            console.log('agora escolha um dos itens(escreva corretamente!)');

            // 
    
        }
    
    }
    else{console.log('opção invalida, escolha de 1 ou 2!')}
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

//batalha esqueleto

else if(opcao == 3){
    //batalha esqueleto
    await funcoes.batalhaEsqueleto(steve, esqueleto);
    op = 0; // recomecar
}
}


