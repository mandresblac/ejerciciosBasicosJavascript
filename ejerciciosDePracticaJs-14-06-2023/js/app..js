// Variables
const num1 = document.querySelector('#num1').value;
const num2 = document.querySelector('#num2').value;
const btnComprobar = document.querySelector('#btnComprobar')
const btnResetear = document.querySelector('#btnResetear')
const resultado = document.querySelector('#resultado')

// Eventos
btnComprobar.addEventListener('click', validar);
btnResetear.addEventListener('click', resetearFormulario);

function validar(e) {
    e.preventDefault();
    limpiarHtml();

    if(num1.trim() === "" || num2.trim() === "") {
        mostrarResultado("Debes ingresar al menos un valor en uno de los campos.");
    } else if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Debes ingresar un número válido en ambos campos.");
    } else {
        mostrarResultado("Los datos ingresados son válidos.");
    }
    
    
};

function mostrarResultado(texto) {
    const parrafo = document.createElement('p');
    parrafo.textContent = `${texto}`;

    resultado.appendChild(parrafo);

    setTimeout(() => {
        parrafo.remove();
    }, 3500);
}

// Funcion para resetear el formulario
function resetearFormulario(e) {
    e.preventDefault();
    document.querySelector('#formulario').reset(); // Reseteamos formulario con .reset( )
    
    // Ponemos el foco en el campo num1
    document.querySelector('#num1').focus();
}

// Funcion para limpiar el html
function limpiarHtml() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}