const dias = document.getElementById('numberRefatorar')
const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')


botaoEnviar.addEventListener('click', () => {
  const numeroDeDias =   parseInt(dias.value)
  const calculoDaMulta = (numeroDeDias * 0.50).toFixed(2)

  result.innerText = `Sua multa total deu R$ ${calculoDaMulta}`
})

function clear(){
    dias.value = ''
}