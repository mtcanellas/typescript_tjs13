import leia = require("readline-sync");
import Queue= require("./Queue");

const fila = new Queue<string>();

fila.enqueue("Participante 1");
fila.enqueue("Participante 2");
fila.enqueue("Participante 3");

// fila.enqueue (leia.question("Digite um nome:"))

console.log("***Fila Original ***");

fila.printQueue();

console.log("/n");

fila.dequeue();

console.log("Fila apos remoção");
fila.printQueue();
console.log("/n");

console.log("Tamanho da faila" , fila.count());

let busca = "Erick";
busca.toLowerCase;

console.log("O Erick está na fila? ", fila.contains(busca));


