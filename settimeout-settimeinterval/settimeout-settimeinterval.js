/* //EX 1 - SETTIMEOUT():método assíncrono que ativa o callback após tempo

function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 400, 'Depois de 5s');

espera('descanso')

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100 * i)
}
 */


/* //EX 2 setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}
 */

/* //EX3
function mudarClasse() {
  document.body.classList.toggle('active');
}

setInterval(mudarClasse, 5000)
 */

/* //EX4

let contar = function(inicio) {
    console.log(inicio);
}

contar(1)
 */

/* //EX5 -Desafio - Cronomometro

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo = i++;
  }, 100)
  iniciar.setAttribute('disabled','');
}

function pausarTempo() {
  clearInterval(timer)
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  tempo = 0;
  i = 0;
}
 */