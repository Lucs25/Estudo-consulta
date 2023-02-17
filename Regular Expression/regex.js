//Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

/* //EX1 -
// Procura: a
const padraoRegexp = /J/;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'B');
console.log(novoTexto);// BavaScript
 */

/* //EX2 LITERAL - Utilizar um caracter literal irá realizar uma busca específica deste caracter.

// Procura: J seguido de a, v e a
const regexp = /Java/;

'JavaScript'.replace(regexp, 'Type');
// TypeScript
 */

/* //EX3 FLAG: G - As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

// Procura: Todo a
const regexp = /a/g;

const regexp1 = 'JavaScript'.replace(regexp, 'i'); // JiviScript
console.log(regexp1);
 */

/* //EX4 FLAG: I(intesive) - Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.
// Procura: Todo PE, Pe, pE e pe
const regexp = /Pe/gi;

const regexp1 = 'Perdeu perdido'.replace(regexp, 'Ba'); // Bardeu Bardido
console.log(regexp1);
 */

/* //EX5 CHARACTER CLASS: Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

// Procura: Todo a, A, i, I
const regexp = /[ai]/gi;

const regexp1 = 'JavaScript'.replace(regexp, 'u'); // JuvuScrupt
console.log(regexp1);
 */

/* //EX6 CHARACTER CLASS E ESPECIAIS: Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.
// Procura: - ou .
const regexp = /[.-]/g;
//const regexp = /\./g;

const regexp1 ='111.222-333-44'.replace(regexp, ''); // 11122233344
console.log(regexp1);
 */

/* //EX7 UM OU OUTRO Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.
// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexp = /Bra[sz]il/g;

const regexp1 = 'Brasil é com z: Brazil'.replace(regexp, 'Prazer'); // Prazer é com z: Prazer
console.log(regexp1);
 */

//EX8 NEGAR: Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

/* // Procura: tudo que não estiver entre a e z
const regexp = /[^a-z]/g;

const regexp1 ='Brasil é com z: Brazil'.replace(regexp, ' '); // rasil   com z   razil
console.log(regexp1)
 */