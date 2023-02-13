/* //EX1

const listaItens0 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens0 = listaItens0.split(' '); //retorna uma arraya

console.log(arrayItens0) */

/* //EX2

const listaItens2 = ('Camisas Bonés Calças Bermudas Vestidos Saias').split(' ');
const listaItens3 = (' ').split(' ');
const listaItens4 = listaItens2.join(', ')

console.log(listaItens4) */

/* //EX3
const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div').join('section');

console.log(htmlArray);
 */

/* //EX4

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0
let recebimentoTotal = 0

transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ','')
  if(item.descricao.slice(0, 4 ) === 'Taxa')
    taxaTotal += numeroLimpo;
    else if (item.descricao.slice(0, 3 ) === 'Rec') {
      recebimentoTotal +=numeroLimpo;
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);
 */

/* //EX5
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')

console.log(arrayTransportes)
 */

/* //EX6
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

//html = html.replaceAll('span','a');
html = html.split('span').join('a');

console.log(html);
 */