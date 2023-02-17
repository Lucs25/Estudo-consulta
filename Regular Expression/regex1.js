/* //EX1 PONTO: O ponto . irá selecionar qualquer caracter, menos quebras de linha.

// Procura: todos os caracteres menos quebra de linha
const regexp = /./g;

const regexp1 = 'JavaScript é a linguagem.'.replace(regexp, '0'); // 0000000000000000000000000
console.log(regexp1);
 */

/* //EX2 ESCAPAR ESPECIAIS: Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

// Procura: todos os pontos
const regexp = /\./g;
const regexpAlternativa = /[.]/g;

const novoRegex = '999.222.222.11'.replace(regexpAlternativa, '-'); // 999-222-222-11
console.log(novoRegex);
 */

/* //EX3 O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

// Procura: todos os alfanuméricos
const regexp = /\w/g;

const regexp1 = 'Guarda-chuva R$ 23,00.'.replace(regexp, '-'); // ------------ -$ --,--.
console.log(regexp1);
 */

/* //EX4 DIGITO \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].

// Procura: todos os dígitos
const regexp = /\d/g;

const regexp1 = '+55 (21) 2222-2222'.replace(regexp, 'X');
// +XX (XX) XXXX-XXXX.
console.log(regexp1);
 */

/* //EX5 WHITESPACE O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.
// Procura: espaços em branco
const regexp = /\s/g;

const regexp1 ='+55 (21) 2222-  2222  '.replace(regexp, ''); // +55(21)2222-2222
console.log(regexp1);
 */

/* //EX6 QUANTIFICADOR: É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.

// Procura: 4 a's seguidos
const regexp = /aaaa/g;
const regexpAlt = /a{4}/g;

const novoRegex = 'Vaaaai ali por favor.'.replace(regexp, 'a'); // Vai ali por favor.
console.log(novoRegex);
 */

/* /* //EX7 QUANTIFICADOR MIN E MAX: Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.

// Procura: dígitos seguidos de 2 à 3
const regexp = /\d{2,3}/g;
const regexp1 = '222.333.222.42'.replace(regexp, 'X');// X.X.X.X
console.log(regexp1);

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;
const regexpLetras1 = 'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X');// X X X é X
console.log(regexpLetras1);
 */

/* // EX8 MAIS + O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.
// Procura: dígitos em ocorrência de um ou mais
const regexp = /\d+/g;

const regexp1 = '222.333.222.42'.replace(regexp, 'X'); // X.X.X.X
console.log(regexp1);

// Procura: Começa com d, seguido por uma ou mais letras.
const regexpLetras = /d\w+/g;
const regexpLetras1 = 'Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras, 'X'); // Dígitos, X, X, Dito, d
console.log(regexpLetras1);
 */

//EX9 O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.
// Procura: Começa com d, seguido por zero ou mais letras.
//const regexp = /d\w*/g;
//const regexp1 = 'Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X'); //Dígitos, X, X, Dito, X
//console.log(regexp1);

/*EX10 //OPCIONAL ? O sinal ? significa que o caracter é opcional, pode ou não existir.
// Procura: Por regex com p opcional
const regexp = /rege?/g;

const regexp1 = 'Qual é o certo, regexp ou regex?'.replace(regexp, 'Regular Expression');
console.log(regexp1); // Qual é o certo, Regular Expression ou Regular Expression?
 */

/* //EX11 ALTERNADO | O sinal | irá selecionar um ou outro. java|php
// Procura: java ou php (case insensitive)
const regexp = /java|php/gi;

const regexp1 = 'PHP e Java são linguagens diferentes'.replace(regexp, 'X');// X e X são linguagens diferente
console.log(regexp1);
 */

/* //EX12 WORD BOUNDARY \B O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.
// Procura: java (case insensitive)
const regexp = /java/gi;
const regexp1 = 'Java não é JavaScript.'.replace(regexp, 'X'); // X não é XScript.
console.log(regexp1);

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
const regexpBoundary1 = 'Java não é JavaScript.'.replace(regexpBoundary, 'X'); // X não é JavaScript.
console.log(regexpBoundary1)

// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito = /\b\d+\b/gi;
const regexpDigito1 = 'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X'); // O Restaurante25 na Rua X, custa R$ X,X
console.log(regexpDigito1)

const regexpDigito2 = '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'); // 11_22 X-X XéX 77e88
console.log(regexpDigito2)
 */