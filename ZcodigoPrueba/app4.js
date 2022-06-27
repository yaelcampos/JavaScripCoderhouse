

console.log(document.head)

const sonAliens = document.getElementById("alien")

console.log(sonAliens.innerText)
console.log(sonAliens.innerHTML)

const ciudad = prompt("Ingrese ciudad")

sonAliens.innerText ="Bienvenido a todos los alienigenas de " + ciudad;

const listItem = document.getElementsByClassName("list-item")

console.log(listItem)

const contenedor = document.getElementsByClassName("contenedor")

contenedor.innerHTML= "<h3>Hola</h3><p>esta soy yo</p><hr>"
console.log(contenedor)

contenedor.innerText= "<h3>Hola</h3><p>esta soy yo</p><hr>"
console.log(contenedor)

const textito = document.createElement("p")
textito.innerText = ("Sueretudo es hermoso y suavechito todo el tiempo")

console.log(textito)

document.body.append(textito)


//-----------------Event------------------------//
const btn1 = document.querySelector("#boton1")

const clickear = () =>  {
    console.log("Botón clickeado")
}

btn1.addEventListener("click",clickear)

const alertar = () => {
    alert ("Boton clikeado")
}