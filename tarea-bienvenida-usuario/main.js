//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonDeIngreso = document.querySelector("#boton-ingresar");

$botonDeIngreso.onclick = function () {
    const primerNombreDeUsuario = document.querySelector("#primer-nombre").value;
    const segundoNombreDeUsuario = document.querySelector("#segundo-nombre").value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    let edadUsuario = Number(document.querySelector("#edad-usuario").value);
    const informacionUsuario = `Nombre: ${primerNombreDeUsuario} ${segundoNombreDeUsuario} ${apellidoUsuario}, Edad: ${edadUsuario}`;

    document.querySelector("h2").innerHTML = `Tus datos son los siguientes: ${informacionUsuario}`;
    document.querySelector("h1").innerHTML = `Bienvenido ${primerNombreDeUsuario} ${segundoNombreDeUsuario} ${apellidoUsuario}`;

    return false;
};