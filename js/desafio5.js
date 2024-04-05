const inputPalavras = document.getElementById('PalavrasInput')
const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')

botaoEnviar.addEventListener('click',()=>{
    const palavraDigitada = inputPalavras.value
    clear()
    result.innerHTML =`${palavraDigitada.length} palavras`
})

function clear(){
   inputPalavras.value =""
}