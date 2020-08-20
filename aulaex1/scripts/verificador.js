function verificar() {
    var data = new Date()
    var anoNasc = Number(document.querySelector('input#idade').value)
    var text = document.querySelector('div#res')
    if (anoNasc == 0 || anoNasc > data.getFullYear()) {
        alert("Confira os dados inseridos e tente novamente!!")
    }
    else {
        var idade = data.getFullYear() - anoNasc
        var sex = document.getElementsByName('MF')//Creates a list to whatever has the same name
        var genero = ""
        var img = document.createElement('img')//Creates an element, and here is creating a tag img
        img.setAttribute('id', 'foto')//Settings it's attribute as an id called foto to the tag img
        if (sex[0].checked) {//To catch the first element on the list
            genero = 'um homem!'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'img/bebe-h.jpeg')
            }
            else if (idade < 21) {
                //Teen
                img.setAttribute('src', 'img/jovem-h.jpeg')
            }
            else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'img/adulto-h.jpeg')
            }
            else {
                //Old
                img.setAttribute('src', 'img/velho-h.jpeg')
            }
        }
        else if (sex[1].checked) {//To catch the secomd element on the list
            genero = 'uma mulher!'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'img/bebe-m.jpeg')
            }
            else if (idade < 21) {
                //Teen
                img.setAttribute('src', 'img/jovem-m.jpeg')
            }
            else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'img/adulto-m.jpeg')
            }
            else {
                //Old
                img.setAttribute('src', 'img/velha-m.jpeg')
            }
        }
        text.innerHTML = `<p>Você tem ${idade} anos e é ${genero}</p>`
        text.appendChild(img)
    }
}