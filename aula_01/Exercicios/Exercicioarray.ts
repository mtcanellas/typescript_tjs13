import leia = require("readline-sync");

// criando a collection array tipo string

const cores: Array<string> = new Array<string> ();


// cria a variavel Indice declara como 0 e toda vez que indice for -5 ele chama o push e soma 1 string ao indice
// faz um for para não ter que chamar o leia.question 5x

for (let i = 0; i <5; i++){
    cores.push(leia.question("Digite uma cor: "));

}
// aqui ele diz o seguinte no for of, para todo valor da collection cores atribui cor e mostra no console
console.log ("Lista de cores");
for (let cor of cores){


         console.log(cor);

}
// aqui ele vai ordenar as cores depois de listar, no for de cima ele acabou de listar, agora ele vai ordenar
cores.sort();

console.log("Lista de cores ordenadas");
// e vai mostrar dnv depois de ordena-las.
for ( let cor of cores){
    
    console.log(cor);
}


