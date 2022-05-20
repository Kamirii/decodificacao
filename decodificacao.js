     const botao = 
     document.querySelector('#botao-cifra-cesar')
     const inputDeslocamento = 
     document.querySelector('#opcao-deslocamento')
     botao.addEventListener('click',()=>{ inputDeslocamento.classList.toggle('show');})
   
       const cifraCesar = document.getElementById("botao-cifra-cesar")
       const base64 = document.getElementById("botao-base64")
     
       const codificaBase = (texto) => {
        inputValor = document.getElementById('input-texto').value; 
        texto =  btoa(inputValor)
        document.getElementById('output-texto').innerHTML = texto;
        return texto
        
    }
    const decodificaBase = (texto) => {
        inputValor = document.getElementById('input-texto').value; 
         texto =  atob(inputValor)
        document.getElementById('output-texto').innerHTML = texto;
        return texto
    }
    
     const codificaCifra = () => {
        inputValor = document.getElementById('input-texto').value
        deslocamento = document.getElementById('opcao-deslocamento').value
        codificado = '' // vazio e vamos preencher com o valor que colocarmos no for
        console.log(deslocamento)
        for(let i = 0; i < inputValor.length; i++){
         let textoCodificado = inputValor[i].charCodeAt()
         let chave = Number(deslocamento)

         if(textoCodificado >= 97 && textoCodificado <= 122){
             let resultado = textoCodificado + chave 
             if(resultado > 122){
                 resultado = 96 + resultado - 122
             }
             codificado += String.fromCharCode(resultado)  
         }

        }
        console.log(codificado)
        document.getElementById('output-texto').innerHTML = codificado;
      
     }

    const decodificaCifra = () => {

     inputValor = document.getElementById('input-texto').value
      let passo = document.getElementById('opcao-deslocamento').value
      let deslocamento = Number(passo)
      let decodificado = ''
      let resultado
     for(let i = 0; i < inputValor.length; i++){
         if(inputValor.charCodeAt(i) >= 65 && inputValor.charCodeAt(i) <= 90){
             console.log(inputValor[i])
             resultado = (((inputValor.charCodeAt(i) - 90)-deslocamento) % 26) + 90
         }else if(inputValor.charCodeAt(i)>=97 && inputValor.charCodeAt(i) <= 122){
            console.log(inputValor[i])
             resultado =(((inputValor.charCodeAt(i)-122)-deslocamento)% 26) + 122
         }else if(inputValor.charCodeAt(i)===32){
            console.log(inputValor[i])
             resultado = 32;
         }
         decodificado += String.fromCharCode(resultado)
     }
     document.getElementById('output-texto').innerHTML = decodificado
     console.log(decodificado)
     return decodificado.toLowerCase()
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
   