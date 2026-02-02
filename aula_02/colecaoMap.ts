import leia = require("readline-sync");


//map collection que pede sempre chave e valor 

const participantes: Map<number,string> = new Map<number,string>();

participantes.set(1,"Ana");
participantes.set(2, "Samuel");
participantes.set(3, "Leonardo");
participantes.set(4, "Camilla");


/* desestruturando o set para salvar na variavel matricula e nome temporariamente pra me mostrar o valor que ele vai assumir.
for(let [matricula, nome] of participantes){
    console.log(`Matricula: ${matricula} - Nome: ${nome}`)
}
*/
// procurar um elemento pela chave (id) // o has ele procura pela chave
console.log("Existe a matricula 2?" , participantes.has(2));

//procurar um elemento pelo valor                                           //serve pra procurar em qlq lugar da string()
console.log("Existe a participante Ana?" , Array.from(participantes.values()).includes("Ana"));

// mostra o valor com base na chave
console.log("Qual é o nome do aluno com a matricula 3?" , participantes.get(3));

participantes.delete(3);

console.table(participantes);
