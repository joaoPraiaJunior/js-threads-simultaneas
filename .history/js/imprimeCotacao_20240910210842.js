const elementos = {
    
    dataLista: '[data-lista]',
}

const lista = document.querySelectorAll(elementos.dataLista);

function escolherListaParaImprimirCotacao(nome, valor) {
    lista.forEach(listaEscolhida => {
        if(listaEscolhida.dataset.lista === nome) {
            imprimeCotacao(nome, valor);
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