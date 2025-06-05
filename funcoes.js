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
      enderman.dano = Math.floor(Math.random() * (30 / 2))
    }

    else{
    enderman.dano = Math.floor(Math.random() * 30)}
  }

  else if (steve.armadura == 1) {

    if (steve.escudo == 1) {
      enderman.dano = Math.floor(Math.random() * (20 / 2))
    }

    else{
    enderman.dano = Math.floor(Math.random() * 20)
}

  }

  else if (steve.armadura == 2) {

    if (steve.escudo == 1) {
      enderman.dano = Math.floor(Math.random() * (10 / 2))
    }

    else{
    enderman.dano = Math.floor(Math.random() * 10)
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

