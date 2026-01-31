import leia = require("readline-sync");

let numero1: number, numero2: number; // diferente do JS aqui voce define a variavel como numero/ string/ bool/ 

// pra ser igual JS voce pode declarar a variavel como any

numero1 = leia.questionFloat("Escreva o primeiro numero: ");
numero2 = leia.questionFloat("Escreva o segundo numero:" );

console.log(` ${numero1} + ${numero2} = ${numero1 + numero2}`);


