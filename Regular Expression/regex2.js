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

/* console.log(regexp1); */