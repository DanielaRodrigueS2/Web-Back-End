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

// Exercício 3: