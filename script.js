window.addEventListener("load", () => {
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


    document.querySelector(".container").onclick = () => {
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
        document.querySelector("body").classList.toggle("dark");
    };


    function resalta(elEvento) {
        var evento = elEvento || window.event;
        switch (evento.type) {
            case 'mouseover':
                this.style.color = 'red';
                this.style.backgroundColor = 'gold';
                break;
            case 'mouseout':
                this.style.backgroundColor = 'blue';
                this.style.color = 'white';
                break;
        }
    }

    document.querySelector("footer").onmouseover = resalta;
    document.querySelector("footer").onmouseout = resalta;

});


/*

    
    */