let numberA = -4
let numberB = 2
let numberC = 35


let D = numberB**2 - (4*numberA*numberC);

if (D>0)
{
    let X1 = (-numberB-Math.sqrt(D))/2;
    let X2 = (-numberB+Math.sqrt(D))/2;
    console.log("X1: " + X1)
    console.log("X2"+X2)
}
else if (D===0)
{
    let X = -numberB/(2*numberA);
}
else
{
    console.log("Unsolvable");
}

