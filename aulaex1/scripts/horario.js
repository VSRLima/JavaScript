var date = new Date()
var hora =  date.getHours()
var pH = document.querySelector('p#horario')
var pFTH = document.querySelector('p#fotoHora')
pH.innerHTML = `São ${hora}hrs`
if (hora < 12) {
    pFTH.innerHTML = '<img src="img/sunshine.jpg" alt="teste">'
    document.body.style.background = 'wheat'
}
else if (hora < 18) {
    pFTH.innerHTML = '<img src="img/entardecer.jpg" alt="entardecer">'
    document.body.style.background = 'orange'
}
else {
    pFTH.innerHTML = '<img src="img/noite.png" alt="noite">'
    document.body.style.background = 'grey'
}