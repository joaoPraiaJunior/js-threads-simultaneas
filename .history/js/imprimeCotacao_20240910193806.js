
const elementos = {
    
    dataLista: '[data-lista]',
}

const lista = document.querySelector(elementos.dataLista);

function imprimeCotacao(nomeDaMoeda, valor) {

    lista.innerHTML = '';

    for(let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const item = document.createElement('li');
        item.textContent = `${multiplicador}: ${nomeDaMoeda}: R$ ${(valor * multiplicador).toFixed(2)}`;
        lista.appendChild(item);
    }
}

export default imprimeCotacao;