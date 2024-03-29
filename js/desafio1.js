const namePerson = document.getElementById('namePerson')
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const btnEnviar = document.getElementById('btnEnviar')
const tableBody = document.getElementById('body')

const valores = () => {
    const person = namePerson.value
    const firstNote = parseFloat(nota1.value)
    const secundNote = parseFloat(nota2.value)
    const thirdNote = parseFloat(nota3.value)
    const mediaNote = parseFloat((firstNote + secundNote + thirdNote) / 3).toFixed(1)
    return [person, firstNote, secundNote, thirdNote, mediaNote]
}

btnEnviar.addEventListener('click', () => {
    filter()
})

const filter = () => {
    if (namePerson.value == '') {
        alert('insira o nome do aluno')
    }
    else if (nota1.value == '') {
        alert('insira a primeira nota do aluno')
    }
    else if (nota2.value == '') {
        alert('insira a segunda nota do aluno')
    }
    else if (nota3.value == '') {
        alert('insira a terceira nota do aluno')
    } else adicionar()
}

const adicionar = () => {
    const [person, firstNote, secundNote, thirdNote, mediaNote] = valores()

    const row = document.createElement('tr')

    const personRow = document.createElement('td')
    personRow.textContent = person
    row.appendChild(personRow)

    const firstNoteRow = document.createElement('td')
    firstNoteRow.textContent = firstNote
    row.appendChild(firstNoteRow)

    const secundNoteRow = document.createElement('td')
    secundNoteRow.textContent = secundNote
    row.appendChild(secundNoteRow)

    const thirdNoteRow = document.createElement('td')
    thirdNoteRow.textContent = thirdNote
    row.appendChild(thirdNoteRow)

    const mediaNoteRow = document.createElement('td')
    mediaNoteRow.textContent = mediaNote
    row.appendChild(mediaNoteRow)

    const situRow = document.createElement('td');
    situRow.textContent = mediaNote > 7 ? 'Aprovado' : 'Reprovado';
    row.appendChild(situRow);

    tableBody.appendChild(row)
    clear()
}

const clear = () => {
    namePerson.value = '';
    nota1.value = '';
    nota2.value = '';
    nota3.value = '';
}
