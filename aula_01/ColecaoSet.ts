import leia = require("readline-sync");


//significa que a const numero é um array que vai guardar o tipo numeros
// ou seja array é uma classe  
//mesmo sendo const ela continua "imutavel"
const numeros: Array<number> = new Array<number>();

console.log(numeros.length);


// adicionando valores no array
numeros.push(5);
numeros.push(1,5,7,9);
numeros.push(leia.questionInt("Digite um numero"));
 
//mostra o resultado do array
//console.table(numeros)

for(let numero of numeros){
    console.log(numero);
}

console.log("O numero 5 existe?" , numeros.includes(5)); // procurando o 5 no array

//procurando o 7 no array
console.log("O indice do numero7:" , numeros.indexOf(7))

//deletar elemento
numeros.splice(numeros.indexOf(7) , 1) // ele deleta o elemento do index e apartir dele  

console.table(numeros);
