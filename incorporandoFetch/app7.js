const peliculasContainer = document.querySelector("#card-peliculas") 

const mostrarPeliculas = () => {

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=047212871d49b6418656e8bb299c3da6")
    .then( (resp) =>  resp.json())
    .then((data) => {

    data.results.forEach((pelicula) => {

        const cardPelicula = document.createElement("section")
        cardPelicula.classList.add("#peliculas")

        peliculas.innerHTML += `
                <div class="card card-style my-4" style="width: 18rem;">
                <img class="card-img-top img-cartelera" alt="..." src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
                <div class="card-body">
                <h5 class="card-title">${pelicula.title}</h5>
                <p class="card-text">${pelicula.overview}</p>
                <button id="${pelicula.id}" class="btn-entradas">Comprar entradas</button>
                </div>
                </div>
        `
        }
    )}  
    ).catch((error) => {
        console.log(error)
    })  
}


const modalContainer = document.querySelector("#modal-container")
const openModal = document.querySelector("btn-entradas")
const closeModal = document.querySelector("#close-modal")

const seleccionarPelicula = e => {
    if (e.target.classList.contains('btn-entradas')) {
        const id = e.target.id;
        const pelicula = funcion_cine.find(p => p.id == id);

        _div = ` 
            <h4>Elija su pelicula: ${pelicula.nombre} </h4>
            <h4>${pelicula.horarios.map((h) =>{ return `<br>${h.dia} ${ h.horarios.map(( hr) => ` <br> ${hr.hora} `  )}`  })}
            </h4>
            <br>
            `
        modalContainer.querySelector("#my-modal").innerHTML = _div

        modalContainer.classList.add("my-modal-container--visible")

        localStorage.setItem("peliculas",JSON.stringify(pelicula))

        const listaPelicula = JSON.parse(localStorage.getItem("peliculas"))

        console.log(listaPelicula)

    }
}

closeModal.addEventListener( "click", () => {
    modalContainer.classList.remove("my-modal-container--visible")
})

peliculas.addEventListener('click', seleccionarPelicula);
window.addEventListener('DOMContentLoaded', mostrarPeliculas)