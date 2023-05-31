//importar brain.js
const net = new brain.NeuralNetwork();

//array que guarda os dados para treinamento do neurônio
const data = [
    { input: { r: 0, g: 0, b: 0 }, output: [1] },
    { input: { r: 1, g: 1, b: 1 }, output: [0] },
    {
        input: {
            r: 0.3552153312496693,
            g: 0.8513362507561917,
            b: 0.1882038950864784,
        },
        output: [1],
    },
    {
        input: {
            r: 0.5524126760239154,
            g: 0.6524386528229591,
            b: 0.18702733775309288,
        },
        output: [1],
    },
    {
        input: {
            r: 0.2857765861842676,
            g: 0.7171615145024883,
            b: 0.1651572980781777,
        },
        output: [1],
    },
    {
        input: {
            r: 0.9780796057083885,
            g: 0.6158179405656896,
            b: 0.5392532263815488,
        },
        output: [1],
    },
    {
        input: {
            r: 0.6019622747271118,
            g: 0.05837048539088707,
            b: 0.4422109005383603,
        },
        output: [1],
    },
    {
        input: {
            r: 0.9721875820042882,
            g: 0.9912121836489616,
            b: 0.15268696947737959,
        },
        output: [0],
    },
    {
        input: {
            r: 0.9522776795174621,
            g: 0.5363910633868796,
            b: 0.15434519811881287,
        },
        output: [1],
    },
    {
        input: {
            r: 0.45484445739429313,
            g: 0.36999500415608777,
            b: 0.7973309638230508,
        },
        output: [1],
    },
    {
        input: {
            r: 0.028868744982273098,
            g: 0.1692600102013173,
            b: 0.4749198358679245,
        },
        output: [1],
    },
    {
        input: {
            r: 0.0877901635713314,
            g: 0.42230558578965693,
            b: 0.4097132769085725,
        },
        output: [1],
    },
    {
        input: {
            r: 0.47509616491359963,
            g: 0.22988547926945668,
            b: 0.9179733583119707,
        },
        output: [1],
    },
];

//método para treinar o neurônio
net.train(data);

//Criação de variáveis necessárias para funcionamento do programa
const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");
let color;
setRandomColor();

whiteButton.addEventListener("click", () => {
    chooseColor(1);
});

blackButton.addEventListener("click", () => {
    chooseColor(0);
});

printButton.addEventListener("click", print);

//função que vai receber o valor que clicamos em black ou white(0 ou 1) e guarda esse valor para cada cor que estava no fundo
function chooseColor(value) {
    data.push({
        input: color,
        output: [value],
    });
    setRandomColor();
}

//printar as escolhas que fizermos da melhor opção de texto
function print() {
    console.log(JSON.stringify(data));
}

// gerar uma cor aleatória a partir dos valores RGB de 0 a 255 e partir da cor do fundo o neurônio vai dar um palpite de qual seria
// a cor do texto mais adequada para a situação, neste caso quando o valor da cor do RGB for maior que 0.5 usar a cor do texto preta
// se for menor usar a cor branca
function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    };
    const guess = net.run(color)[0];
    guessEl.style.color = guess > 0.5 ? "#FFF" : "#000";
    colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
        color.b * 255
    })`;
}

const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);
