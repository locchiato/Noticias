window.addEventListener("load", () => {
    noticias.forEach((noticia) => {
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

        let sector;
        if (noticia.tipoNacional) {
            sector = document.querySelector(".nacionales")
        } else {
            sector = document.querySelector(".internacs")
        }

        sector.innerHTML += template;

    });
});