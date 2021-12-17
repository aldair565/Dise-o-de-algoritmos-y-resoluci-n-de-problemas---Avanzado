function doubleValue(){
    let num1 = parseInt(prompt("Enter number 1"));
    let num2 = parseInt(prompt("Enter number 2"));
    let num3 = parseInt(prompt("Enter number 3"));
    let num4 = parseInt(prompt("Enter number 4"));

    const numlist = [num1*num1, num2*num2, num3*num3, num4*num4];
    console.log(numlist);
}

doubleValue();