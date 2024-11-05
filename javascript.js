
const numerosApostados = [];//VARIÁVEL ARREY (sem valor) PARA ARMAZENAR TODOS OS NÚMEROS QUE ESCOLHER

const resultado = [];//VARIÁVEL ARREY (sem valor) PARA ARMAZENAR TODOS OS RESULTADOS

let valorAposta = 0;

let qtdAcertos = 0;

const btnApostar = document.getElementById("btnApostar");//PARA DESABILITAR O BOTÃO APOSTAR ANTES DE TER A QTD DE NÚMEROS ESCOLHIDOS DESEJADA
btnApostar.disabled = true;

sortearNumeros();

//obter a entrada de alternância do tema
const themeToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
//função que mudará o tema com base se a alternância do tema estiver marcada ou não
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}
//adicione a lista de eventos ao botão de alternância do tema, o que mudará o tema
themeToggle.addEventListener("change", switchTheme, false);

//GRAVA AS PREFERENCIAS DO USUÁRIO NO NAVEGADOR
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        themeToggle.checked = true;
    }
}

//FONÇÃO P/ SORTEAR NÚMEROS ALEATÓRIOS
function sortearNumeros() {
    for (i = 0; i < 6; i++) {//i É IGUAL A 0; ENQUANTO i FOR MENOR QUE 6; i ++ VAI SOMAR
        let numeroSorteado = Math.round(Math.random() * 59 + 1);//AQUI IRÁ SORTEAR NÚMEROS INTEIROS DE 0 À 59 + 1(p/ não sortear o 0)

        //ENQUANTO REPETIR O NÚMERO SORTEADO, SORTEAR DE NOVO(se o número sorteado já estiver incluído, sortear novamente)
        while (resultado.includes(numeroSorteado)) {
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        }
        resultado.push(numeroSorteado);//COLOCA O NÚMERO SORTEADO NA LISTA
    }
}

function selecionarNumeros(numero) {
    if (numerosApostados.length >= 0 && numerosApostados.length < 15) {//PARA ESCOLHER A QTD DE NÚMEROS APOSTADOS

        numerosApostados.push(numero);//ADICIONA O NÚMERO NA LISTA

        desabilitarNumeroEscolhido(numero);//DESABILITA O NÚMERO ESCOLHIDO

        //HABILITA O BOTÃO "APOSTAR" DEPOIS DE TER 6 Nºs ESCOLHIDOS
        if (numerosApostados.length > 5) {
            btnApostar.disabled = false;

            //MOSTRA O VALOR DA APOSTA
            valorDaAposta();
        }

        //MOSTRAR QTD DE Nºs APOSTADOS
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = "<p>Qtd Números</p><p class='valor'>" + numerosApostados.length + "</p>";
    }
}

function desabilitarNumeroEscolhido(numero) {
    document.getElementById("num_" + numero).disabled = true;//DESABILITAR O NÚMERO ESCOLHIDO
    document.getElementById("num_" + numero).style.background = "#009e4c";//MUDAR A COR DE FUNNDO DO NÚMERO
    document.getElementById("num_" + numero).style.color = "#ffffff";//MUDA A COR DO NÚMERO
}

function valorDaAposta() {
    switch (numerosApostados.length) {
        case 6://PQ COMEÇA A SER COBRADO A PARTIR DO 6º Nº (AQUI VOU MUDAR NO CURSO P/ CASE 1) 
            valorAposta = "€ 4,50"//NO CURSO VOU COLOCAR VALOR DE 10 MOEDAS, POIS COMEÇO O JOGO COM 50 MOEDAS
            break;
        case 7:
            valorAposta = "€ 6,50"
            break;
        case 8:
            valorAposta = "€ 8,50"
            break;
        case 9:
            valorAposta = "€ 10,50"
            break;
        case 10:
            valorAposta = "€ 12,50"
            break;
        case 11:
            valorAposta = "€ 14,50"
            break;
        case 12:
            valorAposta = "€ 16,50"
            break;
        case 13:
            valorAposta = "€ 18,50"
            break;
        case 14:
            valorAposta = "€ 20,50"
            break;
        case 15:
            valorAposta = "€ 22,50"
            break;
        default:
            valorAposta = "€ 0"
            break;
    }

    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = "<p>Valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";
}

function apostar() {
    //FAZER A APOSTA - COMPARAR OS Nºs SORTEADOS COM OS APOSTADOS
    for (i = 0; i < numerosApostados.length; i++) {
        if (resultado.includes(numerosApostados[i])) {
            qtdAcertos++;
        }
    }
    //MOSTRAR O RESULTADO
    const divResultado = document.getElementById("resultado");
    for (i = 0; i < resultado.length; i++) {
        divResultado.innerHTML += "<div class='resultadoCircle'>" + resultado[i] + "</div>";
    }
    //MOSTRAR QTD DE ACERTOS
    const divAcertos = document.getElementById("acertos");
    divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>" + qtdAcertos + "</p>";
    //DESABILITAR TODOS OS BOTÕES
    desabilitarTodosNumeros();
    //HABILITAR BOTÃO REINICIAR
    document.getElementById("btnReiniciar").style.display = 'inline';
}

function desabilitarTodosNumeros() {
    for (i = 1; i <= 60; i++) {
        document.getElementById("num_" + i).disabled = true;
    }
}

const btn = document.getElementById("btnReiniciar");
btn.addEventListener("click", function () {
    location.reload();
});

//FUNÇÃO P/ GRAVAR AS PREFERENCIAS DO USUÁRIO QUANDO A PÁG. RECARREGAR
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        //definir a preferência de tema do usuário como escuro
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        //definir a preferência de tema do usuário como claro
        localStorage.setItem("theme", "light");
    }
}