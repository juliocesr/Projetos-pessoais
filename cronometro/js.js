const tempo = document.querySelector('.tempo');
const iniciarbtn = document.querySelector('.iniciar');
const pausarbtn = document.querySelector('.pausar');

iniciarbtn.addEventListener('click', iniciar);
pausarbtn.addEventListener('click', pausar);
pausarbtn.addEventListener('dblclick', resetar);

let milSegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0
let cronometro;

function iniciar() {
    cronometro = setInterval(() => {
        timer();
    }, 10)
    iniciarbtn.setAttribute('disabled', '');
}
function pausar() {
    clearInterval(cronometro);
    iniciarbtn.removeAttribute('disabled');
}
function resetar() {
    tempo.textContent = '0:0:0:0';
    milSegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
}
function timer() {
    milSegundos++;
    if (milSegundos == 100) {
        milSegundos = 0;
        segundos++;
    } else if (segundos == 60) {
        segundos = 0;
        minutos++
    } else if (minutos == 60) {
        minutos = 0;
        horas++
    }
    tempo.textContent = `${horas}:${minutos}:${segundos}:${milSegundos}`;
}
