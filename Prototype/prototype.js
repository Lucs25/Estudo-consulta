//EX1

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}

const andre = new Pessoa('André', 28);

console.log(andre,(andre.andar())); //Pessoa { nome: 'André', idade: 28 } André andou
console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined


/* //EX2

const pais = 'Brasil';
const cidade = new String('Rio');
console.log((cidade).slice(1));

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;
 */

/* //EX3
Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);
 */

/*
//EX4

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const Lucas1 = new Pessoa('Lucas', 'Raymundo', '29');

console.log(Lucas1.nomeCompleto());
 */
