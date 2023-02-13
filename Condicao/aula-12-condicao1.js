var agora = new Date()
var hora = agora.getDay
if (hora > 7 && hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
}  else {
    console.log ('Boa noite')
}