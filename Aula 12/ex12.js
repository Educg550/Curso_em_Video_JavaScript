var hora = 7.30

if (hora < 6)
{
    console.log(`Boa madrugada! Agora são exatamente ${hora.toFixed(2).replace('.', ':')}h`)
}
else if (hora < 12)
{
    console.log(`Bom dia! Agora são exatamente ${hora.toFixed(2).replace('.', ':')}h`)
}
else if (Number.parseInt(hora) == 12)
{
    console.log(`Bom almoço! Agora são exatamente ${hora.toFixed(2).replace('.', ':')}h`)
}
else if (hora < 19)
{
    console.log(`Boa tarde! Agora são exatamente ${hora.toFixed(2).replace('.', ':')}h`)
}
else
{
    console.log(`Boa noite! Agora são exatamente ${hora.toFixed(2).replace('.', ':')}h`)
}