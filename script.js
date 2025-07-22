function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado') // mesma coisa que getElementById
    var classifica = document.querySelector('div#classificacao')

    if (formularioAno.value.length == 0 || formularioAno.value > ano || formularioAno.value.length != 4 || formularioAno.value < 1900) {
        alert('Ano inválido - Verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''

        var img = document.createElement('img') // cria uma Tag img dinamicamente pelo JavaScript
        img.setAttribute('id', 'foto') // seta o atributo id="foto" para a Tag img

        if (formularioSexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-homem.png')
                classifica.value = 'Criança'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
                classifica.value = 'Jovem'
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
                classifica.value = 'Adulto'
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
                classifica.value = 'Idoso'
            }
        } else if (formularioSexo[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-mulher.png')
                classifica.value = 'Criança'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
                classifica.value = 'Jovem'
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
                classifica.value = 'Adulta'
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
                classifica.value = 'Idosa'
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos: <strong>${genero} de ${idade} anos</strong>.`
        classifica.style.textAlign = 'center'
        classifica.innerHTML = `Você é classificado como: <strong>${classifica.value}</strong>`
        resultado.appendChild(img) // adiciona conteúdo na div resultado
    }
}