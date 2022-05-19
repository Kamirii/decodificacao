
 let inputValor
 let botao 
 let inputDeslocamento
 let cifraCesar
 let base64 
     botao = 
    document.querySelector('#botao-cifra-cesar')
     inputDeslocamento = 
    document.querySelector('#opcao-deslocamento')
    botao.addEventListener('click',()=>{ inputDeslocamento.classList.toggle('show');})
   
    //inputValor = document.getElementById('input-texto').value; 
       cifraCesar = document.getElementById("botao-cifra-cesar")
       base64 = document.getElementById("botao-base64")

     const codificaBase = () => {
        inputValor = document.getElementById('input-texto').value; 
        texto =  btoa(inputValor)
        document.getElementById('output-texto').innerHTML = texto;
        return 
    }
    const codificaCifra = () => {
        inputValor = document.getElementById('input-texto').value;
        alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z']
        document.getElementById('output-texto').innerHTML = "cifraCesar";
       return 
    }
    const decodificaBase = () => {
        inputValor = document.getElementById('input-texto').value; 
         texto =  atob(inputValor)
        document.getElementById('output-texto').innerHTML = texto;
        return 
    }
const checaCondicaoEncode = () => {

    if (base64.checked ==true){
        return codificaBase()
    } 

    if (cifraCesar.checked == true){
        return codificaCifra()
    }  

}

const checaCondicaoDecode = () => {
    inputValor = document.getElementById('input-texto').value; 
    if (base64.checked ==true){
        return decodificaBase()
    }
    if(cifraCesar.checked == true){
      
    }

}
