


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

export function danoSteve(steve){
    if(steve.espada == 0){
        steve.dano = Math.floor(Math.random()*15)
    }
    
  else if(steve.espada == 1){
        steve.dano = Math.floor(Math.random()*30)
    }
    
  else if(steve.espada == 2){
        steve.dano = Math.floor(Math.random()*45)
    }
    
  else if(steve.espada == 3){
        steve.dano = Math.floor(Math.random()*60)
    }
    return steve.dano
}