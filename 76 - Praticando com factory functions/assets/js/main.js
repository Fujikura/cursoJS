function criaCalculadora(){

  return{

    display: document.querySelector('.display'),

    btnClear: document.querySelector('.btn-clear'),

    inicia(){
        this.cliqueBotoes();
        this.pressionaEnter();
    },

    pressionaEnter(){
        this.display.addEventListener('keyup', event =>{
            if(event.keyCode === 13){
                this.realizaConta();
            }
        });
    },

    cliqueBotoes(){
        document.addEventListener('click', (event) => {

            const elemento = event.target;

            if(elemento.classList.contains('btn-num')){
                this.btnParaDisplay(elemento.innerText);
            }

            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }
        
        })
    },

    btnParaDisplay(valor){
        this.display.value += valor;
    },

    clearDisplay(){
      this.display.value = '';
    },

    apagaUm(){
        this.display.value = this.display.value.slice('0', '-1')
    },

    realizaConta(){
        let conta = this.display.value;

        try{            
            conta = eval(conta);

            if(!conta){
                alert('Conta invalida');
                return;
            }

            this.display.value = conta;

        }catch(e){
            alert('Conta invalida');
                return;
        }
    },

  };

};

const calculadora = criaCalculadora();
calculadora.inicia();