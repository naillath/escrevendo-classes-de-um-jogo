# Projeto de Classes de um Jogo em JavaScript

Este é um projeto de JavaScript que envolve a criação de uma classe genérica que representa um herói de uma aventura. A classe `heroClass` possui as seguintes propriedades:

- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: O tipo do herói (por exemplo, guerreiro, mago, arqueiro, monge, ninja).
- `weapon`: A arma que o herói utiliza.

Além disso, a classe `heroClass` possui um método chamado `attack()`, que exibe uma mensagem com base no tipo do herói e na arma que ele está usando. A mensagem é da forma: "o {tipo} atacou usando {ataque}", onde o {tipo} é substituído pelo tipo do herói e {ataque} é substituído pela descrição da arma de acordo com a tabela abaixo:

- Se for um mago, o ataque é "usou magia".
- Se for um guerreiro, o ataque é "usou espada".
- Se for um arqueiro, o ataque é "usou arco".
- Se for um monge, o ataque é "usou artes marciais".
- Se for um ninja, o ataque é "usou shuriken".

## Exemplo de Uso

Aqui estão alguns exemplos de como usar a classe `heroClass`:

```javascript
let mago = new heroClass("Naillath", "28", "Mago", "magia");
let guerreiro = new heroClass("Apheru", "27", "Guerreiro", "espada");
let arqueiro = new heroClass("Khalled", "28", "Arqueiro", "arco");
let monge = new heroClass("Shiro", "25", "Monge", "artes marciais");
let ninja = new heroClass("Kuro", "26", "Ninja", "shuriken");

mago.attack();        // Exibirá "O Mago Naillath atacou usando magia."
guerreiro.attack();   // Exibirá "O Guerreiro Apheru atacou usando espada."
arqueiro.attack();    // Exibirá "O Arqueiro Khalled atacou usando arco."
monge.attack();       // Exibirá "O Monge Shiro atacou usando artes marciais."
ninja.attack();       // Exibirá "O Ninja Kuro atacou usando shuriken."
```

Esse projeto demonstra o uso de variáveis, operadores, laços de repetição, estruturas de decisão, funções, classes e objetos em JavaScript. É um ótimo exercício para praticar esses conceitos e melhorar suas habilidades de programação em JavaScript. Bons estudos! 😉