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

function inverte(num) {
    let txt = num.toString();
    let numfinal = "";
    for (i = txt.length - 1; i >= 0; i--) {
        numfinal = numfinal + txt[i]
    }
    return parseInt(numfinal);
}

// Exercício 6:

function contaVogais(palavra) {
    let comp = "AEIOUaeiou";
    let num = 0
    for (i = 0; i < palavra.length; i++) {
        for (j = 0; j < comp.length; j++) {
            if (palavra[i] == comp[j]) {
                num++;
            }
        }
    }
    return num;
}

// Exercício 7:

function equacao(txt) {
    let numP = 0;
    let numC = 0;
    for (i = 0; i < txt.length; i++) {
        switch (txt[i]) {
            case '(':
                if (txt[i + 1] == ']' || txt[i + 1] == null) return false;
                numP++;
                break;
            case ')':
                if (numP <= 0) return false;
                numP--;
                break;
            case '[':
                if (txt[i + 1] == ')' || txt[i + 1] == null) return false;
                numC++;
                break;
            case ']':
                if (numC <= 0) return false;
                numC--;
                break;
            default:
                break;
        }
    }
    if (numP != 0 || numC != 0) return false;
    else return true;
}

// Exercicio 8: Não consegui gerar as idades de forma adequada

function listaObjetos(num) {
    let lista = [];
    let nomes = ["Daniela", "Hanna", "Marcela", "Danila", "Joana", "Brena", "Luara", "Babi", "Melissa", "Daisy"];
    for (i = 0; i < num; i++) {
        lista.push({
            id: i,
            nome: nomes[Math.floor(Math.random() * 10)] + " " + nomes[Math.floor(Math.random() * 10)],
            idade: Math.floor(Math.random() * 90 + 18)
        })
    }
    return lista;
}

// Exercicio 9 :

function media(lista) {
    let soma = 0;
    for (i = 0; i < lista.length; i++) {
        soma = soma + lista[i].idade;
    }
    return soma / lista.length;
}

// Exercicio 10:

function ordenar(lista, par) {
    if (par == 0) {
        lista.sort(function (a, b) { return a.idade - b.idade; })
    }
    else if (par == 1) {
        lista.sort(function (a, b) { return a.nome.localeCompare(b.nome) });
    }
    else {
        console.log("Valor inválido")
    }
    return lista;
}
