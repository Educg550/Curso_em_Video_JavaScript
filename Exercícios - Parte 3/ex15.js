function sexoIdade()
{
    var data = new Date()
    var anoatual = data.getFullYear()
    var txtanoinput = document.getElementById('ano')
    var anoinput = Number(txtanoinput.value)
    var sexo = document.getElementsByName('sexo')
    var idade = anoatual - anoinput
    var res = document.getElementById('res')
    var foto = document.getElementById('img')

    if (anoinput.length == 0 || anoinput > anoatual || idade >= 120)
    {
        alert('ERRO! Verifique os dados e tente novamente!')
    }
    else
    {
        if (sexo[0].checked) // Homem
        {
            document.body.style.backgroundColor = 'rgb(0, 132, 255)'
            if (idade >= 0 && idade <= 4)
            {
                res.innerHTML = `Bebê homem com ${idade} ano(s) de idade`
                foto.src = 'Imagens/bebe-homem.jpg'
            }
            else if (idade <= 10)
            {
                res.innerHTML = `Criança homem com ${idade} ano(s) de idade`
                foto.src = 'Imagens/criança-homem.jpg'
            }
            else if (idade <= 18)
            {
                res.innerHTML = `Jovem homem com ${idade} ano(s) de idade`
                foto.src = 'Imagens/jovem-homem.jpg'
            }
            else if (idade < 60)
            {
                res.innerHTML = `Adulto homem com ${idade} ano(s) de idade`
                foto.src = 'Imagens/adulto-homem.jpg'
            }
            else
            {
                res.innerHTML = `Idoso homem com ${idade} ano(s) de idade`
                foto.src = 'Imagens/velho-homem.jpg'
            }
        }
        else // Mulher
        {
            document.body.style.backgroundColor = 'rgb(255, 79, 108)'
            if (idade >= 0 && idade <= 4)
            {
                res.innerHTML = `Bebê mulher com ${idade} ano(s) de idade`
                foto.src = 'Imagens/bebe-mulher.jpg'
            }
            else if (idade <= 10)
            {
                res.innerHTML = `Criança mulher com ${idade} ano(s) de idade`
                foto.src = 'Imagens/criança-mulher.jpg'
            }
            else if (idade <= 18)
            {
                res.innerHTML = `Jovem mulher com ${idade} ano(s) de idade`
                foto.src = 'Imagens/jovem-mulher.jpg'
            }
            else if (idade < 60)
            {
                res.innerHTML = `Adulto mulher com ${idade} ano(s) de idade`
                foto.src = 'Imagens/adulto-mulher.jpg'
            }
            else
            {
                res.innerHTML = `Idoso mulher com ${idade} ano(s) de idade`
                foto.src = 'Imagens/velho-mulher.jpg'
            } 
        }
    }   
}