/* //EX1
function areaQuadrado(quadrado) {
  return 10;
}
console.log(2 * areaQuadrado()); */

/* //EX2
function areaQuadrados(quadrado) {
  return quadrado * quadrado;
}

console.log(areaQuadrados(2)); */

/* EX3

addEventListener('click', function() {
  console.log('ciclou')
}) */

/* //EX4

function imc(peso, altura) {
  const imc = peso / (altura ** 2).toFixed(1);
  return imc;
}

console.log(imc(80, 1.80)); // retorna o imc
console.log(imc(820, 1.80)); // retorna o imc e undefined */

/* EX5
-------------------------------------------------------------
function terceiraIdade(idade) {
  if (typeof idade === 'number') {
      if (idade >= 60) {
      console.log('é idoso');
    } else {
      console.log('abaixo de 60');
    }
  }
    console.log('é string');

}

terceiraIdade('aaaa'); */

/* EX6
-------------------------------------------------------------
var profissao = 'Designer';

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro */

/* //EX7-1
function isPar(n1) {
  if( n1 % 2 === 0) {
    return ("É par")
  } return ("não é par")
}
console.log(isPar(2))
*/

/* //EX8 -ARROW FUNCTION

const ratoFilho = corPrimaria =>
  console.log(`o rato é ${corPrimaria}`)
;

ratoFilho('branco');
 */