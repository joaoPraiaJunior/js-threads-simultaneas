
const elementos = {
    dataLista: '[data-lista]',
}

const lista = document.querySelector(elementos.dataLista);

function imprimeCotacao(nome, valor) {

    lista.innerHTML = '';

    for(let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const item = document.createElement('li');
        item.textContent = `${multiplicador}: ${nome}: R$${(valor * multiplicador).toFixed(2)}`;
        lista.appendChild(item);
    }
}