var agora = new Date()
diaSem = agora.getDay()
/*
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/

switch (diaSem)
{
    case 0:
        console.log('Bom Domingo!')
        break
    case 1:
        console.log('Boa Segunda!')
        break
    case 2:
        console.log('Boa Terça!')
        break
    case 3:
        console.log('Boa Quarta! (feijuca hmmmmmm)')
        break
    case 4:
        console.log('Boa Quinta!')
        break
    case 5:
        console.log('Boa Sexta!')
        break
    case 6:
        console.log('Bom Sábado!')
        break
    default:
        console.log('WTF Dude, dia inválidor!')
        break
}