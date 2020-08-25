function calcular()
{
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var pass = Number(document.getElementById('pass').value)
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (!(num1 < num2))
    {
        alert('ERRO! Verifique os dados e tente novamente (o número de início deve ser menor que o do fim)')
    }
    else
    {
        while (num1 <= num2)
        {
            res.innerHTML += `${num1} 👉 `
            num1 += pass
        }

            res.innerHTML += `✅🐍`
    }
}