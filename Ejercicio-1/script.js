//
// Práctica 10 - Cronómetro
//
let time;
let cont = 0;

function iniciar(){
    time = window.setInterval(cronometro,1000);
}
function cronometro(){
    const cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = cont++; // va a incrementando de uno en uno
}
function detener(){
    window.clearInterval(time);
}
function limpiar(){
    const limpia = document.getElementById('cronometro');
    cont = 0; // usar el contador para que no agarrerre el global es para que inicia utomaticamente en cero
    limpia.innerHTML = cont; // ese contador lo que hace es guardarlo dentro de la variable limpia para que inicie nuevamente en cero
}

const botonIniciar = document.getElementById('iniciar');
botonIniciar.addEventListener('click', iniciar);

const botonDetener = document.getElementById('detener');
botonDetener.addEventListener('click', detener);

const botonLimpiar = document.getElementById('limpiar');
botonLimpiar.addEventListener('click', limpiar);

console.log('Esto es un cronómetro!');