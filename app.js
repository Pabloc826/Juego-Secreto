
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemnto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verifcarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemnto('p', `Felicitaciones, acertaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemnto('p', 'El número secreto es menor')
        } else {
            asignarTextoElemnto('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja()
    };
    
    return;
};

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
};


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemnto('p', 'Ya se sortearon todos los números posibles')
    } else {
            //si el numero generaod esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
         } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        };
    };




};

function condicionesIniciales() {
    asignarTextoElemnto('h1', 'Juego del Número secreto c:');
    asignarTextoElemnto('p', `Selecciona un número del 1 al ${numeroMaximo} C:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
};


condicionesIniciales();