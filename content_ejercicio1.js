function list1(){
    let num1 = parseInt(prompt("Enter number 1"));
    let num2 = parseInt(prompt("Enter number 2"));
    let num3 = parseInt(prompt("Enter number 3"));
    let num4 = parseInt(prompt("Enter number 4"));
    let num5 = parseInt(prompt("Enter number 5"));

    const numlist1 = [num1, num2, num3, num4, num5];
    numlist1.sort();
    console.log(numlist1[4]);
}

list1();