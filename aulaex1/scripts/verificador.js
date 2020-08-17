function verificar() {
    var data = new Date()
    var idade = data.getFullYear() - Number(document.querySelector('input#idade').value)
    var text = document.querySelector('p#res')
    if (idade == data.getFullYear()) {
        alert("Por favor insira um ano de nascimento")
    }
    else {
        text.innerHTML = `Você tem ${idade} anos`
    }
}