const numeroDigitado = document.getElementById('numberPrimo');
const botaoEnviar = document.getElementById('btnEnviar');
const resultado = document.getElementById('result');
const listaDeNumeros = [];

botaoEnviar.addEventListener('click', () => {
    const valorDoNumero = parseInt(numeroDigitado.value)
    numerosPrimo(valorDoNumero)
    resultado.innerHTML= listaDeNumeros
   clear()
});

const numerosPrimo = (numero) => {
    if (numero <= 1) return false

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false
        }
    }
   
    listaDeNumeros.push(numero);
    return true;
};

function clear (){
 numeroDigitado.value = ''
}