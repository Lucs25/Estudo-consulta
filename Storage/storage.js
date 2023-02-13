/* //EX1
localStorage.nome = 'Lucas'

console.log(localStorage.nome);
 */

saveValues('Lucas', 19);

function saveValues(name, value) {
  localStorage[name]= value;
}
