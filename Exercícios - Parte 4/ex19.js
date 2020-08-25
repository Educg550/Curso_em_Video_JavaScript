function calcular ()
{
    var num = Number(document.getElementById('num').value)
    var res = document.getElementById('res')
    res.innerHTML = ''

    for (var i = 1; i <= 10; i++)
    {
        res.innerHTML += `${num} X ${i} = ${num * i}<br>`
    }

    res.innerHTML += '✅🐍'
}