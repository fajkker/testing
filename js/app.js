// Constructor
function Personaje(clase, int, tipo) {
    this.clase = clase;
    this.int = int;
    this.tipo = tipo;
}
Personaje.prototype.cotizarPersonaje = function() {
    /*
         1 = Mago 2
         2 = Warrior 3
         3 = Paladin 4
    */
    let cantidad;
    const base = 2;

    switch(this.clase){
         case '1':
              cantidad = base * 2;
              break;
         case '2':
              cantidad = base * 3;
              break;
         case '3':
              cantidad = base * 4;
              break;
    }

    // Leer el nivel
    const diferencia = this.int;
    // Cada nivel hay que reducir 3% el valor
    cantidad = ((diferencia * 3) * cantidad) / 100;
    /*
         Si el elegido es básico se múltiplica
         Si el elegido es completo
    */
   if(this.tipo === 'Wand') {
        cantidad *= 2;
     } if(this.tipo === 'Espada') {
          cantidad *= 3;
     } else {
        cantidad *= 4;
   }

    return cantidad;

}

// Todo lo que se muestra
function Interfaz() {}

// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
         div.classList.add('mensaje','error');
    } else {
         div.classList.add('mensaje','correcto');
    }
    div.classList.add('mt-10');
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('#resultado')); // Nuevo Nodo y referencia... // Si la referencia no existe se añadira al final

    setTimeout( () =>  {
         document.querySelector('.mensaje').remove();
    }, 3000);
} 

// Imprime el resultado de la configuracion
Interfaz.prototype.mostrarResultado = function(personaje, total) {
    const resultado = document.querySelector('#resultado');
    let clase;
    switch(personaje.clase) {
         case '1':
              clase = 'Mago';
              break;
         case '2':
              clase = 'Warrior';
              break;
         case '3':
              clase = 'Paladin';
              break;
    }
    // Crear un div
    const div = document.createElement('div');
    div.classList.add('mt-10')
    // Insertar la informacion
    div.innerHTML = `
         <p class='header'>Tu Eleccion: </p>
         <p class="font-bold">Clase: <span class="font-normal"> ${clase} </span> </p>
         <p class="font-bold">Nivel: <span class="font-normal"> ${personaje.int} </span> </p>
         <p class="font-bold">Arma: <span class="font-normal"> ${personaje.tipo} </span> </p>
         <p class="font-bold">Total de daño: <span class="font-normal"> ${total} </span> </p>
    `;

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout( () =>  {
         spinner.style.display = 'none';
         resultado.appendChild(div);
    }, 3000);
    
}

Interfaz.prototype.llenarOpciones = function () {
    const max = 0,
         min = max + 100;

    const selectInt = document.querySelector('#nivel');
    for(let i = max; i < min; i) {
         let option = document.createElement('option');
         option.value = i += 10;
         option.innerHTML = i;
         selectInt.appendChild(option);
    }   
}

// Crear instancia de Interfaz
const interfaz = new Interfaz();

document.addEventListener('DOMContentLoaded', () => {
    interfaz.llenarOpciones()
});

// DOM Operaciones
const formulario = document.querySelector('#reselect');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();

    // leer la clase seleccionada del select
    const clase = document.querySelector('#clase').value;

    // leer el nivel seleccionado del <select>
    const nivel = document.querySelector('#nivel').value

    // lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;



    // Por si los campos estan vacios
    if(clase === '' || nivel === '' || tipo === '') {
         // Interfaz imprimiendo un error
         interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    } else {
         // Limpiar resultados anteriores
         const resultados = document.querySelector('#resultado div');
         if(resultados != null) {
              resultados.remove();
         }

         // Instanciar personaje y mostrar interfaz
         const personaje = new Personaje(clase, nivel, tipo);
         // Calcular el personaje
         const cantidad = personaje.cotizarPersonaje();
         // Mostrar el resultado
         interfaz.mostrarResultado(personaje, cantidad);
         interfaz.mostrarMensaje('Configurando...', 'exito');
    }

});
