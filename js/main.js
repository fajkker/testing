// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });

// // BOTON REGRESAR INDEX
// $('#returnBtn').click(function() {
//     location.href="index.html";
// });


// // BOTON REGRESAR DUNGEON
// $('#returnBtn2').click(function() {
//     location.href="dungeon.html";
// });

// // BOTON CLASES
// $('#classBtn').click(function() {
//     location.href="class.html";
// });

// function getNumRand(min, max) {       
//     return Math.round(Math.random()*(max-min)+parseInt(min));
// }

// // IMPORTO SCRIPT.JS
// // import { int } from "./script.js"

// //TRAIGO MAGO
// function mostrarM(input) {
//     var mage=document.getElementById("mage")
//     if(input.value=="Mago") {
//         mage.style.display = "block";
//         input.value="Ocultar"
//     } else {
//         mage.style.display = "none"
//         input.value="Mago"
//     }
// };


// // TRAIGO WARRIOR
// function mostrarW(input) {
//     var warrior=document.getElementById("warrior")
//     if(input.value=="Warrior") {
//         warrior.style.display = "block";
//         input.value="Ocultar"
//         console.log("Elegiste Warrior")
//     } else {
//         warrior.style.display = "none"
//         input.value="Warrior"
//     }
// };


// // TRAIGO PALADIN
// function mostrarP(input) {
//     var paladin=document.getElementById("paladin")
//     if(input.value=="Paladin") {
//         paladin.style.display = "block";
//         input.value="Ocultar"
//     } else {
//         paladin.style.display = "none"
//         input.value="Paladin"
//     }
// };


// // TRAIGO BARDO
// function mostrarB(input) {
//     var bardo=document.getElementById("bardo")
//     if(input.value=="Bardo") {
//         bardo.style.display = "block";
//         input.value="Ocultar"
//     } else {
//         bardo.style.display = "none"
//         input.value="Bardo"
//     }
// };


// // TRAIGO ARQUERO
// function mostrarA(input) {
//     var arquero=document.getElementById("arquero")
//     if(input.value=="Arquero") {
//         arquero.style.display = "block";
//         input.value="Ocultar"
//     } else {
//         arquero.style.display = "none"
//         input.value="Arquero"
//     }
// };


// var clase = [" Guerrero", " Paladin", " Bardo"];
// clase.unshift("Mago")
// clase.push(" Arquero")
// document.getElementById("clase").innerHTML = "Tienes " + clase.length + " clases para elegir" + ": " + clase.map((el) => el);

// var clase = [
//     {nombre: 'Guerrero', arma: 'maza'},
//     {nombre: 'Bardo', arma: 'musica'},
//     {nombre: 'Paladin', arma: 'espada'},
//     {nombre: 'Mago', arma: 'magia'},
//     {nombre: 'Arquero', arma: 'arco'},
// ]

console.log(information);


//VARIABLES
const clase = document.querySelector('#clase');
const arma = document.querySelector('#arma');
const resultado = document.querySelector('#resultado');

// Generar un objeto con la busqueda
const datosBusqueda = {
    clase : '',
    arma : '',
    intelecto: '',
}

//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarInformation(information);

    llenarSelect()
})

// Event listener para los select
clase.addEventListener('change', e => {
    datosBusqueda.clase = e.target.value;

    filtrarInfo();
});

arma.addEventListener('change', e => {
    datosBusqueda.arma = e.target.value;

    console.log(datosBusqueda);
})


//FUNCIONES
function mostrarInformation(information) {

    limpiarHTML(); //Elimina HTML previo

    information.forEach( info =>  {

        const { clase, arma } = info;
        const infoHTML = document.createElement('p');

        infoHTML.textContent = `
            ${clase} - ${arma}

            `;

            resultado.appendChild(infoHTML)
    } )
}

// Funcion que filtra en base a la busqueda
function filtrarInfo() {
    const resultado = information.filter( filtrarClase );

    console.log(resultado);

    mostrarInformation(resultado);
}

function filtrarClase(info) {
    const { clase } = datosBusqueda;
    if( clase ) {
        return info.clase == datosBusqueda.clase;
    }
    return info;
}



function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}