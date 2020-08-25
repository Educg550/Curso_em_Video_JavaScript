for (var i = 1; i <= 10; i += 2)
{
    if (i == 1)
    {
        console.log(`${i} elefante incomoda muita gente, ${i + 1} elefantes`) 
    }
    else
    {
        console.log(`${i} elefantes incomodam muita gente, ${i + 1} elefantes`)
      
    }
    for (var j = 1; j <= (i + 1); j++)
        {
            console.log('incomodam')
        }
    console.log('muito ma-ais!\n')
}