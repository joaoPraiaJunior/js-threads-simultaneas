import imprimeCotacao from "./imprimeCotacao";

const elementos = {
    dolar: '[data-js="grafico-dolar"]',
}

const dolar = document.querySelector(elementos.dolar);


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
    imprimeCotacao('Dólar', valor);
});