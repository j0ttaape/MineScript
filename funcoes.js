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

export async function iniciarBatalhaZumbi() {
  await funcoes.contar(1);
  console.log('Você deseja: \n 1. Continuar \n 2.Desistir');
  let opcao = Number(ler());

  await funcoes.contar(0);
  if (opcao == 1) {
      await apresentarInimigo(zumbi, steve);
      await batalhaComZumbi(zumbi, steve);
  } else {
      console.log("Você desistiu do jogo. Até a próxima!");
      return;
  }
}

export async function apresentarInimigo(zumbi, steve) {
  console.log(`O seu primeiro inimigo é o zumbi.
  \nOs atributos do zumbie são:
  \n Vida: ${zumbi.vida}
  Dano: entre 0 a 10
  \n
  `);

  await funcoes.contar(5);
  console.log(`Já você... começa sem nada, apenas com sua espada de madeira e sua armadura de couro.
  Os atributos do seu personagem são:
  Vida: ${steve.vida}
  Dano: entre 0 e 20
  Armadura: de couro
  `);
  await funcoes.contar(5);
}

export async function batalhaComZumbi(zumbi, steve) {
  for (let i = 1; i != 0; i++) {
      let escolha = await obterEscolhaBatalha();

      if (escolha == 1) {
          await realizarAtaque(zumbi, steve);
          if (steve.vida <= 0) {
              await funcoes.contar(2);
              console.log('Você morreu. Estou te encaminhando de volta para o inicio do jogo');
              resetarPersonagens(steve, zumbi);
              i = -1;
          } else if (zumbi.vida <= 0) {
              await funcoes.contar(2);
              console.log(`Voce derrotou o zumbi com sucesso. Está de parabéns`);
              await escolherItens(steve);
              i = -1;
          }
      } else if (escolha == 2) {
          await esquivar();
      } else if (escolha == 3) {
          await funcoes.contar(2);
          console.log('Sinto muito, você fugiu da luta e agora terá que refazer o jogo :( ');
          i = -1;
      }
  }
}

export async function obterEscolhaBatalha() {
  console.log('Você tem algumas opções: \n 1. Batalhar \n 2. Esquivar \n 3. Fugir:');
  let escolha = Number(ler());
  while (escolha < 1 || escolha > 3) {
      console.log('opção invalida \n escolha novamente');
      escolha = Number(ler());
  }
  return escolha;
}

export async function realizarAtaque(zumbi, steve) {
  console.log('Você escolheu Batalhar.');
  console.log();

  steve.dano = funcoes.danoSteve(steve);
  zumbi.vida -= steve.dano;

  zumbi.dano = funcoes.danoZoombie(zumbi, steve);
  steve.vida -= zumbi.dano;

  await funcoes.contar(1);
  console.log(`Você bate no zumbi e tira ${steve.dano} dele. Agora ele tem ${Math.max(zumbi.vida, 0)} de vida.\n`);
  await funcoes.contar(1);
  console.log(`O zumbi também te bateu e te retirou ${zumbi.dano} de vida, então agora você tem ${Math.max(steve.vida, 0)} de vida\n`);
}

export async function escolherItens(steve) {
  console.log('Agora você pode escolher 3 entre essas 6 opções: \n 1. Armadura de Ferro \n 2. Espada de Ferro \n 3. Cura Total \n 4. Poção de Vida \n 5. Escudo');
  let r1 = await obterEscolhaItem(steve);
  let r2 = await obterEscolhaItem(steve, r1);
  let r3 = await obterEscolhaItem(steve, r1, r2);
}

export async function obterEscolhaItem(steve, item1 = null, item2 = null) {
  let escolha = Number(ler());
  while (escolha === item1 || escolha === item2 || escolha < 1 || escolha > 5) {
      console.log('Opção inválida, escolha novamente');
      escolha = Number(ler());
  }
  aplicarEscolhaItem(steve, escolha);
  return escolha;
}

export function aplicarEscolhaItem(steve, escolha) {
  if (escolha === 1) {
      console.log('Parabéns, você escolheu a armadura de ferro');
      steve.armadura = 1;
  } else if (escolha === 2) {
      console.log('Parabéns, você escolheu a espada de ferro');
      steve.espada = 2;
  } else if (escolha === 3) {
      console.log('Parabéns, você escolheu a Cura Total. \nSua vida foi restaurada');
      steve.vida = 75;
  } else if (escolha === 4) {
      console.log('Parabéns, você escolheu a Poção de Vida.');
      steve.pocao += 1;
  } else if (escolha === 5) {
      console.log('Parabéns, você escolheu o Escudo.');
      steve.escudo = 1;
  }
}

export function resetarPersonagens(steve, zumbi) {
  steve.vida = 75;
  zumbi.vida = 125;
}

// Chame a função principal para iniciar o jogo
await iniciarBatalhaZumbi();
