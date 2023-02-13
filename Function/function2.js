/* //EX1 CALL

const fruta = {
  fruta1: 'morango',
}

function darOi() {
  console.log(this.fruta1);
  //console.log(this.fruta); //{ fruta1: 'morango' }
}

// darOi.call(fruta); //morango
darOi.call(fruta); // { fruta1: 'morango' }
 */

/* //EX2 CALL

function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('li');

const novoSeletor = {
  element: document.querySelector('ul')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');
 */

/* //EX3 CALL

Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas = ['Uva', 'Maçã', 'Banana'];
frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima
 */

/* //EX4 APPLY - funciona igual CALL, porém os argumentos da função são passados através do array

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar
 */

/* //EX5 - BIND - retorna a função com um novo contexto de this

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(200, 10));
// Honda acelerou 200 em 10
 */