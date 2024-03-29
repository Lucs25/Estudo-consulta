/* //Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para funções dentro de funções

//EX1 DEBUGGING

let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}

funcao1()

/* func1, possui acesso à
item1 e item2

func2, possui acesso à
item1, item2 e item3 */

//EX2

function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total);
  }
}

const ativarIncrementar = contagem();
ativarIncrementar()
/* ativarIncrementar(); // 1
ativarIncrementar(); // 2
ativarIncrementar(); // 3 */
