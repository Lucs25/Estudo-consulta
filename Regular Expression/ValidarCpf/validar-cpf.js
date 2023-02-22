export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$2');
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }
  validar(cpf) {
    const matchCpf= cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCpf && matchCpf[0] === cpf)
  }
  validarNaMudanca(cpfElment) {
    if(this.validar(cpfElment.value)) {
      cpfElment.value = this.formatar(cpfElment.value);
    } else {
      
    }
  }
  adicionarEvento() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    })
  }
  iniciar() {
    this.adicionarEvento();
    return this;
  }
}