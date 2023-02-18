/* //EX1 ANCHOR BEGINNING Com o ^ é possível informar que a busca deve ser iniciada no início da linha.

// Procura: sequência de alfanuméricos
// no início da linha.
const regexp = /^\w+/g;

const regexp1 = `andre@origamid.com contato@origamid.com`.replace(regexp, 'X');// X@origamid.com // contato@origamid.com
console.log(regexp1)
 */

/* //EX2 Procura: sequência de alfanuméricos  no final da linha.
const regexp = /\w+$/g;

const regexp1 = `andre@origamid.com contato@origamid.com`.replace(regexp, 'X'); // andre@origamid.X contato@origamid.X
console.log(regexp1);
 */

/* //EX3
// Procura: sequência de alfanuméricos
// no final da linha.
const regexp = /\w+$/gm;

const regexp1 = `andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
console.log(regexp1);
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
const regexp2 = /^\w+/gm;
const regexp3 = `andre@origamid.com
contato@origamid.com`.replace(regexp2, 'X');
console.log(regexp3)
// X@origamid.com
// X@origamid.com
 */

/* //EX4 LINE FEED \N O \n irá selecionar o final de uma linha, quando criamos uma nova.
const regexp = /\n/g;

const regexp1 = `andre@origamid.com \n contato@origamid.com`.replace(regexp, '---');
console.log(regexp1)
// andre@origamid.com---contato@origamid.com

const regexp2 =`andre@origamid.com
contato@origamid.com`.replace(regexp, ' XXX ');
console.log(regexp2)
// andre@origamid.com XXX contato@origamid.com
*/

/* //EX5 UNICODE \U O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.
// Procura: @ ou ©
const regexp = /\u0040|\u00A9/g;

const regexp1 = 'andre@origamid.com ©'.replace(regexp, '---');
console.log(regexp1);
// andre---origamid.com ---

 */

/* document.getElementById("demo").innerHTML = regexp1 */
/* console.log(regexp1); */
