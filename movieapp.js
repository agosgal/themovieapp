const logo = document.querySelector("#header .logo");

console.log(logo)

logo.onclick = function (event) {
 location.reload(true);
}

// Traigo las 5 populares

const traerpeli1 = () => {
    const prom = fetch("https://api.themoviedb.org/3/movie/popular?api_key=d970e377bc07fda41fabc4c1bc412609");
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

                // Agregamos el div al listado 
                listadepelis1.appendChild(div)
            }
        })
}

console.log(traerpeli1())

// Traigo las 5 top rated

const traerpeli2 = () => {
    const prom = fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d970e377bc07fda41fabc4c1bc412609");
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

                // Agregamos el div al listado 
                listadepelis2.appendChild(div)
            }
        })
}

console.log(traerpeli2())


// Traigo las 5 coming soon

const traerpeli3 = () => {
    const prom = fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d970e377bc07fda41fabc4c1bc412609");
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

                // Agregamos el div al listado 
                listadepelis3.appendChild(div)
            }
        })
}

console.log(traerpeli3())

// Traigo las 5 now playing

const traerpeli4 = () => {
    const prom = fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d970e377bc07fda41fabc4c1bc412609");
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

                // Agregamos el div al listado 
                listadepelis4.appendChild(div)
            }
        })
}

console.log(traerpeli4())

// Traigo cosas para clickear

const iconoPopular = document.querySelector("#barra-lateral .items .atributo1");
const iconoTop = document.querySelector("#barra-lateral .items .atributo2");
const iconoUp = document.querySelector("#barra-lateral .items .atributo3");
const iconoNow = document.querySelector("#barra-lateral .items .atributo4");
const listaPop = document.querySelector(".peliculas .popular");
const listaTop = document.querySelector(".peliculas .top-rated")
const listaUp = document.querySelector(".peliculas .upcoming");
const listaNow = document.querySelector(".peliculas .now-playing")
const banner = document.querySelector("#contenido .banner");
const textotop = document.querySelector(".top-rated .categoria .textotop")
const textoview = document.querySelector(".top-rated .categoria .all");
const listadepelis = document.getElementById("listadepelis2");


// Armo funcion para traer todos los resultados de la categoría

// POPULAR

const traigopopular = () => {
    const listadepelis = document.getElementById("listadepelis2");
    const prom = fetch("https://api.themoviedb.org/3/movie/popular?api_key=d970e377bc07fda41fabc4c1bc412609");
    prom.then(res => res.json())
        .then(movie => {    
            const resultados = movie.results.length;
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

                div.appendChild(imagen)
                div.appendChild(titulo)

                // Agregamos el div al listado 
                listadepelis.appendChild(div)
            }
        }
    })
}
// Cuando clickeo en cada categoría del costado


iconoPopular.onclick = function (event) {
    banner.classList.add("hide");
    listaPop.classList.add("hide");
    listaUp.classList.add("hide");
    listaNow.classList.add("hide");
    listaTop.classList.add("show");
    textotop.innerHTML = "Popular Movies";
    textoview.innerHTML = "2000 results";
    listadepelis.innerHTML = "";
    traigopopular()
}

// TOP

const traigotop = () => {
    const listadepelis = document.getElementById("listadepelis2");
    const prom = fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d970e377bc07fda41fabc4c1bc412609");
    prom.then(res => res.json())
        .then(movie => {    
            const resultados = movie.results.length;
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

                div.appendChild(imagen)
                div.appendChild(titulo)

                // Agregamos el div al listado 
                listadepelis.appendChild(div)
            }
        }
    })
}
// Cuando clickeo en cada categoría del costado


iconoTop.onclick = function (event) {
    banner.classList.add("hide");
    listaPop.classList.add("hide");
    listaUp.classList.add("hide");
    listaNow.classList.add("hide");
    listaTop.classList.add("show");
    textotop.innerHTML = "Top Rated Movies";
    textoview.innerHTML = "2000 results";
    listadepelis.innerHTML = "";
    traigotop()
}

// UPCOMING

const traigoup = () => {
    const listadepelis = document.getElementById("listadepelis2");
    const prom = fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d970e377bc07fda41fabc4c1bc412609");
    prom.then(res => res.json())
        .then(movie => {    
            const resultados = movie.results.length;
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

                div.appendChild(imagen)
                div.appendChild(titulo)

                // Agregamos el div al listado 
                listadepelis.appendChild(div)
            }
        }
    })
}
// Cuando clickeo en cada categoría del costado


iconoUp.onclick = function (event) {
    banner.classList.add("hide");
    listaPop.classList.add("hide");
    listaUp.classList.add("hide");
    listaNow.classList.add("hide");
    listaTop.classList.add("show");
    textotop.innerHTML = "Upcoming Movies";
    textoview.innerHTML = "2000 results";
    listadepelis.innerHTML = "";
    traigoup()
}

// NOW PLAYING

const traigonow = () => {
    const listadepelis = document.getElementById("listadepelis2");
    const prom = fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d970e377bc07fda41fabc4c1bc412609");
    prom.then(res => res.json())
        .then(movie => {    
            const resultados = movie.results.length;
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

                div.appendChild(imagen)
                div.appendChild(titulo)

                // Agregamos el div al listado 
                listadepelis.appendChild(div)
            }
        }
    })
}
// Cuando clickeo en cada categoría del costado


iconoNow.onclick = function (event) {
    banner.classList.add("hide");
    listaPop.classList.add("hide");
    listaUp.classList.add("hide");
    listaNow.classList.add("hide");
    listaTop.classList.add("show");
    textotop.innerHTML = "Now Playing Movies";
    textoview.innerHTML = "2000 results";
    listadepelis.innerHTML = "";
    traigonow()
}

// Resultados con buscador

const buscador = document.querySelector("#header .buscador1 .buscador");

console.log(buscador)

buscador.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        banner.classList.add("hide");
        listaPop.classList.add("hide");
        listaUp.classList.add("hide");
        listaNow.classList.add("hide");
        listaTop.classList.add("show");
        textotop.innerHTML = "Results for: " + buscador.value;
        textoview.innerHTML = "2000 results";
        listadepelis.innerHTML = "";
        buscoPeli()
  }
})

const buscoPeli = () => {
    const elegida = buscador.value;
    const prom = fetch("https://api.themoviedb.org/3/search/movie?api_key=d970e377bc07fda41fabc4c1bc412609&query=" + elegida);
    prom.then(res => res.json())
        .then(movie => {    
            const resultados = movie.results.length;
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

                div.appendChild(imagen)
                div.appendChild(titulo)

                // Agregamos el div al listado 
                listadepelis.appendChild(div)
            }
        }
    })
}
