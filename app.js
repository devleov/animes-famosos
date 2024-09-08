function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o botão de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        return section.innerHTML = "<h2>Não foi nada encontrado.<br>Você não enviou nenhuma palavra-chave!</h2>"
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of animes) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta"><strong>Gênero:</strong> ${dado.genero}</p><br>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;

        } 

    }

    if (!resultados) {
        resultados = "<h2>Nada foi encontrado.</h2>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}