// 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  eSequencia(){
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  geraNovoCpf(){
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    this.novoCpf = cpfSemDigitos + digito1 + digito2;
  }

  geraDigito(cpfSemDigito){
    let total = 0;
    let reverso = cpfSemDigito.length + 1;

    for(let stringNumerica of cpfSemDigito){
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida(){
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.eSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
  
}

// let validaCPF = new ValidaCPF('070.987.720-03');
validaCPF = new ValidaCPF('293.712.938-29');

if(validaCPF.valida()){
  console.log('CPF válido');
}else{
  console.log('CPF inválido');  
}
