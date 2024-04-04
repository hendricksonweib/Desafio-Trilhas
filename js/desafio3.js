const numeroDoFrasco = document.getElementById('numberFrasco')
const botaoEnviar = document.getElementById('btnEnviar')
const resultado = document.getElementById('result')
const listaDeFrascos = []

botaoEnviar.addEventListener('click', () => {
    valoresOrdenador()
    clear()
    resultado.innerHTML=`Seus frascos são:<br/>
    ${listaDeFrascos}
    `
})

const valoresOrdenador = ()=>{
    const valorDosFrascos = parseInt(numeroDoFrasco.value)
    listaDeFrascos.push(valorDosFrascos)
    listaDeFrascos.sort((a, b) => a - b)
}

const clear = () => {
    numeroDoFrasco.value = ''
}

// 23, 16, 11, 8, 19, 14, 5, 21.