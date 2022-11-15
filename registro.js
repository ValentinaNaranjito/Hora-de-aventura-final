const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repeatPassword");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".username")

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion){
        enviarFormulario();
    }
});

function validacionForm(){
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML ="";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("myname", "Nombre no valido*")
        condicion = false;
    }
    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
        mostrarMensajeError("surname", "Apellido no valido*")
        condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*")
        condicion = false;
    }
    if (celular.value.length != 10 || celular.value.trim() == "" || isNaN(celular.value)) {
        mostrarMensajeError("mobile", "Número no valido*")
        condicion = false;
    }
    if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
        mostrarMensajeError("password", "Contraseña no valida*")
        condicion = false;
    }
    if (contrasenia2.value != contrasenia.value) {
        mostrarMensajeError("repeatPassword", "La contraseña no coincide*")
        condicion = false;
    }
    return condicion;
}

function mostrarMensajeError (claseInput, mensaje){
    let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario(){
    let user ={ nombre: nombre.value, apellido: apellidos.value, correo: correo.value, celular: celular.value, contraseña: contrasenia.value, }
    users.push(user)

    localStorage.setItem("user", user);

window.location.href = "index.html"

    form.reset();
    form.lastElementChild.innerHTML = "Listo !!";
}