const numeroDigitado = document.getElementById('numberPerson')
const botaoEnviar = document.getElementById('btnEnviar')
const resultado = document.getElementById('result')

const listaDeNumeros = []

botaoEnviar.addEventListener('click', () => {
    listagemDeValores()
    clear()
})

const listagemDeValores = () => {
    let valorDoInput = numeroDigitado.value
    listaDeNumeros.push(parseInt(valorDoInput))
    valorDoInput? '' : alert('insira um número')
    const valorMaior = Math.max(...listaDeNumeros)
    const valorMenor = Math.min(...listaDeNumeros)
    resultado.innerHTML = `
    seu menor valor é:${valorMenor}
    <br/>
    seu maior valor é:${valorMaior}
    `
}


const clear = () => {
    numeroDigitado.value = ''
}

