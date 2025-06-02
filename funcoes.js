
// -- Funções do Zumbi --
export function danoZoombie(zumbi,steve){
    if(steve.armadura = 0){
        zumbi.dano = math.parseint(random()*10)
    }

    else if(steve.armadura = 1){

        zumbi.dano = math.parseint(random()*7.5)
    }

    else if(steve.armadura = 2){

        zumbi.dano = math.parseint(random()*5)
    }
    return zumbi.dano
}

export function danoSteve(steve){
    if(steve.espada = 0){
        steve.dano = parseint(math.random()*15)
    }
    
  else if(steve.espada = 1){
        steve.dano = parseint(math.random()*30)
    }
    
  else if(steve.espada = 2){
        steve.dano = parseint(math.random()*45)
    }
    
  else if(steve.espada = 3){
        steve.dano = parseint(math.random()*60)
    }
    return steve.dano
}

