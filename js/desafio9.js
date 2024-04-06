const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')

let totalHP = 100
const danoHP = 20
botaoEnviar.addEventListener('click', () => {
  const vida = totalHP - danoHP
  totalHP = vida
  result.innerText = `sua vida atual é ${vida}`
})

