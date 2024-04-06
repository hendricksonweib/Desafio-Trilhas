const textoDigitado = document.getElementById('Textstring')
const botaoConverter = document.getElementById('btnEnviar')
const resultado = document.getElementById('result')

botaoConverter.addEventListener('click', ()=>{
    const valorDigitado = textoDigitado.value
    const valorMaiusculo = valorDigitado.toUpperCase()
    clear()
    resultado.innerText = valorMaiusculo
})
function clear(){
    textoDigitado.value=''
}