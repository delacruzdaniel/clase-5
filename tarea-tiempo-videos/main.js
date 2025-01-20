
let totalSegundos = 0
let totalMinutos = 0
let totalHoras = 0

const $agregarVideo = document.querySelector("#agregar-video");

$agregarVideo.onclick = function () {
    const segundos = Number(document.querySelector("#segundos").value);
    const minutos = Number(document.querySelector("#minutos").value);
    const horas = Number(document.querySelector("#horas").value);

    totalSegundos += segundos;
    totalMinutos += minutos;
    totalHoras += horas;

    if (totalSegundos >= 60) {
        totalMinutos += Math.floor(totalSegundos / 60);  
        totalSegundos = totalSegundos % 60;  
    }

    // Convertir los minutos en horas
    if (totalMinutos >= 60) {
        totalHoras += Math.floor(totalMinutos / 60);  
        totalMinutos = totalMinutos % 60;  
    }

    return false;
};

const $calcularTiempoTotal = document.querySelector("#calcular-tiempo");

$calcularTiempoTotal.onclick = function () {
    document.querySelector("h2").innerHTML = `El tiempo total de todos los videos es de ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`
};
