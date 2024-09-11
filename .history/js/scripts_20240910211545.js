import { escolherListaParaImprimirCotacao } from './js/imprimeCotacao.js';

const elementos = {
    dolar: '[data-js="grafico-dolar"]',
    iene: '[data-js="grafico-iene"]',
}

const dolar = document.querySelector(elementos.dolar);
const iene = document.querySelector(elementos.iene);


const graficoParaDolar = new Chart(dolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dólar',
            data: [],
            borderWidth: 1
        }]
    },
});

const graficoParaIene = new Chart(iene, {  
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    },
});


function geraHorario() {
    const data = new Date();
    return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    });

    grafico.update();
}

let workerDolar = new Worker('./js/workers/workerDolar.js');
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', (evento) => {
    let tempo = geraHorario();
    let valor = evento.data.ask;
    escolherListaParaImprimirCotacao('Dólar', valor)
    adicionarDados(graficoParaDolar, tempo, valor);
});

let workerIene = new Worker('./js/workers/workerIene.js');
workerIene.postMessage('jpy');

workerIene.addEventListener('message', (evento) => {
    let tempo = geraHorario();
    let valor = evento.data.ask;
    escolherListaParaImprimirCotacao('Iene', valor)
    adicionarDados(graficoParaIene, tempo, valor);
});