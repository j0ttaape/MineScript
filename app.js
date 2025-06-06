import prompt from "prompt-sync"
import * as funcoes from "./funcoes.js";
let ler = prompt();

let steve = {
    vida: 75,
    armadura: 0,
    espada: 0,
    dano: 0,
    escudo: 0,
    pocao: 0
}

let zumbi = {
    vida: 125,
    dano: 0

}

let esqueleto = {
    vida: 105,
    dano:0
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
    console.log(`----------------------
- O que você deseja? -
- 1. Batalhar        -
- 2. Esquivar        -
- 3. Desistir        -
----------------------\n`);
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

     }

     else{
     break;
     }

   }
     if(escolha == 1){
       console.log(`---------------------------
 - Você escolheu Batalhar -
---------------------------\n`);

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

            console.log('Agora você pode escolher 3 entre essas 6 opções: \n 1. Armadura de Ferro \n 2. Espada de Ferro \n 3. Cura Total \n 4. Poção de Vida \n 5. Escudo');

            let r1 = Number(ler());
            console.log();
            
            await funcoes.contar(1);

            sit = '';

            
            for(let h = 1; h !=0; h++){
            if(r1 == 1){
                sit = 'Parabéns Uma das suas escolhas foi a armadura de ferro';
                steve.armadura = 1;

                h= -1;
            }

            
            else if(r1 == 2){
                sit = 'Parabéns Uma das suas escolhas foi a espada de ferro';
                steve.espada = 2;

                h= -1;
            }
            
            else if(r1 == 3){
                sit = 'Parabéns Uma das suas escolhas foi a Cura Total. \nSua vida foi reestaurada';
                steve.vida = 75;

                h= -1;
            }
            
            else if(r1 == 4){
                sit = 'Parabéns Uma das suas escolhas foi a Poção de Vida.';
                steve.pocao =steve.pocao = 1;

                h= -1;
            }
            

            else if(r1 == 5){
                sit = 'Parabéns Uma das suas escolhas foi o Escudo. \n';
                steve.escudo = 1;

                h= -1;
            }

            else{
                console.log('Opção inválida');
            }
            
}
            console.log(sit);
            await funcoes.contar(1);

            console.log('Agora faça a sua segunda escolha:');
            let r2 = Number(ler());

            for(let cont2 = 1; cont2 != 0;cont2 ++){


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
                sit = 'Parabéns a sua segunda escolha foi a Poção de Vida.';
                steve.pocao = steve.pocao + 1;

                cont2 = -1
            }
            
            
            else if(r2 == 5){
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
                sit = 'Parabéns a sua última escolha foi a Poção de Vida.';
                steve.pocao = steve.pocao + 1;

                cont3 = -1
            }
            
            
            else if(r3== 5){
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

           console.log('Você se esquiva mas como ainda não tem nenhum item, você volta pra batalha! ')
    
    }
    
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
    cont = -1;
}
}





//batalha do esqueleto
else if(opcao == 3){
    
      //await funcoes.contar(1);

  // apresentacap
  console.log('Após essa intensa batalha contra um zumbi, que foi o seu primeiro inimigo, você segue viagem em busca de um enderman \n ');
  await funcoes.contar(0);
  console.log('Cuidado, você é avistado por um esqueleto e ele começa a te atacar');
  console.log();

  for (let i = 1; i != 0; i++) {
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let  escolha = Number(ler());

    await funcoes.contar(1);
    
    if (escolha == 1) { // batalhar
      console.log(`---------------------------
- Você escolheu Batalhar -
---------------------------\n`);

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
        console.log(`Cuidado, o esqueleto acertou o tiro. \nEle te deu ${esqueleto.dano} de dano e você ficou com ${steve.vida} de vida `);
      }

      await funcoes.contar(1);

      if (steve.vida <= 0) {
        console.log('Sinto muito, você morreu e agora terá que refazer o jogo :(');
        i = -1;
        esqueleto.vida = 105;
        zumbi.vida = 125;
        steve.vida = 75;
        op = 0;
      }

      if (esqueleto.vida <= 0) {//menu
        console.log('parabéns! você derrotou o esqueleto, e ganhou o arco, vamos continuar a nossa jornada');
        console.log('')
        console.log('Agora você pode escolher 2 entre essas 3 opções:\n 1.armadura de diamente \n 2. Espada de diamante \n3. Cura Total');
        let r1 = Number(ler());
        
        await funcoes.contar(0);
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
        
       

        i = -1;
      }
 opcao = 4;
 op = 1;

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

  console.log('Você se esquivou');

  if(steve.pocao >= 1){
    console.log(`Você tem ${steve.pocao} poções de vida. Deseja utiliza-la? \n 1.Sim \n 2.Não`);
    let rep = Number(ler());

await funcoes.contar(0);
if(rep == 1){
    steve.pocao = steve.pocao - 1;
    steve.vida = steve.vida + 45;

    console.log('Você ganhou mais 45 de vida\n Voltando para batalha');

}

else if(rep == 2){
    console.log('Voltando Para a batalha.');
}

else{
    console.log('Voltando para a batalha.');
}

}

}

else{
    console.log('opção invalida, escolha de 1 ou 2!')
}

}

else if(escolha == 3 ){
console.log('você escolheu fugir :(');

console.log('O esqueleto te mata, Covarde\n');

i = -1;
op = 0;
}
}


}

//começo contra o enderman
else if(opcao ==4){
    console.log('Após ganhar do esqueleto vocêr tem a missão de achar um enderman e derrotalo para conseguir o olho dele e ir para o The End');
    console.log()

    await funcoes.contar(0);

    console.log('Você encontra um enderman, mas cuidado, ele se teleporta e te bate quando voce menos espera');

    await funcoes.contar(0);
    console.log();
        console.log('Ele te avistou, ele está vindo te atacar');


      for (let i = 1; i != 0; i++) {
            console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
            let  escolha = Number(ler());

            await funcoes.contar(1);

             if (escolha == 1) { // batalhar

                console.log(`---------------------------
 - Você escolheu Batalhar -
---------------------------\n`);

      // steve atacando o enderman
      
      steve.dano = funcoes.danoSteve(steve);

      if(steve.dano <= 8){

        console.log('O enderman se teleportou e você errou o ataque nele :(');

      }

      else{
      enderman.vida = enderman.vida - steve.dano;
    }
      
      if (enderman.vida <= 0) {
        enderman.vida = 0;
      }


      await funcoes.contar(1);
      if (steve.espada == 0 && steve.dano >= 15) { // se for espada de couro
        console.log('Caramba, você deu um dano critico!');
      } 
      else if (steve.espada == 1 && steve.dano >= 28) { // se for espada de ferro
        console.log('Caramba, você deu um dano critico!')
      }

      await funcoes.contar(2);

      console.log(`você atacou o enderman e deu ${steve.dano} de dano.\nAgora o enderman tem ${enderman.vida} de vida `);

      // enderman atacando o steve
      enderman.dano = funcoes.danoEnderman(steve, enderman);

      await funcoes.contar(1);

      if (enderman.dano <= 9) {
        console.log('eita, o enderman errou o ataque!');
        console.log();
      } 
      
      else {
        steve.vida = steve.vida - enderman.dano;

        if (steve.vida <= 0) {
          steve.vida = 0;
        }

        console.log(`Cuidado, o enderman acertou o ataque. \n Ele te deu ${enderman.dano} de dano e você ficou com ${steve.vida} de vida `);
      }

      await funcoes.contar(1);

      if (steve.vida <= 0) {
        console.log('Sinto muito, você morreu e agora terá que refazer o jogo :(');
        i = -1;
        enderman.vida = 85;
        esqueleto.vida = 105;
        zumbi.vida = 125;
        steve.vida = 75;
        op = 0;
      }

      if (enderman.vida <= 0) {//menu
        console.log('parabéns! você derrotou o enderman, nossa jornada acaba aqui');
        console.log('')
       

        i=-1
        cont = -1
      }
       
 
 op = 0;

   }

   else if(escolha == 2){
    console.log('você se esquivou, agora você tem as opções: \n1.voltar para batalha \n2. abrir o inventario\n 3.Usar Arco');
    let res = Number(ler());

 

    await funcoes.contar(1);
    if(res == 1){
        console.log('voltando para batalha!');
        console.log();
    }
    else if(res == 2){

  console.log('Abrindo o inventário');

  if(steve.pocao >= 1){
    console.log(`Você tem 1.${steve.pocao} poções de vida e um arco. Deseja utiliza-la qual? \n 1.Poção\n 2.Voltar para a batalha `);
    let rep = Number(ler());

await funcoes.contar(0);

if(rep == 1){
    steve.pocao = steve.pocao - 1;
    steve.vida = steve.vida + 45;

    console.log('Você ganhou mais 45 de vida\n Voltando para batalha');

}

else if(rep == 2){
console.log('Voltando para a batalha');

}

else{
    console.log('Voltando para a batalha.');
}

}
else{
    console.log('Voceê abriu o inventário, mas como ele está vazio, você volta para a batalha');
}

}

else if(res == 3){
    steve.dano = Math.floor(Math.random()* 35);
    enderman.vida = enderman.vida - steve.dano;
    
    console.log(`Você acerta uma flechada no enderman e retira ${steve.dano} de vida, deixando ele com ${enderman.vida} de vida`);
}

else{
    console.log('Opção inválida, Voltando para a batalha');
}

}

else if(escolha == 3 ){
console.log('você escolheu fugir :(');

console.log('O enderman te mata, Covarde\n');

i = -1;
op = 5 ;
}

      }




}
}



