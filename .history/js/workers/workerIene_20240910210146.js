addEventListener('message', evento => {
    conectaApiCotacaoMoedas();
    setInterval(() => conectaApiCotacaoMoedas(), 5000);
});

async function conectaApiCotacaoMoedas() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const data = await response.json();
    postMessage(data.USDBRL);
}