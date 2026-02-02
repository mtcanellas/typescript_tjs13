import leia = require("readline-sync");
import Stack = require("../pilha/Stack"); // Importa a classe de Pilha

const pilha = new Stack<string>(); // Cria a estrutura da pilha para guardar nomes de livros
let menu: number;

do {
    // Monta o visual do menu na tela conforme a imagem do exercício
    console.log("\n*****************************************************");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("*****************************************************");

    // Captura a opção do usuário
    menu = leia.questionInt("Entre com a opcao desejada: ");

    switch (menu) {
        case 1:
            // Solicita o nome do livro
            let nomeLivro = leia.question("\nDigite o nome: ");
            
            // O método 'push' adiciona o livro no TOPO da pilha
            pilha.push(nomeLivro); 
            console.log("\nPilha:");
            pilha.printStack(); // Mostra como a pilha está 
            console.log("\nLivro adicionado!");
            break;

        case 2:
            // ? significa se for verdade (isEmpty) e o : se falso (tem livros)
            // jeito mais facil de fazer if e else ?= true :=false
            console.log("\nLista de Livros na Pilha:");
            pilha.isEmpty()
                ? console.log("\nA Pilha está vazia!")
                : pilha.printStack(); 
            break;

        case 3:
            // Verifica se tem algo para tirar. Se estiver vazia, avisa 
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                //O método 'pop' retira sempre o último que entrou (o do topo)
                pilha.pop();
                console.log("\nPilha:");
                pilha.printStack();
                console.log("\nUm Livro foi retirado da pilha!");
            }
            break;

        case 0:
            // Mensagem antes de encerrar o loop
            console.log("\nPrograma Finalizado!");
            break;

        default:
            // Caso digite um número fora de 0-3
            console.log("\nOpção inválida!");
            break;
    }

} while (menu !== 0); // O loop continua rodando até você digitar 0

//basicamente igual a fila só com alguns ajuste usando pop e push.