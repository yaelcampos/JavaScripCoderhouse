
const modalContainer = document.querySelector("#modal-container")
const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")

openModal.addEventListener("click", ()=> {
    modalContainer.classList.add("my-modal-container--visible")

    let pelicula =  funcion_cine.find(peliculas => peliculas.id == openModal.dataset.id)

    _div = ` 
            <h4>Elija su pelicula: ${pelicula.nombre} </h4>
            <h4>${pelicula.horarios.map((h) =>{ return `<br>${h.dia} ${ h.horarios.map(( hr) => ` <br> ${hr.hora} `  )}`  })}
            </h4>
            <label for="uname">Seleccione la cantidad de entradas: </label>
            <input type="number" id="cantidad" name="cantidad">
            <br>
            `

    modalContainer.querySelector("#my-modal").innerHTML = _div
})

closeModal.addEventListener( "click", () => {
    modalContainer.classList.remove("my-modal-container--visible")
})



