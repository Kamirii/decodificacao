
const pegaValorInput = () => {
    let inputValor = 
    document.getElementById('input-texto').value; 
    document.getElementById('output-texto').innerHTML = inputValor;
  
}

function numeroTrocaPosicao(){}

    var botao = 
    document.querySelector('#botao-cifra-cesar')

    var inputDeslocamento = 
    document.querySelector('#opcao-deslocamento')
    botao.addEventListener('click',()=>{ inputDeslocamento.classList.toggle('show');})
   

