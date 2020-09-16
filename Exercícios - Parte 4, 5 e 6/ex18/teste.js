var num1 = 1
    var num2 = 10
    var pass = 1

    if (num1.length == 0 || num2.length == 0 || pass.length == 0 || pass == 0) //Caso o usuário não coloque algum dos valores ou se o passo for zero
    {
       console.log('ERRO! Faltam dados para a contagem ou os dados são inválidos!')
       return
    }
    else if (num1 > num2) //Se o primeiro número for maior que o segundo, os passos serão regressivos
    {
        while (num1 >= num2)
        {
            console.log(`${num1} 👉 `)
            num1 -= pass
        }
    }
    else //Caso contrário, os passos serão sucessivos
    {
        while (num1 <= num2)
        {
            console.log(`${num1} 👉 `)
            num1 += pass
        }
    }

    console.log(`✅🐍`)