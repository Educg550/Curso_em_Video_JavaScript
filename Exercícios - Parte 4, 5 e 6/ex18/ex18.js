function calcular()
{
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (num1.value.length == 0 || num2.value.length == 0 || pass.value.length == 0 || pass.value == 0)
    {
        res.innerHTML('<strong>ERRO!</strong> Confirme os dados inseridos e tente novamente!')
    }
    else
    {
        num1 = Number(num1.value)
        num2 = Number(num2.value)
        pass = Number(pass.value)

        if (num1 <= num2)
        {
            while (num1 <= num2)
            {
                res.innerHTML += `${num1} 👉 `
                num1 += pass
            }
        }
        else
        {
            while (num1 > num2)
            {
                res.innerHTML += `${num1} 👉 `
                num1 -= pass
            }
        }

        res.innerHTML += '✅🐍'
    }
}