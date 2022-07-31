const peliculasContainer = document.querySelector("#card-peliculas") 
let listadoPeliculas = []
const modalContainer = document.querySelector("#modal-container")
const openModal = document.querySelector("#img-cartelera")
const closeModal = document.querySelector("#close-modal")

const selectDiaFuncion = document.querySelector('#diaSeleccionado')

const mostrarPeliculas = () => {


    fetch("https://api.themoviedb.org/3/movie/popular?api_key=047212871d49b6418656e8bb299c3da6")
    .then( (resp) =>  resp.json())
    .then((data) => {

        listadoPeliculas = data.results
        
        data.results.forEach((pelicula) => {

        peliculas.innerHTML += `
                <div class="card card-style my-4" style="width: 18rem;">
                <img class="card-img-top img-cartelera" id="${pelicula.id}"  alt="..." src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
                <div class="card-body">
                <h5 class="card-title">${pelicula.title}</h5>
                <p class="card-text">${pelicula.overview}</p>
                </div>
                </div>
        `
        }
    )}  
    ).catch((error) => { 
        console.log(error)
    })  
}

const compraExitosa = () => {

    swal('Pagado!','¡Disfruta tu pelicula!','success', {
        buttons: false,
        timer: 3000,
    });
}

const peliculaSeleccionada = e => {

    const id = e.target.id;
    const pelicula = listadoPeliculas.find(p => p.id == id);

    let r = Math.floor(Math.random() * 5)
    const horario = horarios[r]
        if (e.target.classList.contains('img-cartelera')) {

            let options_dias = ''
            horario.horarios.forEach( d => {
                options_dias += `<option value="${d.dia}">${d.dia}</option>`
            })

            let options_horarios = ''
            horario.horarios[0].horarios.forEach( h => {
                options_horarios = `<option value="${h.hora}">${h.hora}</option>`
            })

            _div = `
                <div class="modal__entradas">
                    <div class="modal-info">   
                        <div>
                            <img alt="..." style="width:180px" src="https://image.tmdb.org/t/p/w500/${pelicula["poster_path"]}">
                        </div>
                        <div class="detalle-entradas">
                            <h5 class="card-title">${pelicula.title}</h5>
                            <select class="form-select mt-4" id="diaSeleccionado" aria-label="Default select example">
                                <option selected>Seleccione el día</option>
                                ${options_dias}
                            </select>
                            <select class="form-select mt-4" id="horaSeleccionada" aria-label="Default select example">
                                <option selected>Horario</option>
                                ${options_horarios}
                            </select>
                            <div class="input-cantidad mt-4">
                                <label>Cantidad</label>
                                <input type="text" class="form-control w-25" id="cantidadSeleccionada" aria-label="Dollar amount (with dot and two decimal places)">
                            </div>
                            <div class="div-entrada-general">
                                <h6 class="mt-2">Tickets:Entrada general</h6>
                                <input id="valor-entrada" value="${horario["precio"]}" type="hidden" class="hidden">
                                <h6 class="mt-2">Costo:${horario["precio"]}</h6>
                            </div>    
                            <button class="btn-entradas mt-3" onclick="comprarMisEntradas()">Comprar</button>
                        </div>
                    </div> 
                        <div class="contenedor-compra" id="contenedor-compra">
                                <h4 class="h4-compra"> Tu compra</h1>
                                <div class="div-contenedor-compra">
                                    <h6>Pelicula: ${pelicula.title}</h6>
                                    <h6 id="diaElegido">Dia:</h6>
                                    <h6 id="horaElegida">horario</h6>
                                    <h6 id="cantidadElegida"></h6>
                                </div> 
                                <div class="input-cantidad mt-4">
                                    <h6>Total a pagar : </h6>
                                    <h6 id="totalPagar"></h6>
                                </div>    
                            <button  class="btn-entradas mt-2"  onclick="compraExitosa()">Pagar</button>
                        </div>
                </div>
                `

            modalContainer.querySelector("#my-modal").innerHTML = _div
            modalContainer.classList.add("my-modal-container--visible")
            localStorage.setItem("peliculas",JSON.stringify(pelicula))

            const listaPelicula = JSON.parse(localStorage.getItem("peliculas"))

        }
    }



function comprarMisEntradas(){

    const diaSeleccionado = document.getElementById("diaSeleccionado").value 
    const horaSeleccionada = document.getElementById("horaSeleccionada").value
    const cantidadSeleccionada = document.getElementById("cantidadSeleccionada").value
    const precio = document.getElementById("valor-entrada").value

    document.getElementById("diaElegido").innerText = `El dia elegido: ${diaSeleccionado}`
    document.getElementById("horaElegida").innerText = `Tu horario es: ${horaSeleccionada} hs`
    document.getElementById("cantidadElegida").innerText = `Tus entradas son: ${cantidadSeleccionada}`
    document.getElementById("totalPagar").innerText =  cantidadSeleccionada * precio
}


peliculas.addEventListener('click', peliculaSeleccionada);
window.addEventListener('DOMContentLoaded', mostrarPeliculas)

closeModal.addEventListener( "click", () => {
    modalContainer.classList.remove("my-modal-container--visible")
})


