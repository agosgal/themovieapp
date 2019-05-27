// Vuelve a la home al hacer click

const logo = document.querySelector("#header .logo");

logo.onclick = function (event) {
    location.reload(true);
}

// Ni bien abro el sitio

const traerpeli = (categoria) => {

    if (categoria === "top_rated") {
        const divboton = document.querySelector("button");
        divboton.classList.add("hide");
    }

    // Traigo las 5 populares

    const prom = fetch("https://api.themoviedb.org/3/movie/" + categoria + "?api_key=d970e377bc07fda41fabc4c1bc412609");
    prom.then(res => res.json())
        .then(movie => {
            if (movie) {
            }
            for (let i = 0; i < 5; i++) {
                // Creamos un div, le añadimos el nombre y la imagen 
                const div = document.createElement("div")
                div.classList.add("movie")

                const titulo = document.createElement("p")
                titulo.classList.add("titulo")
                titulo.textContent = movie.results[i].title

                const imagen = document.createElement("img");
                imagen.setAttribute('src', "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path);

                div.appendChild(imagen)
                div.appendChild(titulo)

                const lista = document.getElementById("listadepelis" + categoria)

                // Agrego el div al listado 
                lista.appendChild(div)

                // Activo modal
                const unapeli = div;
                const peliahora = titulo.innerHTML;
                const modal = document.getElementById("myModal");
                var span = document.querySelector(".modal .close");

                //Reemplazo info del modal

                unapeli.onclick = function () {
                    modal.classList.add("active");
                    if (peliahora === movie.results[i].title) {
                        // Agarro todo
                        const background = document.querySelector(".modal-box .contenido .movie .header1")
                        const poster = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .poster img");
                        const titulo1 = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 h1");
                        const spanid = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 span");
                        const descripcion = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-description");
                        const vote = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block1 p");
                        const date = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block2 p");

                        // 

                        background.style.backgroundImage = "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].backdrop_path + ")";
                        poster.src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path;
                        titulo1.innerHTML = movie.results[i].title;
                        spanid.innerHTML = "ID: " + movie.results[i].id;
                        descripcion.innerHTML = movie.results[i].overview;
                        vote.innerHTML = movie.results[i].vote_average;
                        date.innerHTML = movie.results[i].release_date
                    }

                }

                span.onclick = function () {
                    console.log("chau")
                    modal.classList.remove("active")
                }


            }
        })
}

console.log(traerpeli("popular"));
console.log(traerpeli("top_rated"));
console.log(traerpeli("upcoming"));
console.log(traerpeli("now_playing"));


// Traigo cosas para clickear

const iconoPopular = document.querySelector("#barra-lateral .items .atributo1");
const iconoTop = document.querySelector("#barra-lateral .items .atributo2");
const iconoUp = document.querySelector("#barra-lateral .items .atributo3");
const iconoNow = document.querySelector("#barra-lateral .items .atributo4");
const listaPop = document.querySelector(".peliculas .popular");
const listaTop = document.querySelector(".peliculas .top-rated");
const listaUp = document.querySelector(".peliculas .upcoming");
const listaNow = document.querySelector(".peliculas .now-playing");
const viewPop = document.querySelector(".peliculas .popular .categoria .all");
const viewTop = document.querySelector(".peliculas .top-rated .categoria .all");
const viewUp = document.querySelector(".peliculas .upcoming .categoria .all");
const viewNow = document.querySelector(".peliculas .now-playing .categoria .all");
const banner = document.querySelector("#contenido .banner");
const textotop = document.querySelector(".top-rated .categoria .textotop")
const textoview = document.querySelector(".top-rated .categoria .all");
const listadepelis = document.getElementById("listadepelistop_rated");
const divboton = document.querySelector(".top-rated .opciones .divboton")

// Armo funcion para traer todos los resultados de la categoría


const traigopeli = (categoria) => {
    const divboton = document.querySelector("button");
    divboton.classList.remove("hide");
    banner.classList.add("hide");
    listaPop.classList.add("hide");
    listaUp.classList.add("hide");
    listaNow.classList.add("hide");
    listaTop.classList.add("show");
    let vuelta = 1;
    const listadepelis = document.getElementById("listadepelistop_rated");
    const prom = fetch("https://api.themoviedb.org/3/movie/" + categoria + "?api_key=d970e377bc07fda41fabc4c1bc412609&page=" + vuelta);
    prom.then(res => res.json())
        .then(movie => {
            if (movie) {
                listadepelis.innerHTML = "";
                for (let i = 0; i < movie.results.length; i++) {
                    // Creamos un div, le añadimos el nombre y la imagen 
                    const div = document.createElement("div")
                    div.classList.add("movie")

                    const titulo = document.createElement("p")
                    titulo.classList.add("titulo")
                    titulo.textContent = movie.results[i].title

                    const imagen = document.createElement("img");
                    imagen.setAttribute('src', "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path);

                    div.appendChild(imagen)
                    div.appendChild(titulo);



                    // Agregamos el div al listado 
                    listadepelis.appendChild(div);


                    // Activo modal
                    const unapeli = div;
                    const peliahora = titulo.innerHTML;
                    const modal = document.getElementById("myModal");
                    var span = document.querySelector(".modal .close");

                    //Reemplazo info del modal

                    unapeli.onclick = function () {
                        modal.classList.add("active");
                        if (peliahora === movie.results[i].title) {
                            // Agarro todo
                            const background = document.querySelector(".modal-box .contenido .movie .header1")
                            const poster = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .poster img");
                            const titulo1 = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 h1");
                            const spanid = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 span");
                            const descripcion = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-description");
                            const vote = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block1 p");
                            const date = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block2 p");

                            // Reemplazo

                            background.style.backgroundImage = "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].backdrop_path + ")";
                            poster.src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path;
                            titulo1.innerHTML = movie.results[i].title;
                            spanid.innerHTML = "ID: " + movie.results[i].id;
                            descripcion.innerHTML = movie.results[i].overview;
                            vote.innerHTML = movie.results[i].vote_average;
                            date.innerHTML = movie.results[i].release_date
                        }

                    }

                    span.onclick = function () {
                        console.log("chau")
                        modal.classList.remove("active")
                    }



                }

                // Si presiono el botón

                divboton.onclick = function (event) {
                    vuelta = (vuelta + 1);
                    const listadepelis = document.getElementById("listadepelistop_rated");
                    const prom = fetch("https://api.themoviedb.org/3/movie/" + categoria + "?api_key=d970e377bc07fda41fabc4c1bc412609&page=" + vuelta);
                    prom.then(res => res.json())
                        .then(movie => {
                            if (movie) {
                                for (let i = 0; i < movie.results.length; i++) {
                                    // Creamos un div, le añadimos el nombre y la imagen 
                                    const div = document.createElement("div")
                                    div.classList.add("movie")

                                    const titulo = document.createElement("p")
                                    titulo.classList.add("titulo")
                                    titulo.textContent = movie.results[i].title

                                    const imagen = document.createElement("img");
                                    imagen.setAttribute('src', "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path);

                                    const boton = document.createElement("button");

                                    div.appendChild(imagen)
                                    div.appendChild(titulo);



                                    // Agrego el div al listado 
                                    listadepelis.appendChild(div);

                                    // Activo modal
                                    const unapeli = div;
                                    const peliahora = titulo.innerHTML;
                                    const modal = document.getElementById("myModal");
                                    var span = document.querySelector(".modal .close");

                                    //Reemplazo info del modal

                                    unapeli.onclick = function () {
                                        modal.classList.add("active");
                                        if (peliahora === movie.results[i].title) {
                                            // Agarro todo
                                            const background = document.querySelector(".modal-box .contenido .movie .header1")
                                            const poster = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .poster img");
                                            const titulo1 = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 h1");
                                            const spanid = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 span");
                                            const descripcion = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-description");
                                            const vote = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block1 p");
                                            const date = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block2 p");

                                            // Reemplazo

                                            background.style.backgroundImage = "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].backdrop_path + ")";
                                            poster.src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path;
                                            titulo1.innerHTML = movie.results[i].title;
                                            spanid.innerHTML = "ID: " + movie.results[i].id;
                                            descripcion.innerHTML = movie.results[i].overview;
                                            vote.innerHTML = movie.results[i].vote_average;
                                            date.innerHTML = movie.results[i].release_date
                                        }

                                    }

                                    span.onclick = function () {
                                        console.log("chau")
                                        modal.classList.remove("active")
                                    }



                                }

                            }
                        })
                }

            }


        })
}
// Cuando clickeo en cada categoría del costado


iconoPopular.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Popular Movies";
    traigopeli("popular");
}

viewPop.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Popular Movies";
    traigopeli("popular");
}

iconoTop.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Top Rated Movies";
    traigopeli("top_rated");
}

viewTop.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Top Rated Movies";
    traigopeli("top_rated");
}

iconoUp.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Upcoming Movies";
    traigopeli("upcoming");
}

viewUp.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Upcoming Movies";
    traigopeli("upcoming");
}

iconoNow.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Now Playing Movies";
    traigopeli("now_playing");
}

viewNow.onclick = function (event) {
    textoview.innerHTML = "X Results";
    textotop.innerHTML = "Now Playing Movies";
    traigopeli("now_playing");
}

// Armo función para traer resultado por buscador

const buscador = document.querySelector("#header .buscador1 .buscador")

// Agarro el enter

buscador.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        return traigoPeliBuscador()
    }
})

// Función

const traigoPeliBuscador = () => {
    const divboton = document.querySelector("button");
    divboton.classList.remove("hide");
    banner.classList.add("hide");
    listaPop.classList.add("hide");
    listaUp.classList.add("hide");
    listaNow.classList.add("hide");
    listaTop.classList.add("show");
    const elegida = buscador.value;
    let vuelta = 1;
    const listadepelis = document.getElementById("listadepelistop_rated");
    const prom = fetch("https://api.themoviedb.org/3/search/movie?api_key=d970e377bc07fda41fabc4c1bc412609&query=" + elegida + "&page=" + vuelta);
    prom.then(res => res.json())
        .then(movie => {
            if (movie) {
                listadepelis.innerHTML = "";
                for (let i = 0; i < movie.results.length; i++) {
                    // Creamos un div, le añadimos el nombre y la imagen 
                    const div = document.createElement("div")
                    div.classList.add("movie")

                    const titulo = document.createElement("p")
                    titulo.classList.add("titulo")
                    titulo.textContent = movie.results[i].title

                    const imagen = document.createElement("img");
                    imagen.setAttribute('src', "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path);

                    div.appendChild(imagen)
                    div.appendChild(titulo);



                    // Agregamos el div al listado 
                    listadepelis.appendChild(div);

                    // Activo modal
                    const unapeli = div;
                    const peliahora = titulo.innerHTML;
                    const modal = document.getElementById("myModal");
                    var span = document.querySelector(".modal .close");

                    //Reemplazo info del modal

                    unapeli.onclick = function () {
                        modal.classList.add("active");
                        if (peliahora === movie.results[i].title) {
                            // Agarro todo
                            const background = document.querySelector(".modal-box .contenido .movie .header1")
                            const poster = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .poster img");
                            const titulo1 = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 h1");
                            const spanid = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 span");
                            const descripcion = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-description");
                            const vote = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block1 p");
                            const date = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block2 p");

                            // Reemplazo

                            background.style.backgroundImage = "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].backdrop_path + ")";
                            poster.src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path;
                            titulo1.innerHTML = movie.results[i].title;
                            spanid.innerHTML = "ID: " + movie.results[i].id;
                            descripcion.innerHTML = movie.results[i].overview;
                            vote.innerHTML = movie.results[i].vote_average;
                            date.innerHTML = movie.results[i].release_date
                        }

                    }

                    span.onclick = function () {
                        console.log("chau")
                        modal.classList.remove("active")
                    }



                }

                // Si presiono el botón

                divboton.onclick = function (event) {
                    vuelta = (vuelta + 1);
                    const listadepelis = document.getElementById("listadepelistop_rated");
                    const prom = fetch("https://api.themoviedb.org/3/search/movie?api_key=d970e377bc07fda41fabc4c1bc412609&query=" + elegida + "&page=" + vuelta);
                    prom.then(res => res.json())
                        .then(movie => {
                            if (movie) {
                                for (let i = 0; i < movie.results.length; i++) {
                                    // Creamos un div, le añadimos el nombre y la imagen 
                                    const div = document.createElement("div")
                                    div.classList.add("movie")

                                    const titulo = document.createElement("p")
                                    titulo.classList.add("titulo")
                                    titulo.textContent = movie.results[i].title

                                    const imagen = document.createElement("img");
                                    imagen.setAttribute('src', "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path);

                                    const boton = document.createElement("button");

                                    div.appendChild(imagen)
                                    div.appendChild(titulo);



                                    // Agregamos el div al listado 
                                    listadepelis.appendChild(div);

                                    // Activo modal
                                    const unapeli = div;
                                    const peliahora = titulo.innerHTML;
                                    const modal = document.getElementById("myModal");
                                    var span = document.querySelector(".modal .close");

                                    //Reemplazo info del modal

                                    unapeli.onclick = function () {
                                        modal.classList.add("active");
                                        if (peliahora === movie.results[i].title) {
                                            // Agarro todo
                                            const background = document.querySelector(".modal-box .contenido .movie .header1")
                                            const poster = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .poster img");
                                            const titulo1 = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 h1");
                                            const spanid = document.querySelector(".modal-box .contenido .movie .header1 .wrap-header .titulo1 span");
                                            const descripcion = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-description");
                                            const vote = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block1 p");
                                            const date = document.querySelector(".modal-box .contenido .movie .main .movie-info .movie-detalle .detalle-block2 p");

                                            // Reemplazo

                                            background.style.backgroundImage = "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].backdrop_path + ")";
                                            poster.src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.results[i].poster_path;
                                            titulo1.innerHTML = movie.results[i].title;
                                            spanid.innerHTML = "ID: " + movie.results[i].id;
                                            descripcion.innerHTML = movie.results[i].overview;
                                            vote.innerHTML = movie.results[i].vote_average;
                                            date.innerHTML = movie.results[i].release_date
                                        }

                                    }

                                    span.onclick = function () {
                                        console.log("chau")
                                        modal.classList.remove("active")
                                    }



                                }

                            }
                        })
                }

            }


        })
}
