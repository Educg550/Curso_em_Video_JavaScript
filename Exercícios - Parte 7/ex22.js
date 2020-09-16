var vetor = []
let txtnum = document.getElementById('input')
let log = document.getElementById('log')
let max, min
let soma = 0
let media = 0
let out = document. getElementById('output')

let Acrescentar = () =>
{
    let num = Number(document.getElementById('input').value)


    if (num.length == 0 || !(num >= 1 && num <= 100)) 
    {
        out.innerHTML = `ERRO! Insira um valor entre 1 e 100 e tente novamente!`
        return
    }
    else if (log.value.length == 0)
    {
        max = num
        min = num
    }
    else if (num > max)
    {
        max = num
    }
    else if (num < min)
    {
        min = num
    }

    for (let i = 0; i <= vetor.length - 1; i++)
    {
        if (vetor[i] == num)
        {
            out.innerHTML = `ERRO! O número ${num} já foi inserido anteriormente!`
            log.innerHTML += `Valor ${num} não foi inserido, pois já existia\n`
            return
        }
    }

    vetor.push(num)
    media += num
    soma += num
    log.innerHTML += `Valor ${num} foi adicionado\n`

    out.innerHTML = `Ao todo, temos ${vetor.length} número(s) registrados<br>O maior valor informado foi ${max}<br>O menor valor informado foi ${min}<br>Somando todos os valores, temos ${soma}<br>A média dos valores digitados é ${media / vetor.length}`
}

let Limpar = () =>
{
    out.innerHTML = ''
    log.innerHTML = ''
    txtnum.innerHTML = ''
    vetor = []
}