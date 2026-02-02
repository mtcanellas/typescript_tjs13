import leia = require("readline-sync");
import { Queue } from "../fila/Queue";

const fila = new Queue<string>(); // Cria a estrutura da fila
let menu: number;

do {
    // Monta o menu na tela
    console.log("\n=== Menu de Opções =====");
    console.log("1 - adicionar cliente");
    console.log("2 - Lista de clientes");
    console.log("3 - Retirar da lista de clientes");
    console.log("0 - sair do menu");
    console.log("=======================");

    // Captura a opção do usuário como número inteiro
    menu = leia.questionInt("Escolha uma opcao: ");

    switch (menu) {
        case 1:
            // Pergunta o nome e guarda na variável 'cliente'
            let cliente = leia.question("Digite um nome: ");
            
            // Usa o enqueue para colocar o nome no fim da fila
            fila.enqueue(cliente);
            console.log("Cliente adicionado!");
            break;

        case 2:
            // ? significa se for verdade (isEmpty) e o : se falso (tem gente na fila)
            // jeito mais facil de fazer if e else ?= true :=false
            fila.isEmpty()
                ? console.log("Fila Vazia") 
                : (console.log("Lista de Clientes:"), fila.printQueue()); 
            break;

        case 3:
            // Passo 1: Verifica se está vazia antes de tentar tirar alguém
            fila.isEmpty()
                ? console.log("Fila Vazia")
                : (fila.dequeue(), console.log("Cliente retirado da lista"));
            
            // O printQueue aqui ajuda a ver como a fila ficou apos a retirada
            fila.printQueue(); 
            break;

        case 0:
            // Mensagem de encerramento antes de sair do loop
            console.log("Obrigado por utilizar o menu!");
            break;

        default:
            // Caso nao digite um número que não está no menu
            console.log("Opção inválida!");
            break;
    }

} while (menu !== 0); // finaliza o menu quando digitar o 0