var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people); 
people.splice(1, 1)
people.splice(2, 1)
//Son para poner a Luis hasta el frente
people.splice(1, 1)//borra a Luis
people.unshift("Luis");// Lo inserta hasta adelante
//Agregar 
people.push("Azahid");
console.log(people);
var a = parseInt(people.indexOf("Maria")) + 1;
var i = 0 ;
do {
console.log(people [i]);
i ++
} while (i < a);
console.log(people.indexOf("Maria"));