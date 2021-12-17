function calculate(){
    let num1 = parseInt(prompt("Enter number 1"));
    let num2 = parseInt(prompt("Enter number 2"));
    let num3 = parseInt(prompt("Enter number 3"));
    let num4 = parseInt(prompt("Enter number 4"));

    const numlist = [num1, num2, num3, num4];
    console.log(numlist[0]+numlist[1]+numlist[2]+numlist[3]);
    console.log(numlist[0]*numlist[1]*numlist[2]*numlist[3]);
}

calculate();