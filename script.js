/*

Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se arqueiro -> no ataque exibir (usou arco)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)


## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 
Bons estudos 😉

*/


class heroClass {
  constructor(name, age, type, weapon) {
    this.name = name
    this.age = age
    this.type = type
    this.weapon = weapon
  }

  attack() {
    console.log(`O ${this.type} ${this.name} atacou usando ${this.weapon}.`)
  }
}

/*
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se arqueiro -> no ataque exibir (usou arco)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
*/

let mago = new heroClass("Naillath", "28", "Mago", "magia")

let guerreiro = new heroClass("Apheru", "27", "Guerreiro", "espada")

let arqueiro = new heroClass("Khalled", "28", "Arqueiro", "arco")

let monge = new heroClass("Shiro", "25", "Monge", "artes marciais")

let ninja = new heroClass("Kuro", "26", "Ninja", "shuriken")


mago.attack()
guerreiro.attack()
arqueiro.attack()
monge.attack()
ninja.attack()
