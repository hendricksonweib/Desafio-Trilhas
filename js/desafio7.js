const compras = document.getElementById('numberRefatorar')
const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')
const valorTotal = []

botaoEnviar.addEventListener('click', () => {
    const valorDasCompras = parseFloat(compras.value)
    valorTotal.push(valorDasCompras)
    clear()
    console.log(valorTotal)

    const soma = valorTotal.reduce((acumulador, valorAtual)=> acumulador + valorAtual,0)
    result.textContent = `O valor total das compras é: R$ ${soma.toFixed(2)}`;
})

function clear(){
    compras.value = ''
}