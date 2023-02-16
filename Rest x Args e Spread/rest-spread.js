//A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.
//Args retorna todos os argumentos, rest retorna apenas os que não foram utilizados

/* //EX1
function perimetroForma(lado, totalLados = 4) {
  console.log(arguments)
  return lado * totalLados;
}

perimetroForma(10);
perimetroForma(10, 4, 20);
 */

//EX1 REST
//só pode existir apenas um parametro REST por argumento e deve ser o último

/* function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');
 */

/* //EX1 Spread Operator
//Assim como o rest, o operador Spread também utiliza os ...
//para ser ativado. O spread irá distribuir um item iterável, um por um.

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);
 */

/* //EX2
//O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximo); */

/* //EX3
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray)

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
console.log(fraseArray);
 */

//Desafio1

/* // Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();
 */

/* //Desafio2
// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push('abacaxi', ...frutas);

console.log(comidas);
 */