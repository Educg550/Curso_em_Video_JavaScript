function horario()
{
    var agora = new Date()
    var hora = agora.getHours()
    var mins = agora.getMinutes()
    var txta1 = document.getElementById('txta1')
    var txta2 = document.getElementById('txta2')
    var txtitulo = document.getElementById('hora')
    var img = document.getElementById('img')
    
    if (mins < 10 && hora < 10) //FORMATAÇÃO DO HORÁRIO
    {
        txta1.innerHTML = `Agora são exatamente <strong>0${hora}:0${mins}h</strong>`
    }
    else if (mins < 10)
    {
        txta1.innerHTML = `Agora são exatamente <strong>${hora}:0${mins}h</strong>`
    }
    else if (hora < 10)
    {
        txta1.innerHTML = `Agora são exatamente <strong>0${hora}:${mins}h</strong>`
    }
    else
    {
        txta1.innerHTML = `Agora são exatamente <strong>${hora}:${mins}h</strong>`
    }
    
    
    if (hora < 6)
    {
        txtitulo.innerHTML = 'Boa Madrugada!'
        txta2.innerHTML = 'Tenha uma boa madrugada!'
        img.src = "https://i.pinimg.com/originals/5d/3d/df/5d3ddf1f7917d279269cdd7a7e76eb7b.gif"
    }
    else if (hora < 12)
    {
        txtitulo.innerHTML = 'Bom Dia!'
        txta2.innerHTML = 'Tenha um bom dia!'
        img.src = "https://pics.loveforquotes.com/levanta-gay-bora-trabalhar-saquirylxo-60908322.png"
    }
    else if (hora == 12)
    {
        txtitulo.innerHTML = 'Bom Dia!'
        txta2.innerHTML = 'Tenha um bom almoço!'
        img.src = "https://i.redd.it/u74o8zl6rk021.jpg"
    }
    else if (hora < 19)
    {
        txtitulo.innerHTML = 'Boa Tarde!'
        txta2.innerHTML = 'Tenha uma boa tarde!'
        img.src = "https://www.momentodivino.com.br/img/imagens3/abencoada-tarde-1918XLIuW9w9l6.jpg"
    }
    else
    {
        txtitulo.innerHTML = 'Boa Noite!'
        txta2.innerHTML = 'Tenha uma boa noite!'
        img.src = "https://i.pinimg.com/originals/28/e4/cb/28e4cb71925d6bbf3ff5fc10b415760e.jpg"
    }
}