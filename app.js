import prompt from "prompt-sync"
let ler = prompt();

let steve={
    vida: 75,
    armadura: 0,
    arma: 0,
    dano: 0
}

let zumbi = {
    vida: 125,
    dano: 0
}
    

console.log(`\nBem-vindo você está no MineScript.
    \nSua missão é derrotar os mobs e enfrentar o boss final.
    \nBoa sorte, pois você vai precisar!`);

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

