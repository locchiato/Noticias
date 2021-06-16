window.addEventListener("load", () => {
    noticias.forEach((noticia) => {
        if (noticia.tipoNacional) {
            let template = `
            <div class="noticia">
            <img src="${noticia.imgUrl}">
            <h2>${noticia.titulo}</h2>
            <h6>${noticia.fecha}</h6>
            <p>
            ${noticia.descripcion}
            </p>
            </div>
            `;

            document.$(".nacionales").innerHTML += template;
        }
    });
});