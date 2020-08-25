var i = 0;
var i2 = 0;

while (i < 10)
{
    i++
    
    if (i === 1)
    {
            console.log(`${i} Elefante incomoda muita gente, ${(i + 1)} elefantes`)
    }
    else
    {
        console.log(`${i} Elefantes incomodam muita gente, ${(i + 1)} elefantes`)
    }
    while (i2 <= i)
    {
        console.log('incomodam')
        i2++
    }
    i2 = 0
    console.log('muito mais!\n')
    i++
}