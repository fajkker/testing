$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// BOTON REGRESAR INDEX
$('#returnBtn').click(function() {
    location.href="index.html";
});


// BOTON REGRESAR DUNGEON
$('#returnBtn2').click(function() {
    location.href="dungeon.html";
});

// BOTON CLASES
$('#classBtn').click(function() {
    location.href="class.html";
});

function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}


var clase = [
    {nombre: 'Guerrero', arma: 'maza'},
    {nombre: 'Bardo', arma: 'musica'},
    {nombre: 'Paladin', arma: 'espada'},
    {nombre: 'Mago', arma: 'magia'},
    {nombre: 'Arquero', arma: 'arco'},
]

clase.forEach( (clase) => {
    console.log(clase)
})

var nombres = clase.map((el => el.nombre))
console.log(nombres)

var armas = clase.map((el => el.arma))
console.log(armas)


console.log(clases);