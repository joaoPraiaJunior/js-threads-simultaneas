
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

async function conectaApiCotacaoMoedas() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await response.json();
    console.log(data);
}

setInterval(() => conectaApiCotacaoMoedas(), 5000);

function geraData() {
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