const elementos = {
    
    dataLista: '[data-js]',
}

const lista = document.querySelectorAll(elementos.dataLista);

function escolherListaParaImprimirCotacao(nomeDaMoeda, valor) {
    lista.forEach(listaEscolhida => {
        if(listaEscolhida.dataset.lista === nomeDaMoeda) {
            imprimeCotacao(nomeDaMoeda, valor);
        }
    });
}

function imprimeCotacao(nomeDaMoeda, valor) {

    lista.innerHTML = '';

    for(let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const item = document.createElement('li');
        item.textContent = `${multiplicador}: ${nomeDaMoeda}: R$ ${(valor * multiplicador).toFixed(2)}`;
        lista.appendChild(item);
    }
}

export default imprimeCotacao;