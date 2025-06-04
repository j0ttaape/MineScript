import prompt from "prompt-sync"
let ler = prompt();

// -- Funções do Zumbi --
export function danoZoombie(zumbi,steve){
    if(steve.armadura == 0){
        zumbi.dano = Math.floor(Math.random()*10)
    }

    else if(steve.armadura == 1){

        zumbi.dano = Math.floor(Math.random()*7.5)
    }

    else if(steve.armadura == 2){

        zumbi.dano = Math.floor(Math.random()*5)
    }
    return zumbi.dano
}

//funçao esqueleto 

export function danoEsqueleto(steve, esqueleto) {

  if (steve.armadura == 0) {
    if (steve.escudo == 1) {
      esqueleto.dano = Math.floor(Math.random() * (30 / 2))
    }

    esqueleto.dano = Math.floor(Math.random() * 30)
  }

  else if (steve.armadura == 1) {

    if (steve.escudo == 1) {
      esqueleto.dano = Math.floor(Math.random() * (20 / 2))
    }
    esqueleto.dano = Math.floor(Math.random() * 20)


  }

  else if (steve.armadura == 2) {

    if (steve.escudo == 1) {
      esqueleto.dano = Math.floor(Math.random() * (10 / 2))
    }

    esqueleto.dano = Math.floor(Math.random() * 10)

  }
  return esqueleto.dano
}

//funçao enderman

export function atackenderman(enderman,steve) {

    if(steve.armadura == 0){
        enderman.dano = Math.floor(Math.random()*40)
    }

    else if(steve.armadura == 1){

        enderman.dano = Math.floor(Math.random()*27)
    }

    else if(steve.armadura == 2){

        enderman.dano = Math.floor(Math.random()*18)
    }
    return enderman.dano
}


//-- function Creeper  --
export function danoCreeper(creeper,steve){

  if(steve.armadura == 0){
    if(steve.escudo == 1){
      creeper.dano = Math.floor(Math.random()*( 30 /2))
    }
   
    creeper.dano = Math.floor(Math.random()*30)
  }

  else if(steve.armadura == 1){

    if(steve.escudo == 1){
      creeper.dano = Math.floor(Math.random()*( 20 /2))
    }
      creeper.dano = Math.floor(Math.random()*20)

      
  }

  else if(steve.armadura == 2){

    if(steve.escudo == 1){
      creeper.dano = Math.floor(Math.random()*( 10 /2))
    }
      
      creeper.dano = Math.floor(Math.random()*10)
      
  }
  return creeper.dano
}



export function danoSteve(steve){
    if(steve.espada == 0){
        steve.dano = Math.floor(Math.random()*20)
    }
    
  else if(steve.espada == 1){
        steve.dano = Math.floor(Math.random()*35)
    }
    
  else if(steve.espada == 2){
        steve.dano = Math.floor(Math.random()*50)
    }
    
  else if(steve.espada == 3){
        steve.dano = Math.floor(Math.random()*75)
    }
    return steve.dano
}


export async function contar(limite) {
  for (let contador = 0; contador <= limite; contador++) {
    await sleep(500);
  }
}


function sleep(milisegundos) {
  return new Promise((ok, nok) => {
    setTimeout(ok, milisegundos);
  })
}

export async function batalhaEsqueleto(steve, esqueleto) {
  //await funcoes.contar(1);

  // apresentacap
  console.log('Após essa intensa batalha contra um zumbi, que foi o seu primeiro inimigo, você segue viagem em busca de um enderman \n ');
  console.log('Cuidado, você é avistado por um esqueleto e ele começa a te atacar');
  console.log();

  for (let i = 1; i != 0; i++) {
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let escolha = Number(ler());

    await contar(1);

    if (escolha == 1) { // batalhar
      console.log('você escolheu batalhar');
      console.log();

      // steve atacando o esqueleto
      steve.dano = danoSteve(steve);
      esqueleto.vida = esqueleto.vida - steve.dano;
      if (esqueleto.vida <= 0) {
        esqueleto.vida = 0;
      }

      await contar(1);
      if (steve.espada == 0 && steve.dano >= 15) { // se for espada de couro
        console.log('Caramba, você deu um dano critico!');
      } else if (steve.espada == 1 && steve.dano >= 28) { // se for espada de ferro
        console.log('Caramba, você deu um dano critico!')
      }

      await contar(2);

      console.log(`você atacou o esqueleto e deu ${steve.dano} de dano.\nAgora o esqueleto tem ${esqueleto.vida} de vida `);

      // esqueleto atacando o steve
      esqueleto.dano = danoEsqueleto(steve, esqueleto);

      await contar(1);

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

      await contar(1);

      if (steve.vida <= 0) {
        console.log('Sinto muito, você morreu e agora terá que refazer o jogo :(');
        break;
      }

      if (esqueleto.vida <= 0) {//menu
        console.log('parabens! você derrotou o esqueleto, vamos continuar a nossa jornada');
        console.log('')
        console.log('Agora você pode escolher 3 entre essas 8 opções: \n 1. Armadura de Ferro \n 2. Espada de Ferro \n 3. Cura Total \n 4. Poção de Vida \n 5. Golden Apple\n 6. Escudo \n 7.armadura de diamente \n 8. Espada de diamante');
        
        break;
      }
  //  } else if (escolha == 2) { // esquivar
     //console.log('parabens! você esquivou');
   // } else if (escolha == 3) { // fugir
   //   console.log('você fugiu da batalha, o jogo será reiniciado!');
    //  break;
  // } else {
   //   console.log('escolha desconhecida');
   }
  }
}