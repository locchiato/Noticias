window.addEventListener("load", () => {
    document.querySelector(".container").addEventListener("click", () => {
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
        document.querySelector("body").classList.toggle("dark");
    })

    noticias.forEach((noticia) => {
        let template = `
        <div class="item">
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
            sector = document.querySelector(".internacionales")
        }

        sector.innerHTML += template;

    });
});