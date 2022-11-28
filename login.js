
const correo = document.getElementById("correo");
const contrasenia = document.getElementById("contraseña");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".username")
users =JSON.parse(localStorage.getItem("users"))
console.log(users)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
});

function validacionForm() {
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*")
        condicion = false;
    }
    if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
        mostrarMensajeError("password", "Contraseña no valida*")
        condicion = false;
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    let user = users.find(user => correo.value === user.correo)
    if (user === undefined) {
        mostrarMensajeError("password", "usuario no existente, Registrese")
    } else {
        localStorage.setItem('actualUser', JSON.stringify(user));
        window.location.href = "index.html"

    }
}
