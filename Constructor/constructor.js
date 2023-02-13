/* // EX1

function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
console.log(honda)

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;
console.log(fiat)
 */

/* // EX2

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro('Mazda', 5000);

 */

/* //EX3

function Ccc(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = function() {
    this.element().classList.add('ativar');
  }
}

const LLL = new Ccc('ul');
LLL.ativar('ativar')

 */

/* //EX4

function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom('ul');
lista.ativo('111');

const lastLi = new Dom('li:last-child');
lastLi.ativo('222');
 */

/* //EX5

function Pessoa(nome, idade) {
  this.andar = function(passos) {
    return `${nome} ${passos} e tem ${idade} anos`;
  };
}

const Pessoa1 = new Pessoa('Lucas','29'); //Pessoa1.nome - Pessoa1.idade Pessoa1.andar()
console.log(Pessoa1.andar('andou 30 passos'))
 */