const elementos = {
    
    dataLista: '[data-js]',
}

const lista = document.querySelectorAll(elementos.dataLista);

function escolherListaParaImprimirCotacao(nomeDaMoeda, valor) {
    lista.forEach(listaEscolhida => {
        if(listaEscolhida.dataset.js === nomeDaMoeda) {
            imprimeCotacao(listaEscolhida, nomeDaMoeda, valor);
        }
    });
}

function imprimeCotacao(listaEscolhida, nomeDaMoeda, valor) {

    listaEscolhida.innerHTML = '';

    for(let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const item = document.createElement('li');
        item.textContent = `${multiplicador}: ${nomeDaMoeda}: R$ ${(valor * multiplicador).toFixed(2)}`;
        listaEscolhida.appendChild(item);
    }
}

export default escolherListaParaImprimirCotacao ;
