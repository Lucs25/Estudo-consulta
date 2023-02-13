/* //EX1

function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element: element,
    text: text,
  }
}

const comprarBtn = createButton('Comprar');
 */

/* //EX2

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,//permite acesso aos objetos
    sobrenome,//permite acesso aos objetos
    andar, //permite acesso aos objetos
    nadar,//permite acesso aos objetos
  }
}

const designer = criarPessoa('André', 'Rafael');
 */