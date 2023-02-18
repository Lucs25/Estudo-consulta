/* //EX1 REFERÊNCIA DA SELEÇÃO É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.
// Procura: Java
const regexp = /Java/g;

const regexp1 = 'PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script');
// PHP e --JavaScript são linguagens diferentes
// $& será igual à Java// PHP e --JavaScript são linguagens diferentes
// $& será igual à Java
console.log(regexp1);
 */

/* //EX2 GRUPO DE CAPTURA É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.

// Procura: sequência alfanumérica, seguida
// de @, seguido de alfanumérico ou .
const regexp = /(\w+)@[\w.]+/g;

const regexp1 = 'andre@email.com.br'.replace(regexp, '$1@hotmail.com'); // andre@hotmail.com
console.log(regexp1);

 */

/* //EX3 // Procura: sequência alfanumérica, seguida de , seguido espaço de sequência alfanumérica.
const regexp = /(\w+),\s(\w+)/g;

const regexp1 = 'Rafael, Andre'.replace(regexp, '$2 $1'); // Andre Rafael
console.log(regexp1);
 */

/* //EX4 MAIS DO QUE CAPTURA APENAS: Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.
// Procura: qualquer sequência de ta
const regexp = /(ta)+/gi;

const regexp1 = 'Tatata, tata, ta'.replace(regexp, 'Pá'); // Pá, Pá, Pá
console.log(regexp1);
 */

/* //EX5 IGNORAR CAPTURA: Utilize o (?:) para ignorar a captura.
// Procura: qualquer sequência de ta
const regexp = /(?:ta)+/gi;

const regexp1 = 'Tatata, tata, ta'.replace(regexp, 'Pá'); // Pá, Pá, Pá
console.log(regexp1);
*/

/* //EX6 POSITIVE LOOKAHEAD: Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.
// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const regexp = /\d(?=px)/g;

const regexp1 = '2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X'); // 2em, Xpx, 5%, Xpx, Xpx
console.log(regexp1);
 */

/* //EX7 NEGATIVE LOOKAHEAD: Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.
// Procura: dígitos que não possuírem px
// sem selecionar o restante.
const regexp = /\d(?!px)/g;

const regexp1 = '2em, 4px, 5%, 5px, 1px'.replace(regexp, 'X'); // Xem, 4px, X%, 5px, 1px
console.log(regexp1);
 */

/*const regexp1 =
console.log(regexp1); */
/* document.getElementById("demo").innerHTML = regexp1 */