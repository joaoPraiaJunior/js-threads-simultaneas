
const elementos = {
    dolar: '[data-js="grafico-dolar"]',
}

const dolar = document.querySelector(elementos.dolar);


const graficoParaDolar = new Chart(dolar, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
});