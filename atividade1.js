// Exercício 1:

function fatorial(num) {
    if (num == 0) return 1;
    const resultado = 1;
    for (i = num; i > 0; i--) {
        resultado = resultado * i;
    }
    return resultado;
};

// Exercício 2:

function retornaString(n, msg) {
    let mensagem;
    for (i = 0; i < n; i++) {
        mensagem = mensagem + " " + msg;
    }
    return mensagem;
}

// Exercício 3: 0 - Adição, 1 - Subtração, 2 - Multiplicação, 3 - Divisão

function calc(num1, num2, op) {
    switch (op) {
        case 0:
            return num1 + num2;
            break;
        case 1:
            return num1 - num2;
            break;
        case 2:
            return num1 * num2;
            break;
        case 3:
            if (num2 != 0) {
                return num1 / num2;
            }
            else console.log("Divisão inválida");
            return 0;
        default:
            console.log("Opção inválida");
            return 0;
            break;
    }
}
// Exercício 4:

function tabuada(num) {
    let vetor = new Array();
    for (i = 0; i <= 10; i++) {
        vetor[i] = num * i;
    }
    return vetor;
}

// Exercício 5:
