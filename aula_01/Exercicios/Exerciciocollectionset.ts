import leia = require("readline-sync");

// criando a collection Set do tipo number
const numeros: Set<number> = new Set<number>();
// sett nao repete os valores
console.log("Digite 10 valores inteiros");

//Solicitação de valores
//adicionando no sett com o .add 
for(let indice = 0; indice < 10; indice++){
    numeros.add(leia.questionInt (`Digite o ${indice + 1} o numero:`));

}

// mostrando os numeros do collection set

 console.log(" Lista de numeros:");
  for(let number of numeros){

    console.log(numeros);
  }
