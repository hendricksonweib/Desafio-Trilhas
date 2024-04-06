## desafio#1
```sh
 const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')

botaoEnviar.addEventListener('click', () => {
    const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"))
    const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"))
    const nota3 = parseFloat(prompt("Digite a nota da terceira avaliação:"))

    const media = (nota1 + nota2 + nota3) / 3

    result.innerText = `A média final de Aline é: ${media.toFixed(2)}`
})

```
---
## desafio#2
```sh
 const botaoEnviar = document.getElementById('btnEnviar')
const result = document.getElementById('result')

botaoEnviar.addEventListener('click', () => {
    const numerosDigitados = prompt("Digite os números separados por vírgula:")
    const numeros = numerosDigitados.split(',').map(numero => parseInt(numero.trim()))

    const menorNumero = Math.min(...numeros)
    const maiorNumero = Math.max(...numeros)

    result.innerText = `O menor número digitado é: ${menorNumero}\nO maior número digitado é: ${maiorNumero}`
})

```

---
## desafio#3
```sh
 const frascos = [12, 5, 23, 17, 8, 14, 3, 19]

const bubbleSort = (array) => {
    let trocado;
    do {
        trocado = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                trocado = true
            }
        }
    } while (trocado)
};

bubbleSort(frascos)
console.log(frascos)
```
---
## desafio#4
```sh
const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
const numerosPrimos = []

const ehPrimo = (numero) => {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
};

numeros.forEach((numero) => {
    if (ehPrimo(numero)) {
        numerosPrimos.push(numero)
    }
});

console.log("Números primos:", numerosPrimos)
```
---
## desafio#5
```sh
 const frase = prompt("Digite uma frase:")
const palavras = frase.split(" ")

const numeroPalavras = palavras.length

console.log(`A frase "${frase}" possui ${numeroPalavras} palavras.`)

```
---
## desafio#6
```sh
 function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

const numero = 12
const fatorial = calcularFatorial(numero)

console.log(`O fatorial de ${numero} é ${fatorial}.`)

```
---
## desafio#7
```sh
 const precoItem1 = 2.50
const precoItem2 = 3.75
const precoItem3 = 1.99

const valorTotal = precoItem1 + precoItem2 + precoItem3

console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}.`)

```
---
## desafio#8
```sh
 const valorMultaPorDia = 0.50
const diasAtraso = 7

const multaTotal = valorMultaPorDia * diasAtraso

console.log(`O usuário deverá pagar R$ ${multaTotal.toFixed(2)} de multa à biblioteca.`)

```
---
## desafio#9
```sh
 const pontosDeVidaInicial = 100
const danoPorAtaque = 20
const numeroDeAtaques = 3

const pontosDeVidaRestantes = pontosDeVidaInicial - (danoPorAtaque * numeroDeAtaques)

console.log(`Após ${numeroDeAtaques} ataques, o personagem terá ${pontosDeVidaRestantes} pontos de vida restantes.`)

```
---
## desafio#10
```sh
 const texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY"
let contadorLetrasMaiusculas = 0

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i]
    if (letra >= 'A' && letra <= 'Z') {
        contadorLetrasMaiusculas++
    }
}

console.log(`O texto possui ${contadorLetrasMaiusculas} letras maiúsculas.`)

```
---
## desafio#11
```sh
 function calcularIdade(dataNascimento) {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth() + 1
    const diaAtual = dataAtual.getDate()

    const anoNascimento = parseInt(dataNascimento.substring(0, 4))
    const mesNascimento = parseInt(dataNascimento.substring(5, 7))
    const diaNascimento = parseInt(dataNascimento.substring(8, 10))

    let idade = anoAtual - anoNascimento

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--
    }

    return idade
}

const dataNascimento = "1990-05-15"
const idade = calcularIdade(dataNascimento)

console.log(`A idade da pessoa é ${idade} anos.`)
```