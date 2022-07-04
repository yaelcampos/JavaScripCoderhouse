const peliculasContainer = document.querySelector("#card-peliculas")

const mostrarPeliculas = () => {
    funcion_cine.forEach(pelicula => {
        const cardPelicula = document.createElement("section")
        cardPelicula.classList.add("#peliculas")

        peliculas.innerHTML += `
        <div class="card card-style my-4" style="width: 18rem;">
        <img src="${pelicula.imagen}" class="card-img-top img-cartelera" alt="...">
        <div class="card-body">
        <h5 class="card-title">${pelicula.nombre}</h5>
        <p class="card-text">${pelicula.descripcion}</p>
        <button id="${pelicula.id}" class="btn btn-primary btn-entradas">Comprar entradas</button>
        </div>
        </div>
        `
    });
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
window.addEventListener('DOMContentLoaded', mostrarPeliculas);







