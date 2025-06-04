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
    vida: 1,
    dano: 0

}

let esqueleto = {
    vida: 1,
    dano:0
}

let creeper = {
    vida: 150,
    dano: 0

}

let enderman = {
    vida: 200,
    dano: 0

}

let opcao= 0
let op = 0;
//inicio do Jogo
console.log(`\nBem-vindo você está no MineScript.
    \nSua missão é derrotar os mobs e enfrentar o boss final.
    \nBoa sorte, pois você vai precisar! \n`);
    
for (let cont = 1; cont != 0; cont++){

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
    Armadura: de couro   '  
`
)

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
                sit = 'Parabéns Uma das suas escolhas foi o Escudo. \n';
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
                sit = 'Parabéns a sua segunda escolhas foi o Escudo. \n';
                steve.escudo = 1;

                cont2 = -1
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
                sit = 'Parabéns a sua última escolha foi a Golden Apple. \n\n****GOLDEN APPLE ADICIONADA AO INVENTÁRIO****';
                steve.itens.push(2);

                cont3 = -1
            }
            
            else if(r3== 6){
                sit = 'Parabéns a sua última escolha foi o Escudo.';
                steve.escudo = 1;

                cont3 = -1;
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

            console.log('Antes de abrir o seu inventário eu irei fazer uma guia dos códigos')
            console.log('inventario aberto!');
      
            for(let item of steve.itens){

                if(item == 0){
                    console.log('nesse espaço não tem nada!');
                }
                else if (item == 1){
                    console.log('Poção de vida');

                }
                else if(item == 2){
                console.log('Golden apple');
                
            }
            console.log('agora escolha um dos itens(escreva corretamente!)');

            
    
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
   
    console.log("Você desistiu do jogo. Até a próxima!");
    cont = -1
}
}




        //batalha esqueleto



else if(opcao == 3){
    
      //await funcoes.contar(1);

  // apresentacap
  console.log('Após essa intensa batalha contra um zumbi, que foi o seu primeiro inimigo, você segue viagem em busca de um enderman \n ');
  console.log('Cuidado, você é avistado por um esqueleto e ele começa a te atacar');
  console.log();

  for (let i = 1; i != 0; i++) {
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let  escolha = Number(ler());

    await funcoes.contar(1);
    
    if (escolha == 1) { // batalhar
      console.log('você escolheu batalhar');
      console.log();

      // steve atacando o esqueleto
      steve.dano = funcoes.danoSteve(steve);
      esqueleto.vida = esqueleto.vida - steve.dano;
      if (esqueleto.vida <= 0) {
        esqueleto.vida = 0;
      }

      await funcoes.contar(1);
      if (steve.espada == 0 && steve.dano >= 15) { // se for espada de couro
        console.log('Caramba, você deu um dano critico!');
      } 
      else if (steve.espada == 1 && steve.dano >= 28) { // se for espada de ferro
        console.log('Caramba, você deu um dano critico!')
      }

      await funcoes.contar(2);

      console.log(`você atacou o esqueleto e deu ${steve.dano} de dano.\nAgora o esqueleto tem ${esqueleto.vida} de vida `);

      // esqueleto atacando o steve
      esqueleto.dano = funcoes.danoEsqueleto(steve, esqueleto);

      await funcoes.contar(1);

      if (esqueleto.dano <= 5) {
        console.log('eita, o esqueleto errou o tiro!');
        console.log();
      } else {
        steve.vida = steve.vida - esqueleto.dano;
        if (steve.vida <= 0) {
          steve.vida = 0;
        }
        console.log(`Cuidado, o esqueleto acertou o tiro. \nEle te deu ${esqueleto.dano} de dano e você ficou com ${steve.vida} de vida `)
      }

      await funcoes.contar(1);

      if (steve.vida <= 0) {
        console.log('Sinto muito, você morreu e agora terá que refazer o jogo :(');
        i = -1;
      }

      if (esqueleto.vida <= 0) {//menu
        console.log('parabéns! você derrotou o esqueleto, vamos continuar a nossa jornada');
        console.log('')
        console.log('Agora você pode escolher 2 entre essas 3 opções:\n 1.armadura de diamente \n 2. Espada de diamante \n3. Cura Total');
        let r1 = Number(ler());

        await funcoes.contar(1);
        
        await funcoes.contar(0)
        for(let h = 1; h !=0; h++){
        if(r1 == 1){

            console.log('Você escolheu a armadura de Diamante');
            steve.armadura = 2;
             h = -1;
        
        }
        else if( r1 == 2 ){
            console.log('voce escolheu a espada de diamante');
            steve.espada = 2;
            h = -1;
        }
        else if( r1 == 3){
            console.log('voce escolheu cura total');
            steve.vida = 75;
            h = -1;
        }
        else{
            
            console.log('Opção inválida,Escolha novamente');
            
        }
    }

        console.log('Agora escolha a sua segunda opção:\n');
        let r2 = Number(ler());

        await funcoes.contar(0)
        for (let h = 1; h !=0; h++){ // segunda opção menu esqueleto

            if(r2 == r1){
                console.log('Opção já escolhida, escolha novamente\n');


            }

            else if(r2 == 1){
               
            console.log('Você escolheu a armadura de Diamante');
            steve.armadura = 2;
             h = -1;
        
            }
            else if(r2 == 2){
               
            console.log('Você escolheu a espada de Diamante');
            steve.espada = 2;
             h = -1;
        
            }
            else if(r2 == 3){
               
            console.log('Você escolheu a cura total');
            steve.espada = 2;
             h = -1;
        
            }

            else{
                console.log('Opção inválida, escolha novamente\n');
            }
        }
        
       

        
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

        console.log('Aqui vai um guia sobre os códigos de itens para você escolher usa-los\n');

        console.log('ITENS\n  1. Poção de vida\n 2. Golden Apple')
        console.log('inventario aberto!');
  
        for(let item of steve.itens){

            if(item == 0){
                console.log('nesse espaço não tem nada!');
            }
            else if (item == 1){
                console.log('Poção de vida');

            }
            else if(item == 2){
            console.log('Golden apple');
            
        }
        
       
        
    }
    
    console.log('Escolha o item de acordo com o número');

}
else{console.log('opção invalida, escolha de 1 ou 2!')}
}

else if(escolha == 3 ){
console.log('você escolheu fugir :(');

console.log('O esqueleto te mata, Covarde\n');

i = -1;
op = 0;
}
}

opcao = 4; 




}
}



