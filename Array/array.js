
/* //EX1

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul
 */


/* //EX3

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

const novaArrray = carros.push('Ferrari'); // 6
console.log(carros)

const arrayCopia = carros.fill('Ferrari',2)
//const arrayCopia = carros.fill('Ferrari')
console.log(arrayCopia)
 */

/* //EX4

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2); // ['Barco', 'Aviao', 'Carro', 'Moto'];
console.log(transportes)

const maisTransportes = [].concat(transporte1, transporte2, 'Van'); // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
console.log(maisTransportes)
 */

/* //EX5 Selecionar o último elemtno da array

var array = [1, 2, 3, 4, 5];
var ultimo = array[array.length - 1];
console.log(ultimo);
 */