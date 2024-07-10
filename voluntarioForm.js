const formUno = document.getElementById("form1");
const formDos = document.getElementById("form2");
const formTres = document.getElementById("form3");
const btnNextUno = document.getElementById("next1");
const btnNextDos = document.getElementById("next2");
const btnBackUno = document.getElementById("back1");
const btnBackDos = document.getElementById("back2");
const btnEnvio = document.getElementById("botonEnvio");
const barraProgreso = document.getElementById("progreso");
let inputEmail = document.getElementById("emailInput");
let inputNombre = document.getElementById("nameInput");
let inputApellido = document.getElementById("surnameInput");
const introduccionformParrafo = document.querySelector(".introduccionform p");

//Primer Paso
btnNextUno.addEventListener("click", () => {
  if (inputEmail.value.trim() === "") {
    inputEmail.classList.add("error-input");
    introduccionformParrafo.textContent =
      "En orden de poder enviar el formulario, es necesario que se completen todos los campos";
  } else {
    formUno.style.left = "-800px";
    formDos.style.left = "40px";
    barraProgreso.style.width = "240px";
    introduccionformParrafo.textContent = "";
  }
});
btnBackUno.addEventListener("click", () => {
  formUno.style.left = "40px";
  formDos.style.left = "800px";
  barraProgreso.style.width = "120px";
});

//Segundo Paso
btnNextDos.addEventListener("click", () => {
  if (inputNombre.value.trim() === "") {
    inputNombre.classList.add("error-input");
    introduccionformParrafo.textContent =
      "En orden de poder enviar el formulario, es necesario que se completen todos los campos";
  } else if (inputApellido.value.trim() === "") {
    inputApellido.classList.add("error-input");
    introduccionformParrafo.textContent =
      "En orden de poder enviar el formulario, es necesario que se completen todos los campos";
  } else {
    formDos.style.left = "-800px";
    formTres.style.left = "40px";
    barraProgreso.style.width = "360px";
    introduccionformParrafo.textContent = "";
  }
});
btnBackDos.addEventListener("click", () => {
  formDos.style.left = "40px";
  formTres.style.left = "800px";
  barraProgreso.style.width = "240px";
});

//Enviar Formulario
btnEnvio.addEventListener("click", (event) => {
  event.preventDefault();
  let opciones = document.getElementsByName("colaboracion");
  let opcionSeleccionada = false;
  for (let a = 0; a < opciones.length; a++) {
    if (opciones[a].checked) {
      opcionSeleccionada = true;
      break;
    }
  }
  if (!opcionSeleccionada) {
    introduccionformParrafo.textContent =
      "En orden de poder enviar el formulario, es necesario la elección de una opción";
  } else {
    introduccionformParrafo.textContent =
      "Le agradecemos por su colaboración, en los siguientes días un miembro del equipo se contactará con usted";
    formUno.style.left = "40px";
    formDos.style.left = "800px";
    formTres.style.left = "800px";
    barraProgreso.style.width = "120px";
  }
});
