const numberFatorial = document.getElementById('numberRefatorar')
const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')

function calcularFatorial(numero) {
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    return fatorial
}

botaoEnviar.addEventListener('click',()=>{
    const valorFatorial = parseInt(numberFatorial.value)
    const resultadoFatorial = calcularFatorial(valorFatorial);
    result.textContent = `O fatorial de ${valorFatorial} é ${resultadoFatorial}`
})