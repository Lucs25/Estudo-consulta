var idade = 17
console.log(`Você tem ${idade} anos`)
if(idade < 16) {
    console.log('Você não pode votar')
} else if (idade < 18 || idade > 65) {
    console('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}