// Função para filtrar as posturas de yoga com base na consulta
function filtrarAsanas(dados, query) {
    const lowerCaseQuery = query.toLowerCase();
    
    return dados.filter(asana => {
        const titulo = asana.titulo.toLowerCase();
        const descricao = asana.descricao.toLowerCase();
        const nivel = asana.nivel.toLowerCase();
        const foco = asana.foco.toLowerCase();
        const beneficios = asana.beneficios.map(b => b.toLowerCase()).join(', ');

        return (
            titulo.includes(lowerCaseQuery) ||
            descricao.includes(lowerCaseQuery) ||
            nivel.includes(lowerCaseQuery) ||
            foco.includes(lowerCaseQuery) ||
            beneficios.includes(lowerCaseQuery)
        );
    });
}

// Função para renderizar os resultados como cards
function renderizarResultados(resultados) {
    const cardContainer = document.querySelector('.container');
    cardContainer.innerHTML = ''; // Limpa os resultados anteriores

    resultados.forEach(asana => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${asana.imagem}" alt="${asana.titulo}">
            <h3>${asana.titulo}</h3>
            <p><strong>Nível:</strong> ${asana.nivel}</p>
            <p><strong>Foco:</strong> ${asana.foco}</p>
            <p><strong>Benefícios:</strong> ${asana.beneficios.join(', ')}</p>
            <p>${asana.descricao}</p>
            <a href="${asana.link}" target="_blank" class="btn">Ler Mais</a>
        `;

        cardContainer.appendChild(card);
    });
}

// Função chamada quando o botão de pesquisa é clicado
function pesquisar() {
    const query = document.getElementById('campo-pesquisa').value;
    const resultados = filtrarAsanas(dados, query);
    renderizarResultados(resultados);
}

// Adiciona evento para o botão de pesquisa
document.getElementById('botao-pesquisa').addEventListener('click', pesquisar);

// Adiciona evento para pressionar Enter no campo de pesquisa
document.getElementById('campo-pesquisa').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
});
