const botaoEnviar = document.getElementById('btnEnviar');
const result = document.getElementById('result');

botaoEnviar.addEventListener('click', () => {
    const dataNascimento = document.getElementById('Textstring').value
    const anoNascimento = new Date(dataNascimento).getFullYear()
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - anoNascimento

    result.innerText = `Sua idade é: ${idade} anos`;
});