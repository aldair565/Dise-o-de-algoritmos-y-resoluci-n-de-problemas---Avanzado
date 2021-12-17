function list1(){
    let num11 = parseInt(prompt("Enter number 1 for first array"));
    let num12 = parseInt(prompt("Enter number 2 for first array"));
    let num13 = parseInt(prompt("Enter number 3 for first array"));
    let num14 = parseInt(prompt("Enter number 4 for first array"));
    let num15 = parseInt(prompt("Enter number 5 for first array"));

    const numlist1 = [num11, num12, num13, num14, num15]; //Junta los valores ingresados en un arreglo

    let num21 = parseInt(prompt("Enter number 1 for second array"));
    let num22 = parseInt(prompt("Enter number 2 for second array"));
    let num23 = parseInt(prompt("Enter number 3 for second array"));
    let num24 = parseInt(prompt("Enter number 4 for second array"));
    let num25 = parseInt(prompt("Enter number 5 for second array"));

    const numlist2 = [num21, num22, num23, num24, num25];

    const numlistcomb = numlist1.concat(numlist2); //concatena los valores de los dos arreglos

    numlistcomb.sort(function (x,y){ //ordena el arreglo combinado en orden descendente
        return y-x;
    });
    console.log(numlistcomb[0]); //imprime el primer elemento
}

list1();