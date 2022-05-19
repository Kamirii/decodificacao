
 let inputValor

    let botao = 
     document.querySelector('#botao-cifra-cesar')
    let  inputDeslocamento = 
     document.querySelector('#opcao-deslocamento')
     botao.addEventListener('click',()=>{ inputDeslocamento.classList.toggle('show');})
   
       let cifraCesar = document.getElementById("botao-cifra-cesar")
       let base64 = document.getElementById("botao-base64")
      

     const codificaBase = () => {
        inputValor = document.getElementById('input-texto').value; 
        texto =  btoa(inputValor)
        document.getElementById('output-texto').innerHTML = texto;
        

    }
        
     const codificaCifra = () => {
        inputValor = document.getElementById('input-texto').value
        const deslocamento = document.getElementById('opcao-deslocamento').value
        let codificado = '' // vazio e vamos preencher com o valor que colocarmos 
        let resultado
        for(let i = 0; i < inputValor.length; i ++){
            if(inputValor.charCodeAt(i) >= 65 && inputValor.charCodeAt(i)<= 90){
                resultado = (((inputValor.charCodeAt(i) - 65)+ deslocamento)% 26) + 65
            } else if(inputValor.charCodeAt(i) >= 97 && inputValor.charCodeAt(i)<= 122){
                resultado = (((inputValor.charCodeAt(i)- 97) + deslocamento) % 26 ) +97;
            } else if (inputValor.charCodeAt(i)===32 ){
                resultado = 32;
            }
            codificado += String.fromCharCode(resultado);
        }
        document.getElementById('output-texto').innerHTML = codificado;
        return codificado.toUpperCase()
     }


    const decodificaBase = (texto) => {
        inputValor = document.getElementById('input-texto').value; 
         texto =  atob(inputValor)
        document.getElementById('output-texto').innerHTML = texto;
        return texto
    }

    const decodificaCifra = () => {
    
     inputValor = document.getElementById('input-texto').value
     const deslocamento = document.getElementById('opcao-deslocamento').value
     let codificado = ''
     let resultado
     for(let i = 0; i < codificado.length; i++){
         if(inputValor.charCodeAt(i)>= 65 && inputValor.charCodeAt(i) <= 90){
             resultado = (((codificado.charCodeAt(i) - 90)-deslocamento) % 26) + 90
         }else if(inputValor.charCodeAt(i)>=97 && inputValor.charCodeAt(i)<= 122){
             resultado =(((codificado.charCodeAt(i)-122)-deslocamento)% 26) + 122
         }else if(inputValor.charCodeat(i)===32){
             resultado = 32;
         }
         codificado +=String.fromCharCode(resultado)
     }
     document.getElementById('output-texto').innerHTML = codificado;
     return codificado.toLowerCase()
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
      return decodificaCifra()
    }

}
