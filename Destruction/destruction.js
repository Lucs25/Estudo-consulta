
//Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.

/* //EX1

const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
}

const {marca, ano} = carro;

console.log(marca); // Fiat
console.log(ano); // 2018
 */

/* //EX2

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {livros, videos} = cliente.compras.digitais;

console.log(livros);
console.log(videos);
 */

/* //EX3 Nest = É possível aninhar uma desestruturação dentro de outra.

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);
 */

/* //EX4

const cliente = {
  nome: 'Andre',
  compras: 10,
}

const {nome, compras} = cliente;
// ou
const {nome: nomeCliente, compras: comprasCliente} = cliente;
 */

/* //EX5
const cliente = {
  nome: 'Andre',
  compras: 10,
}

const {nome, compras, email = 'email@gmail.com', cpf} = cliente;
console.log(email) // email@gmail.com
console.log(cpf) // undefined */

/* //EX6
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

//Ou com destructuring
const [primeira, segunda, terceira] = frutas;
 */

/* //EX6
function handleKeyboard(event) {
  console.log(event.key);
}
//ou com Destructuring
function handleKeyboard({key}) {
  console.log(key);
}

document.addEventListener('keyup', handleKeyboard);
*/

/* // Desafio1

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles

console.log(backgroundColor);
console.log(margin);
console.log(color);
 */

/* //Desafio2 Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = ['HTML', 'JavaScript']

console.log(cursoAtivo,cursoInativo)
 */

/* //Desafio3 Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

console.log(bobCor); */