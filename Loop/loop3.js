/* //EX1 For In

const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const propriedade in carro) {
  console.log(propriedade, carro[propriedade]);
} */

/* //EX2 ARRAYS E FOR...IN

const frutas = ['Banana', 'Morango', 'Uva'];

for(const index in frutas) {
  console.log(index);
}

for(const index in frutas) {
  console.log(frutas[index]);
}
 */

/* //EX3

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}
 */
