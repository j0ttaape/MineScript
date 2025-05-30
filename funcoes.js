

// entrada de dados para o usuário
export function ApresentacaodoJogo(mensagem){
    console.log(`------------------------------------------------------------------------
            Olá! Seja Bem-Vindo ao War-Script
            
    Estamos em guerra com Danzo, um monstro que está tomando as terras de Aphantom
    nossa linha de frente precisa de você!
------------------------------------------------------------------------
                `)
}

export function SelecaoDPersonagem(skil){
    console.log(`------------------------------------------------------------------------
            Qual vai ser seu tipo de skil?
            1. Guerreiro
                Vida: 450hp
                Dano: 55

            2. Mago
                Vida: 300hp
                Dano:35

            3. Assasino
                Vida: 375
                Dano: 45
            4. Desejo sair do game`);

            let escolha = Number(ler());

            if(skillJogado == 1){
                skillJogado = 'Guerreiro'  
            }
            else if(skillJogado == 2){
                skillJogado = 'Mago'
            }
            else if(skillJogado == 3){
                skillJogado = 'Assasino'
            }
            else if(skillJogado == 4){
                
            }
}
