const funcion_cine = [
{
    "id": 1,
    "nombre_pelicula": "Jurassic World Dominio",
    "duraccion" : 190,
    "clasificacion" : "Ciencia Ficcion",
    "idioma" : "Subtitulado al español",
    "dia": "Viernes",
    "horario" :" 19:20 hs",
    "precio": "$500",
    "cant_entradas" :20,
},
{   "id":2,
    "nombre_pelicula": "Minions",
    "duraccion" : 90,
    "clasificacion" : "Dibujos animados",
    "idioma" : "Castellano",
    "dia": "Sabado",
    "horario" :" 11:00 hs",
    "precio": "$500",
    "cant_entradas" : 15,
},
{   "id":3,
    "nombre_pelicula": "Mi novia Polly",
    "duraccion" : 110,
    "clasificacion" : "comedia",
    "idioma" : "Castellano",
    "dia": "Sabado",
    "horario" :" 17:00 hs",
    "precio": "$500",
    "cant_entradas" : 15,
},
{   "id":4,
    "nombre_pelicula": "Le temes a la oscuridad",
    "duraccion" : 110,
    "clasificacion" : "suspenso",
    "idioma" : "Subtitulada",
    "dia": "Sabado",
    "horario" :" 22:30 hs",
    "precio": "$500",
    "cant_entradas" : 20,
},
{   "id":5,
    "nombre_pelicula": "Sonic 2",
    "duraccion" : 90,
    "clasificacion" : "aventuras",
    "idioma" : "Subtitulada",
    "dia": "Sabado",
    "horario" :" 14:30 hs",
    "precio": "$500",
    "cant_entradas" : 20,
},
]


const combos = [
    {
        "id" : 1,
        "nombre_combo": "Combo pelicula",
        "incluye": "1 balde pochoclo  + 2 gaseosas + 1 vaso pelicula ",
        "precio_combo" : "precio: 1300",
    },
    {
        "id" : 2,
        "nombre_combo": "Combo familia",
        "incluye": "2 baldes grandes de pochoclos + 4 gaseosas",
        "precio_combo" : "precio: 1600",

    },
    {
        "id" : 3,
        "nombre_combo": "Combo premium",
        "incluye": "1 balde pochoclo + 2 gaseosas + 2 vaso pelicula + 2 chocolates ",
        "precio_combo" : "precio: 1850",

    },
    {
        "id" : 4,
        "nombre_combo": "Combo dúo",
        "incluye": "1 balde pochoclo + 2 gaseosas",
        "precio_combo" :"precio: 1000",

    }

]
console.log("CARTELERA")

    for (const pelicula of funcion_cine) {
        console.log(pelicula.id, pelicula.nombre_pelicula, pelicula.dia, pelicula.horario, pelicula.clasificacion, pelicula.idioma)
    }


function elegir_pelicula () {
    let pelicula_elegida = (prompt("Elija su pelicula"));
    let horario = (prompt("Elija el horario de la pelicula"));
    let dia = (prompt("Ingrese el dia de su función"));
    let entradas_seleccionadas = (prompt("Ingrese cantidad de entradas"))
    ;

    console.log("Tu ticket")
    console.log(pelicula_elegida);
    console.log(horario);
    console.log(dia);
    console.log(entradas_seleccionadas);

}

elegir_pelicula();

prompt("¡¿Te gustaria agregar un combo de pochoclos?");

console.log("Combos de sabrosos pochoclos")

    for (const pochoclos of combos) {
        console.log( pochoclos.nombre_combo,pochoclos.incluye, pochoclos.precio_combo )
    }


function tu_combo_pochoclos () {
    let combo = (prompt("Elija tu combo"));
        
    console.log("Tu combo elegido es: " + combo);  
}

tu_combo_pochoclos();