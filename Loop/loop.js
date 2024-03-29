/* //EX1

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

console.log(carros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
 */

/* //EX2

const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map(item =>
  'Carro ' + item
);

console.log(newCarros); // [ 'Carro Ford', 'Carro Fiat', 'Carro Honda' ];
 */

/* //EX3

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);
// [15, 10, 20, 25];


/* //alternativa 1
const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
console.log(nomesAulas);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1'] */

/* //alternativa2
const nomesAulas = aulas.map(aula => aula.nome);
console.log(nomesAulas);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1'] */
