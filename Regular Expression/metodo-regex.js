/* //EX1
const regexp = /\w+/gi;

//Se passarmos uma string, não precisamos dos e devemos utilizar \\ para meta characters, pois é necessário escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

const item1 = 'JavaScript Linguagem 101'.replace(regexpObj1, 'X'); // X X X
console.log(item1);
*/

/* //EX2 PROPRIEDADES: Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma. const regexp = /\w+/gi;

regexp.flags; // 'gi'
regexp.global; // true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // '\w+'
*/

/* //EX3 REGEXP.TEST() O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

const regexp = /Java/g;
const frase = 'JavaScript e Java';

regexp.lastIndex; // 0
regexp.test(frase); // true
regexp.lastIndex; // 4
regexp.test(frase); // true
regexp.lastIndex; // 17
regexp.test(frase); // false
regexp.lastIndex; // 0
regexp.test(frase); // true (Reinicia
regexp.lastIndex;  // 4
 */

/* //EX4 REGEXP.EXEC() O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.
const regexp = /\w{2,}/g;
const frase = 'JavaScript, TypeScript e CoffeeScript';

console.log(regexp.exec(frase));
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
regexp.exec(frase);
// ["TypeScript", index: 12, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
regexp.exec(frase);
// ["CoffeeScript", index: 25, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
regexp.exec(frase);
// null
regexp.exec(frase); // Reinicia
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
 */

//EX5 STR.MATCH(): O match() é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.

const regexp = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase = 'JavaScript, TypeScript e CoffeeScript';

console.log(frase.match(regexp))
// ['JavaScript', 'TypeScript', 'CoffeeScript']


console.log(frase.match(regexpSemG))
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
