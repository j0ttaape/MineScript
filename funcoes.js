import prompt from 'prompt-sync'
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

    else{
    esqueleto.dano = Math.floor(Math.random() * 30)}
  }

  else if (steve.armadura == 1) {

    if (steve.escudo == 1) {
      esqueleto.dano = Math.floor(Math.random() * (20 / 2))
    }

    else{
    esqueleto.dano = Math.floor(Math.random() * 20)
}

  }

  else if (steve.armadura == 2) {

    if (steve.escudo == 1) {
      esqueleto.dano = Math.floor(Math.random() * (10 / 2))
    }

    else{
    esqueleto.dano = Math.floor(Math.random() * 10)
}
  }
  return esqueleto.dano
}

//funçao enderman

export function danoEnderman(steve, enderman) {

  if (steve.armadura == 0) {
    if (steve.escudo == 1) {
      enderman.dano = Math.floor(Math.random() * (45 / 2))
    }

    else{
    enderman.dano = Math.floor(Math.random() * 45)}
  }

  else if (steve.armadura == 1) {

    if (steve.escudo == 1) {
      enderman.dano = Math.floor(Math.random() * (35 / 2))
    }

    else{
    enderman.dano = Math.floor(Math.random() * 35)
}

  }

  else if (steve.armadura == 2) {

    if (steve.escudo == 1) {
      enderman.dano = Math.floor(Math.random() * (25 / 2))
    }

    else{
    enderman.dano = Math.floor(Math.random() * 25)
}
  }
  return enderman.dano
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

let opcao= 0


export function apresentacaoTexto(opcao){

  console.log(`----------------------
    - O que você deseja? -
    - 1. Batalhar        -
    - 2. Esquivar        -
    - 3. Desistir        -
    ----------------------\n`);
         opcao = Number(ler());

         return opcao;
  }

  export function obterOpcoes(){
    console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
    let escolha = Number(ler());
    return escolha;
  }

  export function  opcaoInvalida(escolha){
    for(let h = 1; h != 0; h ++){
      if(escolha > 3 || escolha < 1){
   console.log('opção invalida \n escolha novamente')
 escolha = Number(ler());

  }

  else{
  break;
  }

}
return escolha;
  }

  export function obterOpcoesBatalhas(){
    console.log('você se esquivou, agora você tem as opções: \n1.voltar para batalha \n2. abrir o inventario');
        let res = Number(ler());
        return res;
  }