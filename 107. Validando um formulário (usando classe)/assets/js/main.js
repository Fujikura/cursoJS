class ValidaFormulario {
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.senha = this.formulario.querySelector('.senha');
    this.repetirSenha = this.formulario.querySelector('.repetir-senha');
    this.eventos();
  }

  eventos(){
    this.formulario.addEventListener('submit', evento => {
      this.handleSubmit(evento);
    });
  }

  handleSubmit(evento){
    evento.preventDefault();

    const camposValidos = this.camposValidos()
    const senhasValidas = this.senhasValidas();

    if(camposValidos && senhasValidas){
      this.formulario.submit();
    }
  }

  senhasValidas(){

    let valid = true;
    if(this.senha.value !== this.repetirSenha.value){
      valid = false;
      this.criaErro(this.senha, 'Senha e confirmação de senha não confere');
      this.criaErro(this.repetirSenha, 'Senha e confirmação de senha não confere');
    }

    if(this.senha.value.length < 6 || this.senha.value.length > 12 ){
      valid = false;
      this.criaErro(this.senha, 'A senha precisa ter entre 6 a 12 caracteres');
    }
    return valid;
  }

  camposValidos(){
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
        const label = campo.previousElementSibling.innerHTML;

      if(campo.value === ""){
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
      }
      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid = false;
      }
      
    }
    return valid;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12){
      this.criaErro(campo, 'O usuário precisa ter entre 3 e 12 caracteres');
      valid = false;
    }

    if(!usuario.match(/[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e números');
      valid = false;      
    }
    return valid;
  }

  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.valida()){
      this.criaErro(campo, 'CPF inválido');
      return false;
    }
    return true;
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
